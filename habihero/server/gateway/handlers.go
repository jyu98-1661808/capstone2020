package main

import (
	"fmt"
	"database/sql"
	"golang.org/x/crypto/bcrypt"
	"encoding/json"
	"net/http"
	"time"
	"github.com/satori/go.uuid"
	"net/mail"
	"strings"
	_ "github.com/lib/pq"
)

//User represents a user account in the database
type User struct {
	ID        int64  `json:"id"`
	Email     string `json:"-"` //never JSON encoded/decoded
	PassHash  string `json:"-"` //never JSON encoded/decoded
	UserName  string `json:"userName"`
	FullName  string `json:"fullName"`
}

// Credentials Create a struct that models the structure of a user
type Credentials struct {
	Email 		string `json:"email"`
	Password 	string `json:"password"`
}

//NewUser represents a new user signing up for an account
type NewUser struct {
	Email        string `json:"email"`
	Password     string `json:"password"`
	PasswordConf string `json:"passwordConf"`
	UserName     string `json:"userName"`
	FullName     string `json:"fullName"`
}

// SignUp validates a new user sign up attempt and creates a new user profile in the db if valid 
func SignUp(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Wrong Status Method", http.StatusMethodNotAllowed)
		return
	}
	contentType := r.Header.Get("Content-Type")
	if !strings.HasPrefix(contentType, "application/json") {
		http.Error(w, "Request body must be JSON", http.StatusUnsupportedMediaType)
		return
	}
	// create new user instance to hold sign up information
	newUser := &NewUser{}

	// Decode request and store in newUser
	decErr := json.NewDecoder(r.Body).Decode(newUser)
	if decErr != nil {
		// If there is something wrong with the request body, return a 400 status
		// w.WriteHeader(http.StatusBadRequest)
		http.Error(w, "Bad Request", http.StatusBadRequest)
		return 
	}
	// Ensure the data is valid and create a new user account in the database.
	err := newUser.Validate()
	if err != nil {
		http.Error(w, "Invalid new user", http.StatusBadRequest)
		return
	}

	// After validating newUser convert newuser to a user struct
	user, _ := newUser.ToUser()

	insForm, err := db.Prepare("INSERT INTO Users(Email, PassHash, UserName, FullName) VALUES (?,?,?,?)")
	if err != nil {
		panic(err.Error())
	}
	insForm.Exec(user.Email, user.PassHash, user.UserName, user.FullName)

	// Create a new random session token
	u, err := uuid.NewV4()
	sessionToken := u.String() 
	// Set the token in the cache, along with the user whom it represents
	// The token has an expiry time of 300 seconds
	_, err = cache.Do("SETEX", sessionToken, "300", user.Email)
	if err != nil {
		// If there is an error in setting the cache, return an internal server error
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	// Finally, we set the client cookie for "session_token" as the session token we just generated
	// we also set an expiry time of 300 seconds, the same as the cache
	http.SetCookie(w, &http.Cookie {
		Name:    "session_token",
		Value:   sessionToken,
		Expires: time.Now().Add(300 * time.Second),
	})

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(user)
}


// SignIn allows a user to sign-in to an already created account
func SignIn(w http.ResponseWriter, r *http.Request) {
	// Parse and decode the request body into a new `Credentials` instance	
	creds := &Credentials{}
	err := json.NewDecoder(r.Body).Decode(creds)
	if err != nil {
		// If there is something wrong with the request body, return a 400 status		
		w.WriteHeader(http.StatusBadRequest)
		return 
	}

	// Get the existing entry present in the database for the given username
	// result := db.QueryRow("SELECT PassHash FROM Users WHERE Email=$1", creds.Email)
	sqlStatement := `SELECT PassHash FROM Users WHERE Email=$1`
	result := db.QueryRow(sqlStatement, creds.Email)
	if err != nil {
		// If there is an issue with the database, return a 500 error
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(result)

	// We create another instance of `Credentials` to store the credentials we get from the database
	storedCreds := &Credentials{}
	// Store the obtained password in `storedCreds`
	err = result.Scan(&storedCreds.Password)
	if err != nil {
		// If an entry with the username does not exist, send an "Unauthorized"(401) status
		if err == sql.ErrNoRows {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		// If the error is of any other type, send a 500 status
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	// Compare the stored hashed password, with the hashed version of the password that was received
	if err = bcrypt.CompareHashAndPassword([]byte(storedCreds.Password), []byte(creds.Password)); err != nil {
		// If the two passwords don't match, return a 401 status
		w.WriteHeader(http.StatusUnauthorized)
	}

	// Create a new random session token
	u, err := uuid.NewV4()
	sessionToken := u.String() 
	// Set the token in the cache, along with the user whom it represents
	// The token has an expiry time of 300 seconds
	_, err = cache.Do("SETEX", sessionToken, "300", creds.Email)
	if err != nil {
		// If there is an error in setting the cache, return an internal server error
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	// Finally, we set the client cookie for "session_token" as the session token we just generated
	// we also set an expiry time of 300 seconds, the same as the cache
	http.SetCookie(w, &http.Cookie {
		Name:    "session_token",
		Value:   sessionToken,
		Expires: time.Now().Add(300 * time.Second),
	})
}

// ----------------- Helpers ---------------------------

// Validate validates the new user and returns an error if
// any of the validation rules fail, or nil if its valid
func (nu *NewUser) Validate() error {
	_, err := mail.ParseAddress(nu.Email)
	if err != nil {
		return fmt.Errorf("Not a valid email address")
	}
	if len(nu.Password) < 6 {
		return fmt.Errorf("Not a valid password")
	}
	if nu.Password != nu.PasswordConf {
		return fmt.Errorf("Password is incorrect")
	} 
	if len(nu.UserName) == 0 || strings.Contains(nu.UserName, " ") {
		return fmt.Errorf("Invalid username length or contains space")
	}
	return nil
}

// ToUser converts the NewUser to a User
func (nu *NewUser) ToUser() (*User, error) {
	usr := new(User)
	usr.Email = nu.Email
	usr.UserName = nu.UserName
	usr.FullName = nu.FullName

	// set password
	err := usr.SetPassword(nu.Password)
	if err != nil {
		return nil, err
	}
	return usr, nil
}

//SetPassword hashes the password and stores it in the PassHash field
func (u *User) SetPassword(password string) error {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), 8)
	if err != nil {
		return err
	}
	u.PassHash = string(hash)
	return nil
}

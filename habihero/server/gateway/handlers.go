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
	PassHash  []byte `json:"-"` //never JSON encoded/decoded
	UserName  string `json:"userName"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
}

// Credentials Create a struct that models the structure of a user, both in the request body, and in the DB
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
	FirstName    string `json:"firstName"`
	LastName     string `json:"lastName"`
}

// SignUp does this
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

	// Check for duplicate emails
	// _, err = GetByEmail(newUser.Email)
	// if err == nil {
	// 	http.Error(w, "Duplicate email", http.StatusBadRequest)
	// 	return
	// }

	// After validating newUser convert newuser to a user struct
	user, _ := newUser.ToUser()

	// // Next, insert the username, along with the hashed password into the database
	// if _, err = db.Query("INSERT INTO Users VALUES ($1, $2, $3, $4, $5)", 
	// 					user.Email, user.PassHash, user.UserName, user.FirstName, user.LastName); err != nil {
	// 	// If there is any issue with inserting into the database, return a 500 error
	// 	w.WriteHeader(http.StatusInternalServerError)
	// 	return
	// }

	// insq := "INSERT INTO Users(Email, PassHash, UserName, FirstName, LastName) VALUES (?,?,?,?,?)"
	// res, err := db.Exec(insq, user.Email, user.PassHash, user.UserName, user.FirstName, user.LastName)
	// if err != nil {
	// 	w.WriteHeader(http.StatusInternalServerError)
	// 	return
	// }
	// //get the auto-assigned ID for the new row
	// id, err := res.LastInsertId()
	// if err != nil {
	// 	fmt.Printf("error getting new ID: %v\n", id)
	// } else {
	// 	fmt.Printf("ID for new row is %d\n", id)
	// }

	insForm, err := db.Prepare("INSERT INTO Users(Email, PassHash, UserName, FirstName, LastName) VALUES (?,?,?,?,?)")
	if err != nil {
		panic(err.Error())
	}
	// insForm.Exec(user.Email, user.PassHash, user.UserName, user.FirstName, user.LastName)
	insForm.Exec("test@gmail.com", user.PassHash, "user.UserName", "user.FirstName", "user.LastName")

	// // Create a new random session token
	// u, err := uuid.NewV4()
	// sessionToken := u.String() 
	// // Set the token in the cache, along with the user whom it represents
	// // The token has an expiry time of 300 seconds
	// _, err = cache.Do("SETEX", sessionToken, "300", user.Email)
	// if err != nil {
	// 	// If there is an error in setting the cache, return an internal server error
	// 	w.WriteHeader(http.StatusInternalServerError)
	// 	return
	// }

	// // Finally, we set the client cookie for "session_token" as the session token we just generated
	// // we also set an expiry time of 300 seconds, the same as the cache
	// http.SetCookie(w, &http.Cookie {
	// 	Name:    "session_token",
	// 	Value:   sessionToken,
	// 	Expires: time.Now().Add(300 * time.Second),
	// })

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	// json.NewEncoder(w).Encode(user)
	json.NewEncoder(w).Encode(user)
	// w.Write([]byte("Hello, Web!\n"))
}


// SignIn does this
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
	result := db.QueryRow("SELECT PassHash FROM Users WHERE Email=$1", creds.Email)
	if err != nil {
		// If there is an issue with the database, return a 500 error
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

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

	// If we reach this point, that means the users password was correct, and that they are authorized
	// The default 200 status is sent

	// Create a new random session token
	u, err := uuid.NewV4()
	sessionToken := u.String() 
	// Set the token in the cache, along with the user whom it represents
	// The token has an expiry time of 120 seconds
	_, err = cache.Do("SETEX", sessionToken, "300", creds.Email)
	if err != nil {
		// If there is an error in setting the cache, return an internal server error
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	// Finally, we set the client cookie for "session_token" as the session token we just generated
	// we also set an expiry time of 120 seconds, the same as the cache
	http.SetCookie(w, &http.Cookie {
		Name:    "session_token",
		Value:   sessionToken,
		Expires: time.Now().Add(300 * time.Second),
	})
}

// Welcome does this
func Welcome(w http.ResponseWriter, r *http.Request) {
	// We can obtain the session token from the requests cookies, which come with every request
	c, err := r.Cookie("session_token")
	if err != nil {
		if err == http.ErrNoCookie {
			// If the cookie is not set, return an unauthorized status
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		// For any other type of error, return a bad request status
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	sessionToken := c.Value

	// We then get the name of the user from our cache, where we set the session token
	response, err := cache.Do("GET", sessionToken)
	if err != nil {
		// If there is an error fetching from cache, return an internal server error status
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	if response == nil {
		// If the session token is not present in cache, return an unauthorized error
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	// Finally, return the welcome message to the user
	w.Write([]byte(fmt.Sprintf("Welcome %s!", response)))
}

// // Refresh will do this
// func Refresh(w http.ResponseWriter, r *http.Request) {
// 	c, err := r.Cookie("session_token")
// 	if err != nil {
// 		if err == http.ErrNoCookie {
// 			w.WriteHeader(http.StatusUnauthorized)
// 			return
// 		}
// 		w.WriteHeader(http.StatusBadRequest)
// 		return
// 	}
// 	sessionToken := c.Value

// 	response, err := cache.Do("GET", sessionToken)
// 	if err != nil {
// 		w.WriteHeader(http.StatusInternalServerError)
// 		return
// 	}
// 	if response == nil {
// 		w.WriteHeader(http.StatusUnauthorized)
// 		return
// 	}
// 	// The code uptil this point is the same as the first part of the `Welcome` route

// 	// Now, create a new session token for the current user
// 	newSessionToken := uuid.NewV4().String()
// 	_, err = cache.Do("SETEX", newSessionToken, "120", fmt.Sprintf("%s",response))
// 	if err != nil {
// 		w.WriteHeader(http.StatusInternalServerError)
// 		return
// 	}

// 	// Delete the older session token
// 	_, err = cache.Do("DEL", sessionToken)
// 	if err != nil {
// 		w.WriteHeader(http.StatusInternalServerError)
// 		return
// 	}
	
// 	// Set the new token as the users `session_token` cookie
// 	http.SetCookie(w, &http.Cookie{
// 		Name:    "session_token",
// 		Value:   newSessionToken,
// 		Expires: time.Now().Add(120 * time.Second),
// 	})
// }

//Validate validates the new user and returns an error if
//any of the validation rules fail, or nil if its valid
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

//ToUser converts the NewUser to a User, setting the
//PhotoURL and PassHash fields appropriately
func (nu *NewUser) ToUser() (*User, error) {
	// didn't you alrady validate 
	// err := nu.Validate()
	// if err != nil {
	// 	return nil, err
	// }

	usr := new(User)
	usr.Email = nu.Email
	usr.UserName = nu.UserName
	usr.FirstName = nu.FirstName
	usr.LastName = nu.LastName

	//TODO: also call .SetPassword() to set the PassHash
	//field of the User to a hash of the NewUser.Password
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
	u.PassHash = hash
	return nil
}

//GetByEmail returns the User with the given email
func GetByEmail(email string) (*User, error) {
	foundUser := &User{}
	row := db.QueryRow("SELECT * FROM Users WHERE Email=?", email)
	if err := row.Scan(&foundUser.ID, &foundUser.Email, &foundUser.PassHash, &foundUser.UserName, &foundUser.FirstName, &foundUser.LastName); err != nil {
		return nil, err
	}
	return foundUser, nil
}
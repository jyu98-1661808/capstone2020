package main

import (
	"fmt"
	"database/sql"
	"golang.org/x/crypto/bcrypt"
	"encoding/json"
	"net/http"
	"time"
	"github.com/satori/go.uuid"
	_ "github.com/lib/pq"
)

// var users = map[string]string{
// 	"user1": "password1",
// 	"user2": "password2",
// }

// Credentials Create a struct that models the structure of a user, both in the request body, and in the DB
type Credentials struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// SignUp does this
func SignUp(w http.ResponseWriter, r *http.Request){
	// Parse and decode the request body into a new `Credentials` instance
	creds := &Credentials{}
	err := json.NewDecoder(r.Body).Decode(creds)
	if err != nil {
		// If there is something wrong with the request body, return a 400 status
		w.WriteHeader(http.StatusBadRequest)
		return 
	}
	// Salt and hash the password using the bcrypt algorithm
	// The second argument is the cost of hashing, which we arbitrarily set as 8 (this value can be more or less, depending on the computing power you wish to utilize)
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(creds.Password), 8)

	// Next, insert the username, along with the hashed password into the database
	if _, err = db.Query("insert into users values ($1, $2)", creds.Username, string(hashedPassword)); err != nil {
		// If there is any issue with inserting into the database, return a 500 error
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	// We reach this point if the credentials we correctly stored in the database, and the default status of 200 is sent back
}

// // SignIn does this
// func SignIn(w http.ResponseWriter, r *http.Request){
// 	// Parse and decode the request body into a new `Credentials` instance	
// 	creds := &Credentials{}
// 	err := json.NewDecoder(r.Body).Decode(creds)
// 	if err != nil {
// 		// If there is something wrong with the request body, return a 400 status		
// 		w.WriteHeader(http.StatusBadRequest)
// 		return 
// 	}
// 	// Get the existing entry present in the database for the given username
// 	result := db.QueryRow("select password from users where username=$1", creds.Username)
// 	if err != nil {
// 		// If there is an issue with the database, return a 500 error
// 		w.WriteHeader(http.StatusInternalServerError)
// 		return
// 	}
// 	// We create another instance of `Credentials` to store the credentials we get from the database
// 	storedCreds := &Credentials{}
// 	// Store the obtained password in `storedCreds`
// 	err = result.Scan(&storedCreds.Password)
// 	if err != nil {
// 		// If an entry with the username does not exist, send an "Unauthorized"(401) status
// 		if err == sql.ErrNoRows {
// 			w.WriteHeader(http.StatusUnauthorized)
// 			return
// 		}
// 		// If the error is of any other type, send a 500 status
// 		w.WriteHeader(http.StatusInternalServerError)
// 		return
// 	}

// 	// Compare the stored hashed password, with the hashed version of the password that was received
// 	if err = bcrypt.CompareHashAndPassword([]byte(storedCreds.Password), []byte(creds.Password)); err != nil {
// 		// If the two passwords don't match, return a 401 status
// 		w.WriteHeader(http.StatusUnauthorized)
// 	}

// 	// If we reach this point, that means the users password was correct, and that they are authorized
// 	// The default 200 status is sent
// }

// SignIn does this
func SignIn(w http.ResponseWriter, r *http.Request) {
	// var creds Credentials
	// // Get the JSON body and decode into credentials
	// err := json.NewDecoder(r.Body).Decode(&creds)
	// if err != nil {
	// 	// If the structure of the body is wrong, return an HTTP error
	// 	w.WriteHeader(http.StatusBadRequest)
	// 	return
	// }

	// // Get the expected password from our in memory map
	// expectedPassword, ok := users[creds.Username]

	// // If a password exists for the given user
	// // AND, if it is the same as the password we received, the we can move ahead
	// // if NOT, then we return an "Unauthorized" status
	// if !ok || expectedPassword != creds.Password {
	// 	w.WriteHeader(http.StatusUnauthorized)
	// 	return
	// }
	// ------------------------- memory map user accounts ---------------
	// Parse and decode the request body into a new `Credentials` instance	
	creds := &Credentials{}
	err := json.NewDecoder(r.Body).Decode(creds)
	if err != nil {
		// If there is something wrong with the request body, return a 400 status		
		w.WriteHeader(http.StatusBadRequest)
		return 
	}
	// Get the existing entry present in the database for the given username
	result := db.QueryRow("select passhash from users where username=$1", creds.Username)
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
	// u, err := uuid.NewV4()
	// obj.uuid = u.String() 
	u, err := uuid.NewV4()
	sessionToken := u.String() 
	// sessionToken := uuid.NewV4().String()
	// Set the token in the cache, along with the user whom it represents
	// The token has an expiry time of 120 seconds
	_, err = cache.Do("SETEX", sessionToken, "300", creds.Username)
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
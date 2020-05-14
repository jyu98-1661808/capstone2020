package users

import (
	"fmt"
	"net/mail"
	"strings"
	"golang.org/x/crypto/bcrypt"
)

// bcryptCost is the default bcrypt cost to use when hashing passwords
var bcryptCost = 8

// User represents a user account in the database
type User struct {
	ID        int64  `json:"id"`
	Email     string `json:"-"` //never JSON encoded/decoded
	PassHash  []byte `json:"-"` //never JSON encoded/decoded
	UserName  string `json:"userName"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
}

// Credentials represents user sign-in credentials
type Credentials struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// NewUser represents a new user signing up for an account
type NewUser struct {
	Email        string `json:"email"`
	Password     string `json:"password"`
	PasswordConf string `json:"passwordConf"`
	UserName     string `json:"userName"`
	FirstName    string `json:"firstName"`
	LastName     string `json:"lastName"`
}

// Updates represents allowed updates to a user profile
type Updates struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
}

// Validate validates the new user and returns an error if
// any of the validation rules fail, or nil if its valid
func (nu *NewUser) Validate() error {
	// Email field must be a valid email address (hint: see mail.ParseAddress)
	_, err := mail.ParseAddress(nu.Email)
	if err != nil {
		return fmt.Errorf("Not a valid email address")
	}
	// Password must be at least 6 characters
	if len(nu.Password) < 6 {
		return fmt.Errorf("Not a valid password")
	}
	// Password and PasswordConf must match
	if nu.Password != nu.PasswordConf {
		return fmt.Errorf("Password is incorrect")
	} 
	// UserName must be non-zero length and may not contain spaces
	if len(nu.UserName) == 0 || strings.Contains(nu.UserName, " ") {
		return fmt.Errorf("Invalid username length or contains space")
	}
	return nil
}

// ToUser converts the NewUser to a User, setting the
// PhotoURL and PassHash fields appropriately
func (nu *NewUser) ToUser() (*User, error) {
	// call Validate() to validate the NewUser 
	err := nu.Validate()
	if err != nil {
		return nil, err
	}

	// if valid, create a new *User and set the fields
	// based on the field values in `nu`.
	// store implementation handles ID field (primary key value)
	usr := new(User)
	usr.Email = nu.Email
	usr.UserName = nu.UserName
	usr.FirstName = nu.FirstName
	usr.LastName = nu.LastName
	
	// set the PassHash field of the User to a hash 
	// of the NewUser.Password
	err = usr.SetPassword(nu.Password)
	if err != nil {
		return nil, err
	}
	return usr, nil
}

// FullName returns the user's full name, in the form:
// "<FirstName> <LastName>"
// If either first or last name is an empty string, no
// space is put between the names. If both are missing,
// this returns an empty string
func (u *User) FullName() string {
	if len(u.FirstName) != 0 && len(u.LastName) != 0 {
		return "<" + u.FirstName + "> <" + u.LastName + ">"
	}
	if len(u.FirstName) == 0 && len(u.LastName) != 0 {
		return "<FirstName><" + u.LastName + ">"
	}
	if len(u.LastName) == 0  && len(u.FirstName) != 0 {
		return "<" + u.FirstName + "><LastName>"
	}
	return ""
}

// SetPassword hashes the password and stores it in the PassHash field
func (u *User) SetPassword(password string) error {
	// uses the bcrypt package to generate a new hash of the password
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcryptCost)
	if err != nil {
		return err
	}
	u.PassHash = hash
	return nil
}

// Authenticate compares the plain-text password against the stored hash
// and returns an error if they don't match, or nil if they do
func (u *User) Authenticate(password string) error {
	// uses the bcrypt package to compare the supplied
	// password with the stored PassHash
	if len(password) == 0 {
		return fmt.Errorf("Zero-length password")
	}
	err := bcrypt.CompareHashAndPassword(u.PassHash, []byte(password))
	if err != nil {
		return err
	}
	return nil
}

// ApplyUpdates applies the updates to the user. An error
// is returned if the updates are invalid
func (u *User) ApplyUpdates(updates *Updates) error {
	firstName := updates.FirstName
	lastName := updates.LastName
	if len(firstName) == 0 {
		return fmt.Errorf("First name is nil or is of zero-length")
	}
	if len(lastName) == 0 {
		return fmt.Errorf("Last name is nil or is of zero-length")
	}
	u.FirstName = updates.FirstName
	u.LastName = updates.LastName
	if u.FirstName != updates.FirstName || u.LastName != updates.LastName {
		return fmt.Errorf("There was an issue updating the names")
	}
	return nil
}
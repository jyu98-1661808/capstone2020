package main

import (
    "log"
    "net/http"
    "os"
    "database/sql"
	"fmt"
	// "time"
	// "github.com/go-redis/redis"
	_ "github.com/go-sql-driver/mysql"
	"github.com/gomodule/redigo/redis"
)

var db *sql.DB
var cache redis.Conn

func main() {
    addr := os.Getenv("ADDR")
	if len(addr) == 0 {
		addr = ":443"
    }
    
    // If these environment variables are not set, write an error to
	// standard out and exit the process with a non-zero code.
	tlsKeyPath := os.Getenv("TLSKEY")
	tlsCertPath := os.Getenv("TLSCERT")
	if len(tlsKeyPath) < 0 || len(tlsCertPath) < 0 {
		log.Fatal("No environment variable found for eitherTLSKEY or TLSCERT")
    }

	// dsn := os.Getenv("DSN")
	
	 dsn := "root:greybox491@tcp(user-database:3306)/db"

    // create a database object, which manages a pool of
	// network connections to the database server
	db, err := sql.Open("mysql", dsn)
	// userStore := &users.MySQLStore{
	// 	Database: db,
	// }
	if err != nil {
		fmt.Printf("error opening database: %v\n", err)
		os.Exit(1)
	}

	// ensure that the database gets closed when we are done
	defer db.Close()

	// for now, just ping the server to ensure we have
	// a live connection to it
	if err := db.Ping(); err != nil {
		fmt.Printf("error pinging database: %v\n", err)
	} else {
		fmt.Printf("successfully connected to sql!\n")
	}
	
	// ------------ Redis ----------

	// Initialize the redis connection to a redis instance running on your local machine
	// "redis://localhost"
	conn, err := redis.DialURL("redis://user:testpass@redis-server:6379/0")
	if err != nil {
		fmt.Printf("error opening database: %v\n", err)
		os.Exit(1)
	} else { 
		fmt.Printf("successfully connected to redis!\n")
	}
	// Assign the connection to the package level `cache` variable
	cache = conn

    mux := http.NewServeMux()

    mux.HandleFunc("/signin", SignIn)
	mux.HandleFunc("/signup", SignUp)
	mux.HandleFunc("/welcome", Welcome)
	// mux.HandleFunc("/refresh", Refresh)

    //start the server
    fmt.Printf("listening on %s...\n", addr)
    log.Fatal(http.ListenAndServeTLS(addr, tlsCertPath, tlsKeyPath, mux))  
}


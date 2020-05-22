package main

import (
    "log"
    "net/http"
    "os"
    "database/sql"
	"fmt"
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
		log.Fatal("No environment variable found for either TLSKEY or TLSCERT")
    }

	// -------------------- SQL Database --------------------
	dsn := "root:greybox491@tcp(user-database:3306)/db"
	var err error
	db, err = sql.Open("mysql", dsn)
	if err != nil {
		fmt.Printf("error opening database: %v\n", err)
		os.Exit(1)
	}
	// ping the server to ensure we have a live connection to it
	if err := db.Ping(); err != nil {
		fmt.Printf("error pinging database: %v\n", err)
	} else {
		fmt.Printf("successfully connected to sql!\n")
	} 
	
	// -------------------- Redis --------------------
	conn, err := redis.DialURL("redis://user:testpass@redis-server:6379/0")
	if err != nil {
		fmt.Printf("error opening database: %v\n", err)
		os.Exit(1)
	} else { 
		fmt.Printf("successfully connected to redis!\n")
	}
	cache = conn

	// -------------------- Routing --------------------
	mux := http.NewServeMux()

	mux.HandleFunc("/signup", SignUp)
    mux.HandleFunc("/signin", SignIn)

	wrappedMux := Response(mux)

    // start the server
    fmt.Printf("listening on %s...\n", addr)
    log.Fatal(http.ListenAndServeTLS(addr, tlsCertPath, tlsKeyPath, wrappedMux))  
}


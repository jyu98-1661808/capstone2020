package main

import (
	"net/http"
)

// CorsMW1 is for wrapping the whole mux
type CorsMW1 struct {
	Handler http.Handler
}

// ServerHTTP will handle access-control-allow-origin requests by handling the following headers
func (c *CorsMW1) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Max-Age", "600")
	// Call the real handler
	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}

	c.Handler.ServeHTTP(w, r)
}

// Response will return a handler wrapped
func Response(handlerToWrap http.Handler) http.Handler {
	return &CorsMW1{handlerToWrap}
}
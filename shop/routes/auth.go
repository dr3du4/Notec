package routes

import "net/http"

type RegisterRequest struct {
	name     string
	surname  string
	email    string
	password string
}

func RegisterPost(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "application/json")

}

func LoginPost(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "application/json")

}

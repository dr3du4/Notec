package main

import (
	"fmt"
	"net/http"
	"os"
	"shopi/config"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()
	config.Cfg.SetUrl(os.Getenv("DB_CONNECTION"))
	connected := config.Cfg.ConnectToDb()
	if !connected {
		fmt.Println("Wasssssssssssssssssssssss")
	}
	config.Cfg.InitTables()

	r := mux.NewRouter()
	http.ListenAndServe(":8000", r)
}

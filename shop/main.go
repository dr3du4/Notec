package main

import (
	"fmt"
	"net/http"
	"os"
	"shopi/config"
	"shopi/routes"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()
	config.Cfg.SetUrl(os.Getenv("DB_CONNECTION"))
	connected := config.Cfg.ConnectToDb()
	if !connected {
		fmt.Println("Not connected to db")
	}
	config.Cfg.InitTables()

	r := mux.NewRouter()
	r.HandleFunc("/shop", routes.GetShopItemsHandler)
	r.HandleFunc("/auth/register", routes.RegisterPost)
	http.ListenAndServe(":8000", r)
}

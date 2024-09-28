package config

import (
	"database/sql"
	"fmt"
	"shopi/models"

	_ "github.com/lib/pq"
)

type config struct {
	url string
	db  *sql.DB
}

var Cfg config

func (cfg *config) ConnectToDb() bool {
	db, err := sql.Open("postgres", cfg.url)
	if err != nil {
		fmt.Println(err)
		return false
	}
	cfg.db = db
	return true
}

func (cfg *config) SetUrl(url string) bool {
	cfg.url = url
	return true
}

func (cfg *config) ReturnDbInstance() *sql.DB {
	return cfg.db
}

func (cfg *config) InitTables() (string, error) {
	pingErr := cfg.db.Ping()
	if pingErr != nil {
		fmt.Println(pingErr.Error())
		return pingErr.Error(), pingErr
	}
	res, err := cfg.db.Exec(models.CreateProfileTableQuery)
	if err != nil {
		fmt.Println(err)
		return err.Error(), err
	}
	fmt.Println(res.RowsAffected())
	return "Succesfully created tables", nil
}

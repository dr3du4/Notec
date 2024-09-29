package routes

import (
	"encoding/json"
	"io"
	"net/http"
	"os"
)

type Frame struct {
	Id      string `json:"id"`
	Context string `json:"context"`
	Price   int    `json:"price"`
}

type Icon struct {
	Id    string `json:"id"`
	Name  string `json:"name"`
	Price int    `json:"price"`
}

type ResponseGetShopItems struct {
	Trees []Frame `json:"trees"`
	Icons  []Icon  `json:"icons"`
}

func getFrames() []Frame {
	file, err := os.Open("./data/frames.json")
	if err != nil {
		// Handle the error appropriately
		return []Frame{}
	}
	defer file.Close()

	byteValue, err := io.ReadAll(file)
	if err != nil {
		// Handle the error appropriately
		return []Frame{}
	}

	var frames []Frame
	if err := json.Unmarshal(byteValue, &frames); err != nil {
		// Handle the error appropriately
		return []Frame{}
	}
	return frames
}

func getIcons() []Icon {
	file, err := os.Open("./data/icons.json")
	if err != nil {
		// Handle the error appropriately
		return []Icon{}
	}
	defer file.Close()

	byteValue, err := io.ReadAll(file)
	if err != nil {
		// Handle the error appropriately
		return []Icon{}
	}

	var icons []Icon
	if err := json.Unmarshal(byteValue, &icons); err != nil {
		// Handle the error appropriately
		return []Icon{}
	}
	return icons
}

func GetShopItemsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	response := ResponseGetShopItems{
		Trees: getFrames(),
		Icons:  getIcons(),
	}

	jsonValue, err := json.Marshal(response)
	if err != nil {
		http.Error(w, "Error generating JSON response", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write(jsonValue)
}

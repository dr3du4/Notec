package routes

import (
	"encoding/json"
	"io/ioutil"
)

type Frame struct {
	Id      string `json:"id"`
	Context string `jsorn:"context"`
	Price   int    `json:"price"`
}

type Icon struct {
	Id    string `json:"id"`
	Name  string `json:"name"`
	Price int    `json:"price"`
}

func getFrames() []Frame {
	byteValue, _ := ioutil.ReadFile("./data/icons.json")
	var frames []Frame
	json.Unmarshal(byteValue, &frames)
	return frames
}

func getIcons() []Icon {
	byteValue, _ := ioutil.ReadFile("./data/frames.json")
	var icons []Icon
	json.Unmarshal(byteValue, icons)
	return icons
}

func GetShopItemsHandler() {

}

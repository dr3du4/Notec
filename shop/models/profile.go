package models

var CreateProfileTableQuery string = `CREATE TABLE IF NOT EXISTS profiles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250),
    surname VARCHAR(250),
    points INT DEFAULT 0,
    rank VARCHAR(255) DEFAULT 'beginner',
    image_url VARCHAR(255) DEFAULT 'https://i.sstatic.net/YaL3s.jpg',
    cursors JSONB NOT NULL DEFAULT '[]',
    frames JSONB NOT NULL DEFAULT '[]',
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    current_cursor VARCHAR(255) NOT NULL DEFAULT 'default',
    current_frame VARCHAR(255) NOT NULL DEFAULT 'default'
);`

var InsertProfileTableQuery string = `
INSERT INTO profiles (
    name, surname, points, rank, image_url, cursors, frames, email, password, current_cursor, current_frame
) VALUES (
    '%s', '%s', %d, '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s'
); `

type Profile struct {
	id             string
	name           string
	surname        string
	points         int
	rank           string
	imageUrl       string
	cursors        []string
	frames         []string
	email          string
	password       string
	current_cursor string
	current_frame  string
}

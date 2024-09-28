package models

var CreateQuizzesTableQuery string = `CREATE TABLE IF NOT EXISTS quizzes (
    id SERIAL PRIMARY KEY,
	title varchar(250)
);`

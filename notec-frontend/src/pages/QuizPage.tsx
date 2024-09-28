import * as React from 'react';
import NavBar from "../components/NavBar.tsx";
import axiosInstance from "../axiosConfig.js";  
import QuestionCard from "../components/QuestionCard.tsx";
import {useEffect, useState} from "react";

function QuizPage() {
    const [quiz, setQuiz] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await axiosInstance.get("http://localhost:8000/quiz");
                console.log(response.data);
                setQuiz(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchQuiz();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!quiz) {
        return <div>No quiz available.</div>;
    }

    return (
        <>
            <NavBar />
            <div className="quiz-container" style={{ padding: '2rem' }}>
                <h2>{quiz.title}</h2>
                <p>Tags: {quiz.tags.join(', ')}</p>
                <div className="questions-list">
                    {quiz.questions.map((question, index) => (
                        <QuestionCard
                            key={index}
                            title={question.title}
                            options={question.options}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default QuizPage;

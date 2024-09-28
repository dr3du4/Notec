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
        <div className="flex flex-col h-screen">
            <div className="mb-4">
                <NavBar />
            </div>

            <div className="flex-grow overflow-y-auto">
                <div className="flex flex-col items-center space-y-4 p-4">
                    <h2>{quiz.title}</h2>
                    <p>Tags: {quiz.tags.join(', ')}</p>

                    {quiz.questions.map((question, index) => (
                        <QuestionCard
                            key={index}
                            title={question.title}
                            options={question.options}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default QuizPage;

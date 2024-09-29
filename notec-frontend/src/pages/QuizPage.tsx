import * as React from 'react';
import NavBar from "../components/NavBar.tsx";
import axiosInstance from "../axiosConfig.js";
import QuestionCard from "../components/QuestionCard.tsx";
import {useEffect, useState} from "react";

function QuizPage() {
    const [quiz, setQuiz] = useState(null);  // Quiz to dane quizu
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quizTitle, setQuizTitle] = useState("");
    const [quizTags, setQuizTags] = useState([]);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await axiosInstance.get("/questions");
                console.log('Dane z API:', response.data);
                setQuiz(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        const fetchQuizTitle = async () => {
            try {
                const response = await axiosInstance.get("/title");
                setQuizTitle(response.data);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        const fetchQuizTags = async () => {
            try {
                const response = await axiosInstance.get("/tags");
                setQuizTags(response.data);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchQuizTags();
        fetchQuizTitle();
        fetchQuiz();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const quizTagsShow = quizTags ? quizTags.join(', ') : 'No tags available';



    return (
        <div className="flex flex-col h-screen">
            <div className="mb-4">
                <NavBar />
            </div>

            <div className="flex-grow overflow-y-auto">
                <div className="flex flex-col items-center space-y-4 p-4">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-2xl">{quizTitle}</h1>
                        <h2>Tags: {quizTagsShow}</h2>
                    </div>

                    {quiz.map((question, index) => (
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

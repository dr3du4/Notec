import * as React from 'react';
import NavBar from "../components/NavBar.tsx";
import axiosInstance from "../axiosConfig.js";
import QuestionCard from "../components/QuestionCard.tsx";
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react"; // Do pobrania ID z URL

function QuizPage() {
    const { id } = useParams(); // Pobranie ID quizu z URL
    const [quiz, setQuiz] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quizTitle, setQuizTitle] = useState("");
    const [quizTags, setQuizTags] = useState([]);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await axiosInstance.get(`/api/v1/quiz/${id}`); // Pobranie quizu na podstawie ID
                const quizData = response.data;
                setQuiz(quizData.questions); // Ustawienie pytań quizu
                setQuizTitle(quizData.title); // Ustawienie tytułu
                setQuizTags(quizData.tags); // Ustawienie tagów
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchQuiz();
    }, [id]); // Uruchamianie, gdy zmienia się ID

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const quizTagsShow = quizTags.length > 0 ? quizTags.join(', ') : 'No tags available';

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

import * as React from 'react';
import NavBar from "../components/NavBar.tsx";
import axiosInstance from "../axiosConfig.js";
import QuestionCard from "../components/QuestionCard.tsx";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";

function QuizPage() {
    const { id } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quizTitle, setQuizTitle] = useState("");
    const [quizTags, setQuizTags] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState<number|null>(null);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await axiosInstance.get(`/api/v1/quiz/${id}`);
                const quizData = response.data;
                setQuiz(quizData.questions);
                setQuizTitle(quizData.title);
                setQuizTags(quizData.tags);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchQuiz();
    }, [id]);

    const handleAnswerSelection = (questionId, selectedOption) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: selectedOption
        }));
    };

    const handleSubmit = async () => {
        let correctAnswersCount = 0;

        quiz.forEach((question) => {
            if (selectedAnswers[question.id] === question.correctAnswer) {
                correctAnswersCount++;
            }
        });

        const totalQuestions = quiz.length;
        const score = Math.round((correctAnswersCount / totalQuestions) * 100);
        setScore(score);

        try {
            const response = await axiosInstance.post(`/api/v1/quiz/${id}/submit`, {
                quizId: id,
                userId: localStorage.getItem("userId"),
                correctAnswersCount: correctAnswersCount,
                totalQuestions: totalQuestions
            });
            console.log("Quiz result sent to backend:", response.data);
        } catch (error) {
            console.error("Error sending quiz result to backend:", error);
        }
    };

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

                    {quiz && quiz.length > 0 ? (
                        quiz.map((question) => (
                            <QuestionCard
                                key={question.id}
                                title={question.question}
                                options={[question.answer1, question.answer2, question.answer3, question.answer4]}
                                selectedOption={selectedAnswers[question.id]}
                                onSelectOption={(option) => handleAnswerSelection(question.id, option)}
                            />
                        ))
                    ) : (
                        <p>No questions available</p>
                    )}

                    <Button
                        onClick={handleSubmit}
                        sx={{
                            backgroundColor: '#FFC242',
                            color: 'black',
                            '&:hover': {
                                backgroundColor: '#FFA726',
                            },
                            mt: 4,
                            px: 4,
                            py: 2,
                        }}
                        variant="contained"
                    >
                        Submit Quiz
                    </Button>

                    {score !== null && (
                        <div className="mt-4">
                            <h3>Your score: {score}%</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default QuizPage;
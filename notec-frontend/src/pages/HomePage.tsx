import * as React from 'react';
import NavBar from "../components/NavBar.tsx";
import QuizCard from "../components/QuizCard.tsx";
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig.js";
import {useEffect, useState} from "react";

function HomePage() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await axiosInstance.get("/api/v1/quiz/all");
                setQuizzes(response.data);
            } catch (error) {
                setError(error);
            }
        }

        fetchQuizzes();
    }, []);

    const handleAddQuiz = () => {
        navigate('/create-quiz');
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="mb-4">
                <NavBar />
            </div>
            <div className="flex-grow overflow-y-auto">
                <div className="flex flex-col items-center space-y-4 p-4">
                    {quizzes.map((quiz) => (
                        <QuizCard
                            key={quiz.id}
                            id={quiz.id}
                            title={quiz.title}
                            tags={quiz.tags}
                            onClick={() => navigate(`/quiz/${quiz.id}`)}
                        />
                    ))}
                </div>
            </div>

            <IconButton
                onClick={handleAddQuiz}
                aria-label="add"
                style={{
                    position: 'fixed',
                    bottom: 32,
                    right: 32,
                }}
            >
                <AddIcon style={{ fontSize: 64, color: "#FFC242" }} />
            </IconButton>
        </div>
    );
}

export default HomePage;

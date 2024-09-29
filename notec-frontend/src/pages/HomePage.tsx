import * as React from 'react';
import NavBar from "../components/NavBar.tsx";
import QuizCard from "../components/QuizCard.tsx";
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosInstance from "../axiosConfig.js";


function HomePage() {

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [title, setTitle] = useState(null);
    const [quizTags, setQuizTags] = useState([]);

    useEffect(() => {
        const fetchQuizTitle = async () => {
            try {
                const response = await axiosInstance.get("/title");
                setTitle(response.data);

            } catch (error) {
                setError(error);
            }
        };

        const fetchQuizTags = async () => {
            try {
                const response = await axiosInstance.get("/tags");
                setQuizTags(response.data);
            } catch (error) {
                setError(error);
            }
        }

        fetchQuizTags();
        fetchQuizTitle();
    }, []);

    const handleAddQuiz = () => {
        navigate('/create-quiz')
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="mb-4">
                <NavBar />
            </div>
            <div className="flex-grow overflow-y-auto">
                <div className="flex flex-col items-center space-y-4 p-4">
                    <QuizCard title={title} tags={quizTags}/>
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
                <AddIcon style={{fontSize: 64, color: "#FFC242"}} />
            </IconButton>

        </div>
    );
}

export default HomePage;

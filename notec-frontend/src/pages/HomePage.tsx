import * as React from 'react';
import NavBar from "../components/NavBar.tsx";
import QuizCard from "../components/QuizCard.tsx";
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";


function HomePage() {

    const navigate = useNavigate();

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
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
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

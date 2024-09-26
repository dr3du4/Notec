import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Witaj na stronie głównej!</h1>
                <Link to="/login">
                    <Button variant="contained" className="bg-blue-500 hover:bg-blue-700 text-white">
                        Przejdź do logowania
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;

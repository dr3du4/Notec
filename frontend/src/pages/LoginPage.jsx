import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('/auth/login', {
                email,
                password,
            });

            const token = response.data.token;
            localStorage.setItem('authToken', token);
            console.log('Zalogowano pomyślnie!', response.data);
            navigate('/');
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setError('Nieprawidłowy email lub hasło');
            } else {
                setError('Wystąpił błąd, spróbuj ponownie później');
            }
            console.error('Błąd logowania:', err);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Hasła muszą być identyczne');
            return;
        }

        try {
            const response = await axios.post('/auth/register', {
                email,
                password,
            });

            console.log('Zarejestrowano pomyślnie!', response.data);
            navigate('/login');
        } catch (err) {
            setError('Wystąpił błąd podczas rejestracji');
            console.error('Błąd rejestracji:', err);
        }
    };

    return (
        <div className="min-h-screen flex">

            <div className="hidden lg:flex flex-1 bg-gradient-to-br from-purple-800 to-blue-600 justify-center items-center text-white p-10">
                <div className="max-w-md text-left">
                    <Typography variant="h3" className="font-bold mb-4">
                        {isLogin ? 'Welcome Back' : 'Join Us Today'}
                    </Typography>
                    <Typography variant="body1" className="mb-8">
                        {isLogin
                            ? 'Enter your email and password to access your account'
                            : 'Create your account and explore the best features we offer.'}
                    </Typography>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">
                <Box className="max-w-md w-full space-y-6">
                    <Typography variant="h4" className="font-bold text-center mb-6">
                        {isLogin ? 'Sign In' : 'Sign Up'}
                    </Typography>

                    {error && <Typography color="error" className="text-center">{error}</Typography>}

                    <form onSubmit={isLogin ? handleLogin : handleRegister}>
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            InputProps={{ className: 'bg-gray-100' }}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            InputProps={{ className: 'bg-gray-100' }}
                        />
                        {!isLogin && (
                            <TextField
                                margin="normal"
                                fullWidth
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                InputProps={{ className: 'bg-gray-100' }}
                            />
                        )}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className="bg-black text-white hover:bg-gray-800 rounded-md mt-4"
                            size="large"
                        >
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </Button>
                    </form>

                    <Typography className="text-center mt-4">
                        {isLogin ? (
                            <>
                                Don't have an account?{' '}
                                <Link href="#" onClick={() => setIsLogin(false)} className="font-bold text-black">
                                    Sign Up
                                </Link>
                            </>
                        ) : (
                            <>
                                Already have an account?{' '}
                                <Link href="#" onClick={() => setIsLogin(true)} className="font-bold text-black">
                                    Sign In
                                </Link>
                            </>
                        )}
                    </Typography>
                </Box>
            </div>
        </div>
    );
};

export default LoginPage;

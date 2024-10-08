import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Typography from "@mui/material/Typography";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8080/auth/login", { email, password })
      .then((res) => {
        localStorage.setItem("userId", res.data.userId);
        toast.success("Logged in successfully!");
        navigate("/home");
      })
      .catch((err) => {
        console.log("Request failed: ", err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container m-auto max-w-4xl flex relative">
        <div className="absolute top-5 right-5">
          <p>
            Don't have an account?
            <Link
              to="/register"
              className="ml-2 text-custom-purple-dark font-bold"
            >
              Register
            </Link>
          </p>
        </div>
        <div className="float w-1/2 bg-custom-purple-dark rounded-l-lg flex flex-col justify-center items-center p-10">
          <img src="/lemur1.png" alt="lemur-logo" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontSize: "3rem",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            NoteC
          </Typography>
        </div>
        <div className="bg-gray-200 px-8 py-32 w-1/2 rounded-r-lg">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <h2 className="text-3xl font-semibold mb-4">Login</h2>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="test@example.com"
                className="bg-white rounded-lg p-2 w-full"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                className="bg-white rounded-lg p-2 w-full"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-custom-purple-dark hover:bg-indigo-600 py-2 px-4 text-white rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser = {
      email,
      firstName,
      lastName,
      password,
    };

    console.log(newUser);

    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container m-auto max-w-4xl flex relative">
        <div className="absolute top-5 right-5">
          <p>
            Already have an account?
            <Link
              to="/login"
              className="ml-2 text-custom-purple-dark font-bold"
            >
              Login
            </Link>
          </p>
        </div>
        <div className="float w-1/2 bg-custom-purple-dark rounded-l-lg"></div>
        <div className="bg-gray-200 px-8 py-32 w-1/2 rounded-r-lg">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <h2 className="text-3xl font-semibold mb-4">Register</h2>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-bold mb-2"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Jan"
                className="bg-white rounded-lg p-2 w-full"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-bold mb-2"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Kowalski"
                className="bg-white rounded-lg p-2 w-full"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
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
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

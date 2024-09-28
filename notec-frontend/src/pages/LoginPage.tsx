import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container m-auto max-w-4xl flex">
        <div className="float w-1/2 bg-[#72369D] rounded-l-lg"></div>
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
              className="bg-[#72369D] hover:bg-indigo-600 py-2 px-4 text-white rounded-lg"
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

import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LoginContext } from "../../Contexts/LoginContext/LoginProvider"; // Adjust the import path as needed

const LoginPage = () => {
  const navigate = useNavigate();
  const { allUsers, setLoggedInUser } = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); 

    
    const foundUser = allUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setLoggedInUser(foundUser);
      navigate("/");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-orange-50">
      <div className="w-full max-w-md m-10 bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-transform transform hover:scale-105"
          >
            Login
          </button>

          <div className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link
              to="/Signup"
              className="font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-300"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

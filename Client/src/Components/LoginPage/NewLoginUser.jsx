import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewLoginUser = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8080/api/LoginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to sign up.");
      }

      const data = await response.json();
      console.log("Signup successful:", data);
      alert("Account created successfully! Please log in.");
      navigate("/login"); 
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-orange-50 p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 m-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Your Account
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="md:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
              required
              disabled={loading}
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
              required
              disabled={loading}
            />
          </div>

          {error && (
            <div className="md:col-span-2 text-center text-red-500 font-medium">
              {error}
            </div>
          )}

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-transform transform hover:scale-105 disabled:bg-orange-300 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewLoginUser;

import { Link } from "react-router-dom";
import { useState } from "react";

const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  interface LoginData {
    username: string;
    email: string;
    password: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData: LoginData = { username, email, password };
    console.log("Login data:", loginData);
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your username"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-800 hover:bg-indigo-900 text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-6">
            Need to create an account?{" "}
            <Link to="/register" className="text-indigo-600 hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>{" "}
    </>
  );
};

export default Loginpage;

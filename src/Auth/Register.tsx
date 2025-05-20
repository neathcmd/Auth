import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-tr from-pink-200 via-rose-200 to-fuchsia-300 flex items-center justify-center px-4 font-sans">

      <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-3xl shadow-xl fade-in">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">✨ Create Account</h2>
        <form id="registerForm" action="#" method="POST" className="space-y-4">

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">👩‍💻 Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required

              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">📧 Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">🔑 Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>
      
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">✅ Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-xl transition duration-200 shadow-md cursor-pointer"
            >
              🎉 Register
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?
          <Link to="/Login" className="text-pink-600 hover:underline">Login here</Link>
        </p>
      </div>
    </div>

    </div>
  );
};

export default Register;

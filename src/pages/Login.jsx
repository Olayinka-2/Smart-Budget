import React from "react";
import LoginLogo from "../assets/Logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white via-blue-50 to-blue-200 px-6 md:px-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10 flex flex-col items-center gap-6">
        {/* Logo */}
        <img src={LoginLogo} alt="App Logo" className="w-24 md:w-28" />

        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Login to Your Account
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back! Please enter your details below.
          </p>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col gap-3 w-full mt-4">
          <button
            onClick={() => navigate("/auth")}
            className="flex items-center justify-center gap-3 w-full bg-gray-100 py-2.5 rounded-full hover:bg-gray-200 transition"
          >
            <FaGoogle className="text-red-500 text-lg" />
            <span className="text-sm font-medium text-gray-700">
              Sign in with Google
            </span>
          </button>

          <button 
          onClick={() => navigate("/auth")} className="flex items-center justify-center gap-3 w-full bg-gray-100 py-2.5 rounded-full hover:bg-gray-200 transition">
            <FaFacebook className="text-blue-600 text-lg" />
            <span className="text-sm font-medium text-gray-700">
              Sign in with Facebook
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full my-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Login Form */}
        <form className="w-full flex flex-col gap-4 text-left">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              className="border border-gray-300 rounded-xl py-2 px-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              required
              type="password"
              id="password"
              className="border border-gray-300 rounded-xl py-2 px-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
              placeholder="••••••••"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
          onClick={() => navigate('/dashboard')}
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-full font-semibold transition"
          >
            Log In
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-3">
          New here?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

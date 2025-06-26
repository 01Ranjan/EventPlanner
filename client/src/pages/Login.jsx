import React, { useState } from "react";
import {Link} from 'react-router-dom'
import lod from "../assets/bg-homepage.jpg";

const WeddingLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden w-420"
      style={{
        backgroundImage: `url(${lod})`,
      }}
    >
      <div className="mt-25 mr-22 relative bg-transparent backdrop-blur-sm p-8 rounded-3xl shadow-xl w-full max-w-md  border-2 border-rose-300 transform transition-all hover:scale-[1.01]">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-rose-700 font-serif tracking-wide">
            Login
          </h2>
          <p className="text-white mt-2 font-medium">
            June 12, 2025 • The Leela Palace, Udaipur
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white ml-1"
              >
                Email Address
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                required
                className="w-full px-5 py-3 text-white border-2 border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all placeholder-white"
                placeholder="Enter your email"
              />
              <div className="absolute right-4 top-3.5 text-yellow-500 text-xl">
                ✉
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white ml-1"
              >
                Password
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                id="password"
                required
                className="w-full px-5 py-3 text-white border-2 border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all placeholder-white"
                placeholder="Enter your password"
              />
              <div className="absolute right-4 top-3.5 text-white text-xl">
                🔒
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded "
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-rose-700"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <l className="font-medium text-white hover:text-rose-500">
                Forgot password?
              </l>
            </div>
          </div>

          <button
            className={`w-full py-3.5 px-4 border border-amber-100 rounded-xl text-white font-medium  flex items-center justify-center shadow-lg hover:shadow-xl`}
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-rose-700">
            Dont have a acount?{" "}
            <Link to={"/registeration"} className="font-medium text-white hover:text-rose-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeddingLogin;

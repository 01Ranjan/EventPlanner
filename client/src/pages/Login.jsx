import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import lod from "../assets/bg-homepage.jpg";
import{toast} from "react-hot-toast";
import api from "../config/api";

const WeddingLogin = () => {
  const navigate=useNavigate()
   const [LoginData,setLoginData]=useState({
    email:"",
    password:""
   });

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setLoginData((previousData)=>({...previousData,[name]:value}))
    }

  const handleLogin =async (e) => {
    e.preventDefault();
    
        console.log(LoginData);
        
     try {
      const res = await api.post("/auth/login",LoginData);
       
      toast.success(res.data.message)
       
      navigate("/")
     } catch (error) {
        toast.error(error.message)
     }


  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden w-380"
      style={{
        backgroundImage: `url(${lod})`,
      }}
    >
      <div className="mt-25 relative bg-transparent backdrop-blur-sm p-8 rounded-3xl shadow-xl w-full max-w-md  border-2 border-rose-300 transform transition-all hover:scale-[1.01]">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white font-serif tracking-wide">
            Login
          </h2>
          
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
                name="email"
                value={LoginData.email}
                onChange={handleChange}
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
                name="password"
                value={LoginData.password}
                onChange={handleChange}
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
              <p className="font-medium text-white hover:text-rose-500">
                Forgot password?
              </p>
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

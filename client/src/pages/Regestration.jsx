import React, { useState } from "react";

import lod from "../assets/bg-homepage.jpg";
import { Link } from "react-router-dom";

const WeddingRegister = () => {

    const [Registerdata, setRegesterData]=useState(
        {
            fullname:"",
            email:"",
            phone:"",
            password:""
        }
    )

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setRegesterData((previousData)=>({...previousData,[name]:value}))
    }
 

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(Registerdata);
    setRegesterData(
         {
            fullname:"",
            email:"",
            phone:"",
            password:""
        }
    )

   
 

    
    
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
          <h2 className="text-4xl font-bold text-white not-last: font-serif tracking-wide">
            Register
          </h2>
           
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white ml-1"
              >
                Full Name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="fullname"
                required
                value={Registerdata.fullname}
                onChange={handleChange}
                className="w-full px-5 py-3 text-white border-2 border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all placeholder-white"
                placeholder="Enter your full name"
              />
              <div className="absolute right-4 top-3.5 text-yellow-500 text-xl">
                👤
              </div>
            </div>
          </div>

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
                name="email"
                required
                value={Registerdata.email}
                onChange={handleChange}
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
                htmlFor="phone"
                className="block text-sm font-medium text-white ml-1"
              >
                Phone Number
              </label>
            </div>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={Registerdata.phone}
                onChange={ handleChange}
                className="w-full px-5 py-3 text-white border-2 border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all placeholder-white"
                placeholder="Enter your phone number"
              />
              <div className="absolute right-4 top-3.5 text-yellow-500 text-xl">
                📱
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
                required
                value={Registerdata.password}
                onChange={handleChange}
                className="w-full px-5 py-3 text-white border-2 border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all placeholder-white"
                placeholder="Create a password"
              />
              <div className="absolute right-4 top-3.5 text-white text-xl">
                🔒
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
               name="terms"
              type="checkbox"
              className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
              
            />
            <label
              htmlFor="terms"
              className="ml-2 block text-sm text-rose-700"
            >
              I agree to the terms and conditions
            </label>
          </div>

          <button
            type="submit"
            className={`w-full py-3.5 px-4 border border-amber-100 rounded-xl text-white font-medium  flex items-center justify-center shadow-lg hover:shadow-xl`}
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-rose-700">
            Already have an account?{" "}
            <Link   to={"/login"} className="font-medium text-white hover:text-rose-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeddingRegister;
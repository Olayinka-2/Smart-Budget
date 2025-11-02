import React from "react";
import LoginLogo from "../assets/Logo2.png";
import { Link } from "react-router-dom";
import {FaGoogle, FaFacebook} from 'react-icons/fa';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden px-10">
      <div className="flex flex-col gap-2 items-center max-w-xl text-center">
        <img src={LoginLogo} alt="" className="w-27" />
        <p className="text-2xl font-medium">Login to your account</p>
        <p className="text-base font-thin">
          Welcome back! Enter your details to login your account
        </p>
        <div className="rounded-full bg-gray-200 py-2 px-8 w-full cursor-pointer hover:bg-gray-300 flex items-center justify-center gap-3">
          <FaGoogle className="text-red-500"/>
          <p className="font-medium text-sm">Sign in with Google</p>
        </div>
        <div className="rounded-full bg-gray-200 py-2 px-8 w-full cursor-pointer hover:bg-gray-300 flex items-center justify-center gap-3">
          <FaFacebook className="text-blue-500" />
          <p className="font-medium text-sm">Sign in with FaceBook</p>
        </div>
        <div className="flex items-center gap-5 w-full  my-3">
          <div className="h-px flex-1 bg-gray-900"></div>
          <div className="font-thin text-400 text-sm">Or continue with</div>
          <div className="h-px flex-1 bg-gray-900"></div>
        </div>
        <div className="w-full">
          <form action="" className="w-full text-left flex flex-col gap-2">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                name="email"
                id="email"
                className="border border-gray-700 rounded-xl py-1 px-5 outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                required
                type="password"
                name="password"
                id="password"
                className="border border-gray-700 rounded-xl py-1 px-5 outline-0"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="inline-flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <Link>
                  <p className="text-gray-500 text-xs">Remember login</p>
                </Link>
              </div>
              <Link>
                <p className="text-blue-500 underline text-xs">
                  Forgotten Password?
                </p>
              </Link>
            </div>
            <div className="text-center mt-4">
              <button className="bg-blue-500 text-white py-2 px-5 w-full rounded-full cursor-pointer hover:bg-blue-700">
                Log in
              </button>
              <p className="text-xs mt-1">
                New here?{" "}
                <Link>
                  <span className="text-blue-500 underline">
                    create account
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

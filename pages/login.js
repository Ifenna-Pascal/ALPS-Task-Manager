import React, { useState } from "react";
import { signUp } from "next-auth-sanity/client";
import { signIn } from "next-auth/react";

export default function login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({ email: userData.email, password: userData.password });
    await signIn("sanity-login", {
      redirect: false,
      email: userData.email,
      password: userData.password,
    });
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white border-t border-blue-600 rounded shadow-lg shadow-blue-800/50 lg:max-w-md">
          <h1 className="text-3xl font-semibold text-center text-blue-700">
            ALPS
          </h1>

          <form className="mt-6" onSubmit={handleLogin}>
            <div>
              <label for="email" className="block text-sm text-gray-800">
                Email
              </label>
              <input
                value={userData.email}
                onChange={handleChange}
                name="email"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-4">
              <div>
                <label for="password" className="block text-sm text-gray-800">
                  Password
                </label>
                <input
                  value={userData.password}
                  onChange={handleChange}
                  name="password"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <a href="#" className="text-xs text-gray-600 hover:underline">
                Forget Password?
              </a>
              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

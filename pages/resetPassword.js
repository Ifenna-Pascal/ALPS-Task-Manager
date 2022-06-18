import React, { useState } from "react";
import { signIn, getProviders, getCsrfToken } from "next-auth/react";
import axios from "axios";

export default function Login({ csrfToken }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    oldPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({
      email: userData.email,
      password: userData.password,
      oldPassword: userData.oldPassword,
      confirmPassword: userData.confirmPassword,
    });
    try {
      await axios.post("/api/auth/resetPassword", {
        email: userData.email,
        oldPassword: userData.oldPassword,
        password: userData.password,
        confirmPassword: userData.confirmPassword,
      });
    } catch (error) {
      console.log(error.resonses);
    }
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white border-t border-blue-600 rounded shadow-lg shadow-blue-800/50 lg:max-w-md">
          <h1 className="text-3xl font-semibold text-center text-blue-700">
            ALPS
          </h1>

          <form className="mt-6" onSubmit={handleLogin}>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <div>
              <label htmlFor="email" className="block text-sm text-gray-800">
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
                <label htmlFor="password" className="block text-sm text-gray-800">
                  old Password
                </label>
                <input
                  value={userData.oldPassword}
                  onChange={handleChange}
                  name="oldPassword"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mt-4">
              <div>
                <label htmlFor="password" className="block text-sm text-gray-800">
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
            </div>
            <div className="mt-4">
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm text-gray-800"
                >
                  confirm Password
                </label>
                <input
                  value={userData.confirmPassword}
                  onChange={handleChange}
                  name="confirmPassword"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <a href="#" className="text-xs text-gray-600 hover:underline">
                Go to Login
              </a>
              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

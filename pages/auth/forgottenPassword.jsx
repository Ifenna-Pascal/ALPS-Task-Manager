import React, { useState } from "react";
import { signIn, getProviders, getCsrfToken } from "next-auth/react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function ForgottenPassword({ csrfToken }) {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    token: "",
    confirmPassword: "",
  });
  const [isTokenSent, setIsTokenSent] = useState(false);

  // const handleTokenChange = () => {
  //   new Promise((resolve, reject) => {
  //     setTimeout(setIsTokenSent(true), 3000);
  //     resolve(setIsTokenSent(false));
  //   });
  // };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (
      !userData.email ||
      !userData.password ||
      !userData.token ||
      !userData.confirmPassword
    ) {
      toast.error("Error Empty fields");
      setLoading(false);
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post("/api/auth/forgottenPassword", {
        email: userData.email,
        token: userData.token,
        password: userData.password,
        confirmPassword: userData.confirmPassword,
      });
      toast.success(data.message);
      router.push("/auth/signin");
      // console.log(data);
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.response?.message ||
        error.message ||
        error.toString();
      console.log(message);
      toast.error(message);
    }
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (!userData.email) {
      toast.error("Email is required");
      return;
    }
    try {
      const { data } = await axios.post("/api/auth/resendResetPasswordPin", {
        email: userData.email,
        oldPassword: userData.oldPassword,
        password: userData.password,
        confirmPassword: userData.confirmPassword,
      });
      toast.success("A token have been sent to your email address");
      // router.push("/auth/signin");
      setIsTokenSent(true);
      // console.log(data);
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.response?.message ||
        error.message ||
        error.toString();
      console.log(message);
      toast.error(message);
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
                <label htmlFor="token" className="block text-sm text-gray-800">
                  Reset token Pin
                </label>
                <input
                  value={userData.token}
                  onChange={handleChange}
                  name="token"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className=" flex justify-end mt-2">
                <button
                  disabled={isTokenSent}
                  type="button"
                  onClick={handleSendOTP}
                  className={`${
                    isTokenSent ? "bg-green-500 opacity-50" : "bg-blue-700"
                  } rounded-md text-sm whitespace-nowrap px-4 py-2 tracking-wide text-white transition-colors duration-200 transform  hover:bg-blue-600 focus:outline-none focus:bg-blue-600`}
                >
                  {isTokenSent ? "token Sent" : " Send Reset Pin"}
                </button>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-800"
                >
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
              <Link href="/auth/signin">
                <a className="text-xs text-gray-600 hover:underline">
                  Go to ForgottenPassword
                </a>
              </Link>

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

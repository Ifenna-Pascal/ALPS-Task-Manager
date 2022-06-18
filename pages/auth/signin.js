import React, { useState } from "react";
import { signIn, getCsrfToken } from "next-auth/react";
import { useRouter } from "next/router";
export default function Login({ csrfToken }) {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email: userData.email,
      password: userData.password,
      callbackUrl: `${window.location.origin}`,
    });
    console.log(res);
    if (res?.error) {
      setError(res.error);
    } else {
      setError(null);
    }
    if (res.url) router.push(res.url);
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center mx-3 min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white border-t shadow-lg lg:max-w-md">
          <h1 className="text-3xl font-semibold text-center text-blue-700">
            ALPS
          </h1>
          {error && (
            <div className="w-full bg-red-400 text-center py-1 text-white">
              {error}
            </div>
          )}
          <form className="mt-6" onSubmit={handleLogin}>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
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

export async function getServerSideProps(context) {
  const Context = await getCsrfToken(context);
  return {
    props: {
      csrfToken: Context,
    },
  };
}

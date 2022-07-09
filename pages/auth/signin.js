import React, { useState, useEffect } from "react";
import { signIn, getCsrfToken, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";
export default function Login({ csrfToken }) {
  const session = useSession();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      email: userData.email,
      password: userData.password,
      callbackUrl: `${window.location.origin}`,
    });
    if (res?.error) {
      setLoading(false);
      toast.error(res.error);
    }
    if (res.url) {
      setLoading(false);
      toast.success("sgined in successfully");
      router.push(res.url);
    }
  };
  return (
    <div>
      <div className="relative flex flex-col justify-center mx-3 min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white border-t  lg:max-w-md">
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
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-800"
                >
                  Password<i className="ri-eye-line"></i>
                </label>
                <div className="relative">
                  <div
                    className="absolute right-0 inset-y-0 flex items-center justify-center pr-3"
                    onClick={() => setShow(!show)}
                  >
                    {" "}
                    <i
                      className={`${
                        show ? "ri-eye-off-line" : "ri-eye-line"
                      } ml-4`}
                    ></i>
                  </div>
                  <input
                    value={userData.password}
                    onChange={handleChange}
                    name="password"
                    type={show ? "text" : "password"}
                    className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <Link href="/auth/forgottenPassword">

                                <a className="text-xs text-gray-600 hover:underline">
                                  Forget Password?
                                </a>
                </Link>
              </div>

              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  {loading ? "Processing..." : "Login"}
                </button>
              </div>
              <Link href={"/resetPassword"}>
                <a className="flex justify-end  mt-2 text-blue-700 text-xs text-gray-600 hover:underline">
                  New User Reset your password
                </a>
              </Link>
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

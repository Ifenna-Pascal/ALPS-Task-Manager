import React, { useState } from "react";
import { useRouter } from "next/router";

function EditProfile() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const intialState = {

  }
  return (
    <div className="flex  flex-col lg:py-6 py-16  lg:px-10 items-start">
      <div
        className="hidden lg:flex items-center"
        onClick={() => router.replace("/")}
      >
        <i className="ri-arrow-left-line mr-1"></i>
        <span className="text-gray-700 font-Poppins font-[400] text-[20px] leading-[24px]">
          Back
        </span>
      </div>
      <div
        className="lg:hidden flex items-center"
      >
        <i className="ri-pencil-line text-2xl mr-2 text-gray-600"></i>
        <span className="text-gray-700 font-Poppins font-[500] text-[20px] leading-[24px]">
          Edit Profile
        </span>
      </div>
      <form className="w-full mb-6 md:mb-0 pr-8">
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="username"
            >
              User Name
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="password"
            >
              Email Address
            </label>
            <input
              name="email"
              id="email"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="my-3">
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <div
              className="absolute right-0 inset-y-0 flex items-center justify-center pr-3"
              onClick={() => setShow(!show)}
            >
              {" "}
              <i className="ri-eye-line ml-4"></i>
            </div>
            <input
              name="password"
              type={show ? "text" : "password"}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="my-3">
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
            Contact Address
          </label>
          <input
            name="contact"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div className="my-3">
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
            Address
          </label>
          <input
            name="address"
            id="passwordConfirmation"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div className="my-3">
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="lastname"
          >
            User Bio
          </label>
          <textarea
            id="lastname"
            rows={3}
            name="userBio"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1"> 
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="lastname"
            >
              Date of Birth
            </label>
            <input
              name="dateOfBirth"
              id="lastname"
              type="Date"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="username"
            >
              State
            </label>
            <input
              
              id="username"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="lastname"
            >
              Country
            </label>
            <input
              id="lastname"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transhtmlForm bg-blue-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;

import React from "react";
import "remixicon/fonts/remixicon.css";

function Navbar() {
  return (
    <div className="h-16 md:h-12 flex py-2 px-4 fixed md:sticky z-50 md:z-0 bottom-0 bg-gray-200 md:top-[2rem] w-full md:w-full mx-auto md:bg-white rounded-t-2xl  md:rounded-xl shadow-sm ">
      <div className="flex items-center  w-full justify-between">
        <div className="relative w-[30%] md:flex hidden  items-center">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-3 h-3 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokewidth="2"
                strokelinecap="round"
                strokelinejoin="round"
              ></path>
            </svg>
          </span>

          <input
            type="text"
            className="w-full  pl-8 py-1 text-gray-700 bg-[#F7F6F4]   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 rounded-2xl focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-100 focus:ring-opacity-40 text-[10px] focus:outline-none focus:ring"
            placeholder="Search"
          />
        </div>
        <div className="flex justify-between md:w-[20%] w-[90%] mx-auto md:mx-0">
          <div className="flex items-center relative text-[#6B6D72] text-2xl">
          <span className="p-1 bg-blue-500 absolute right-[0.1rem] top-1  rounded-full"></span>
            <i className="ri-chat-1-line"></i>
          </div>
          <div className="flex items-center relative text-[#6B6D72] text-2xl">
            <span className="p-1 bg-red-500 absolute right-1 top-1  rounded-full"></span>
            <i className="ri-notification-3-line"></i>
          </div>
          <div className="flex items-center md:hidden text-[#6B6D72] text-2xl">
            <i className="ri-search-2-line"></i>
          </div>
          <div className="flex  items-center">
            <img
              className="object-cover  rounded-full h-8 w-8"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

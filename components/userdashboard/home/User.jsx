import React from "react";

function User() {
  return (
    <div className="w-full h-full  relative ">
      <div className="w-full h-[35%] image rounded-t-xl bg-cover bg-center"></div>
      <div className="w-[100px]  h-[100px] rounded-full flex item-center absolute top-[17.5%] left-[calc(50%-50px)]">
        <img
          className="object-cover object-center  rounded-full h-full w-full"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="avatar"
        />
      </div>
      <div className="flex flex-col h-[65%] items-center justify-center">
        <span className="font-bold text-gray-800 font-Roboto text-xl">
          Ifenna Moannu Chinedu
        </span>
        <span className="text-gray-500 text-lg font-Poppins">
          Backend Developer{" "}
        </span>
      </div>
     
    </div>
  );
}

export default User;

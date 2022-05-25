import React from "react";

function Taskcard({ header, content, deadline, duration }) {
  return (
    <div className="w-full py-6 px-4 flex flex-col bg-gray-200  mb-4  rounded-md ">
      <div className="flex justify-between items-center">
        <span className="text-gray-900 font-Roboto leading-[19px] text-base">
          {header}
        </span>
        <div className={`items-center mr-1  text-gray-500  text-xl`}>
          <i className="ri-more-2-line"></i>
        </div>
      </div>
      <div className="mt-3 mb-4 text-gray-500 font-[400] text-sm font-Poppins ">
        {content}
      </div>
      <div className="pt-3 border-t-[1px] flex justify-start border-gray-400">
        <div className="flex items-center mr-4">
          <div className={`items-center mr-1  text-purple-500  text-xl`}>
            <i className="ri-calendar-todo-line"></i>
          </div>
          <div className="">
            {/* <span className="text-gray-500  block text-[1rem]">Deadline</span> */}
            <span className="text-gray-400  text-sm">{deadline}</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className={`items-center mr-1  text-blue-500  text-xl`}>
            <i className="ri-timer-line"></i>
          </div>
          <div className="">
            {/* <span className="text-gray-500  block text-[1rem]">Duration</span> */}
            <span className="text-gray-400  text-sm">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taskcard;

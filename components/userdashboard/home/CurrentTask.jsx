import React from "react";
import TaskHeading from "../tasks/TaskHeading";
import Progress from "./Progress";

function CurrentTask({ header, content, deadline, type, duration }) {
  return (
    <div className="bg-white flex flex-col  rounded-xl h-full px-6 md:p-8">
      <TaskHeading color="bg-blue-400" text={`My ${type.charAt(0).toUpperCase() + type.slice(1,type.length)} Task`} />
      <div className="flex flex-col">
        <span className="font-Roboto capitalize  text-gray-700 text-2xl font-semibold">
          {header}
        </span>
        <div className="mt-3">
            <span className="block text-gray-400 mb-1 font-Poppins font-semibold">20% completion</span>
          <Progress maxCompleted={20} completed={10} />
        </div>
        <span className="font-Poppins my-4 text-gray-400 text-base">{content}</span>
      </div>
      <div className="flex flex-col justify-start">
        <div className="flex mb-4 items-center mr-4">
          <div className={`items-center mr-2  text-purple-500  text-2xl`}>
            <i className="ri-calendar-todo-line"></i>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 font-semibold text-lg mr-1 block text-[1rem]">
              Start Date
            </span>
            <span className="text-gray-600  text-lg"> :- {` ${deadline}`}</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className={`items-center mr-2 text-blue-500  text-2xl`}>
            <i className="ri-timer-line"></i>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 font-semibold text-lg mr-1 block text-[1rem]">
              End Date
            </span>
            <span className="text-gray-600  text-lg">:- {duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentTask;

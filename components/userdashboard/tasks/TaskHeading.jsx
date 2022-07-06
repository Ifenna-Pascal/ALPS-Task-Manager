import React from "react";

function TaskHeading({ color, text, total }) {
  return (
    <div className="flex items-center pl-1 mb-4">
      <span className={`p-1 ${color} mr-2 rounded-full`}></span>
      <span className="mr-2 text-base dark:text-gray-300 text-gray-700 font-Poppins capitalize font-semibold">
        {text}
      </span>
      {total && (
        <span className="flex items-center  justify-center text-sm h-6 w-6 rounded-full text-gray-600 bg-gray-300">
          {total}
        </span>
      )}
    </div>
  );
}

export default TaskHeading;

import React from "react";

function EmptyState({msg}) {
  return (
    <div className="w-[95%] md:w-full mx-auto  py-6 px-4 h-full flex flex-col flex items-center dark:bg-[#1F2937] justify-center bg-gray-200  mb-12 md:mb-4  rounded-md ">
      <div className="flex justify-center flex-col py-4 items-center">
        <img src="/images/Empty.svg" alt="Empty State" className="mb-3 w-20 h-20" />
        <span className="font-Poppins dark:text-gray-300 text-gray-800">{msg}</span>
      </div>
      
    </div>
  );
}

export default EmptyState;

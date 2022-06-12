import React from "react";

function EmptyState({msg}) {
  return (
    <div className="w-full py-6 px-4 flex flex-col bg-gray-200  mb-4  rounded-md ">
      <div className="flex justify-center flex-col py-4 items-center">
        <img src="/images/Empty.svg" alt="Empty State" className="mb-3 w-20 h-20" />
        <span className="font-Poppins text-gray-800">{msg}</span>
      </div>
      
    </div>
  );
}

export default EmptyState;

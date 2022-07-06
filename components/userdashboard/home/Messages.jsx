import React from "react";

const Message = ({ heading, message }) => (
  <div className="flex items-start  border-b-[1px]  border-gray-200 dark:border-gray-700 py-2 mb-4">
    <div className="bg-gray-700 rounded-full flex items-center justify-center mb-2 mr-4">
      <i className="ri-admin-line text-blue-400 text-xl p-3 lg:text-2xl"></i>
    </div>
    <div>
      <span className="text-lg dark:text-gray-300 text-gray-600  font-Poppins block">
        {heading}
      </span>
      <span className="text-base text-gray-400 font-Poppins">
        {message.slice(1, 60)}...
      </span>
    </div>
  </div>
);

function Messages() {
  return (
    <div className="bg-white flex dark:bg-[#1F2937] flex-col p-6 rounded-xl">
      <span className="text-xl dark:text-white mb-4 h-[20%] text-gray-600 font-semibold">
        Admin Messages
      </span>
      <div className="max-h-[250px] contains overflow-scroll">
        <Message
          heading="Authentication Error"
          message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellendus inventore amet, facere cumque eos!"
        />
        <Message
          heading="Authentication Error"
          message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellendus inventore amet, facere cumque eos!"
        />
      </div>
    </div>
  );
}

export default Messages;

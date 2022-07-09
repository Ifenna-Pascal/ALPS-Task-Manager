import React from "react";
import { useSelector } from "react-redux";
import EmptyState from "../../EmptyState";

const Message = ({ heading, message }) => (
  <div className="flex items-start  border-b-[1px]  border-gray-200 dark:border-gray-700 py-2 mb-4">
    <div className="dark:bg-gray-700 bg-gray-100 rounded-full flex items-center justify-center mb-2 mr-4">
      <i className="ri-admin-line dark:text-blue-400 text-blue-300 text-xl p-3 lg:text-2xl"></i>
    </div>
    <div>
      <span className="text-lg dark:text-gray-300 text-gray-600  font-Poppins block">
        {heading}
      </span>
      <span className="text-base text-gray-400 font-Poppins">
        {message.slice(0, 60)}...
      </span>
      {/* <span>{new Date(time)}</span> */}
    </div>
  </div>
);

function Messages() {
  const { messages } = useSelector((state) => state.users);
  return (
    <div className="bg-white flex dark:bg-[#1F2937] flex-col p-6 rounded-xl">
      <span className="text-xl dark:text-white mb-4 h-[20%] text-gray-600 font-semibold">
        Latest Admin Messages
      </span>
      <div className="max-h-[250px] contains overflow-scroll">
        {
          messages && messages.length > 0 ? messages.slice(0, 2).map((x, id) => (
            <Message
              key={id}
              heading={x.title}
              message={x.message}
            />
          ))
            : (<EmptyState msg="No Message From Admin" />)
        }
      </div>
    </div>
  );
}

export default Messages;

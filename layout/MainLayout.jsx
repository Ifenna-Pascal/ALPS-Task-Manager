import React from "react";
import Navbar from "../components/userdashboard/Navbar";
import Sidebar from "../components/userdashboard/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="md:bg-[#F7F6F4]  md:p-8 flex gap-x-12 h-screen md:h-full w-full">
        <Sidebar />
        <div className="w-full h-full  md:ml-[200px]">
          <Navbar />
          <main className="md:w-[90%] w-full mx-auto">{children}</main>
        </div>
      </div>
  );
}

export default MainLayout;

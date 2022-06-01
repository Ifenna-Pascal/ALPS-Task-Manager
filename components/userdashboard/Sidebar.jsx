import React from "react";
import sideBarIcon from "../../util/sidebar";
import SidedashbaordIcon from "./SidedashbaordIcon";
import { useRouter } from "next/router";

function Sidebar({ show, closeSidebar }) {
  const router = useRouter();
  return (
    <div className={`${show ? 'w-screen h-screen fixed z-50 bg-[rgba(0,0,0,0.3)]' : 'fixed'} duration-300 md:block`}>
      <div
        className={`fixed h-screen w-[218px] duration-300 z-50 ${
          show ? "translate-x-0" : "-translate-x-[100%]"
        } md:translate-x-0  bg-white flex_1 lg:rounded-xl shadow-md`}
      >
        <div className="mt-32 flex flex-col pl-8 ">
          {sideBarIcon.map((x, i) => (
            <SidedashbaordIcon
              key={i}
              path={x.pathname}
              classes={
                router.pathname === x.pathname
                  ? "bg-gradient-to-r from-white to-[#a4bcdf] border-r-[3px] border-[#247bf4] "
                  : ""
              }
              class_text={
                router.pathname === x.pathname ? "text-[#0a51b6] " : ""
              }
              icon={x.icon}
              name={x.name}
              close={closeSidebar}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

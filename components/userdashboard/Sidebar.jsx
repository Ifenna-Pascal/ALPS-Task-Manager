import React from "react";
import sideBarIcon from "../../util/sidebar";
import SidedashbaordIcon from "./SidedashbaordIcon";
import { useRouter } from "next/router";

function Sidebar() {
  const router = useRouter();
  return (
    <div className="fixed h-screen w-[218px] hidden md:block  bg-white flex_1 rounded-xl shadow-md">
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
              router.pathname === x.pathname
                ? "text-[#0a51b6] "
                : ""
            }
            icon={x.icon}
            name={x.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

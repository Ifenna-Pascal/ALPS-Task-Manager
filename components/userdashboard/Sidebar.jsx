import React from "react";
import sideBarIcon from "../../util/sidebar";
import SidedashbaordIcon from "./SidedashbaordIcon";
import { useRouter } from "next/router";

function Sidebar() {
  const router = useRouter();
  return (
    <div className="fixed h-screen w-[200px] hidden md:block  bg-white flex_1 rounded-xl shadow-md">
      <div className="pt-24 flex flex-col pl-4 ">
        {sideBarIcon.map((x, i) => (
          <SidedashbaordIcon
            key={i}
            path={x.pathname}
            classes={
              router.pathname === x.pathname
                ? "bg-gradient-to-r from-white to-[#FFF2EC] border-r-[3px] border-[#FD7B38] "
                : ""
            }
            class_text={
              router.pathname === x.pathname
                ? "text-[#FD7B38] "
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

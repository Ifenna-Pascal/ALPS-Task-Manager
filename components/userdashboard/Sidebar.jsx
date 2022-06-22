import React from "react";
import sideBarIcon from "../../util/sidebar";
import SidedashbaordIcon from "./SidedashbaordIcon";
import { useRouter } from "next/router";

function Sidebar({ show, closeSidebar }) {
  const router = useRouter();
  return (
    <div
      className={`${show ? "w-screen h-screen fixed z-50 bg-[rgba(0,0,0,0.3)]" : "fixed"
        } duration-300 md:block`} onClick={() => closeSidebar(false)}
    >
      <div
        className={`fixed h-screen w-[218px] duration-300 z-50 ${show ? "translate-x-0" : "-translate-x-[100%]"
          } md:translate-x-0  bg-white flex_1 lg:rounded-xl shadow-md`}
      >
        <div className="mt-32 flex flex-col pl-8 ">
          <SidedashbaordIcon
            path="/"
            classes={
              router.pathname === "/" || router.pathname === "/viewprofile"
                ? "bg-gradient-to-r from-white to-[#a4bcdf] border-r-[3px] border-[#247bf4] "
                : ""
            }
            class_text={
              router.pathname === "/" || router.pathname === "/editprofile"
                ? "text-[#0a51b6] "
                : ""
            }
            icon="ri-dashboard-line"
            name="Dashboard"
            close={closeSidebar}
          />
          <SidedashbaordIcon
            path="/mytasks"
            classes={
              router.pathname === "/mytasks" ||
                /\/mytasks\/\D+/.test(router.pathname)
                ? "bg-gradient-to-r from-white to-[#a4bcdf] border-r-[3px] border-[#247bf4] "
                : ""
            }
            class_text={
              router.pathname === "/mytasks" ||
                /\/mytasks\/\D+/.test(router.pathname)
                ? "text-[#0a51b6] "
                : ""
            }
            icon="ri-calendar-todo-line"
            name="My Task"
            close={closeSidebar}
          />
          <SidedashbaordIcon
            path="/"
            classes={
              router.pathname === "/logs"
                ? "bg-gradient-to-r from-white to-[#a4bcdf] border-r-[3px] border-[#247bf4] "
                : ""
            }
            class_text={router.pathname === "/logs" ? "text-[#0a51b6] " : ""}
            icon="ri-dashboard-line"
            name="Logs"
            close={closeSidebar}
          />
          <SidedashbaordIcon
            path="/settings"
            classes={
              router.pathname === "/settings" || /\/settings\/\w+/.test(router.pathname)
                ? "bg-gradient-to-r from-white to-[#a4bcdf] border-r-[3px] border-[#247bf4] "
                : ""
            }
            class_text={
              router.pathname === "/settings" || /\/settings\/\w+/.test(router.pathname) ? "text-[#0a51b6] " : ""
            }
            icon="ri-settings-2-line"
            name="Settings"
            close={closeSidebar}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

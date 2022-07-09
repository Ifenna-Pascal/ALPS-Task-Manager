import React from "react";
import sideBarIcon from "../../util/sidebar";
import SidedashbaordIcon from "./SidedashbaordIcon";
import { useRouter } from "next/router";
// import useDarkMode from "../../util/useDarkMode";

function Sidebar({ show, closeSidebar }) {
  const router = useRouter();
  // const [colorTheme, setTheme] = useDarkMode();
  // console.log(colorTheme)
  return (
    <div
      className={`${show ? "w-screen h-screen fixed z-50 bg-[rgba(0,0,0,0.3)]" : "fixed"
        } duration-300 md:block`} onClick={() => closeSidebar(false)}
    >
      <div
        className={`fixed dark:bg-[#1F2937] h-screen w-[218px] duration-300 z-50 ${show ? "translate-x-0" : "-translate-x-[100%]"
          } md:translate-x-0  bg-white flex_1 lg:rounded-xl shadow-md`}
      >
         {/* {
        colorTheme === "light" ? <button onClick={() => SetTheme('dark')} className="bg-blue-500">Dark</button> : <button className="bg-blue-400" onClick={() => setTheme('light')}>Light</button>
      } */}
        <div className="mt-32 flex flex-col pl-8 ">
          <SidedashbaordIcon
            path="/"
            classes={
              router.pathname === "/" || router.pathname === "/viewprofile"
                ? " dark:bg-blue-500 border-r-[3px] bg-gradient-to-l from-blue-400  border-[#247bf4] "
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
                ? " dark:bg-blue-500 bg-gradient-to-l from-blue-400  border-r-[3px] border-[#247bf4] "
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
                ? " dark:bg-blue-500 border-r-[3px] bg-gradient-to-l from-blue-400  border-[#247bf4] "
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
                ? " dark:bg-blue-500 border-r-[3px] bg-gradient-to-l from-blue-400  border-[#247bf4] "
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

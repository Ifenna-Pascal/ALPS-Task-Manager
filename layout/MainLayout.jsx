import { useEffect, useState } from "react";
import Navbar from "../components/userdashboard/Navbar";
import Sidebar from "../components/userdashboard/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
function MainLayout({ children }) {
  const [show, setShow] = useState(false);
  const [navShow, setNavShow] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() =>  {
    console.log(status, "status")
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [session]);
  return (
    
    <div className="md:bg-[#F7F6F4] md:p-8 flex gap-x-12 h-full md:h-full w-full dark:bg-[#161e2f]">
      <Sidebar closeSidebar={setShow} show={show} />
      <div className="w-full h-full  md:ml-[250px]">
        <Navbar show={navShow} setShow={setNavShow} />
        <div
          className={`w-12 h-12 md:hidden justify-center shadow-lg flex items-center z-40 fixed ${navShow ? "translate-x-0 inset-x-[45%] bottom-[14rem]" : "-translate-x-[100%]"} bg-gray-500 rounded-full  duration-300 `}
          onClick={() => setNavShow(false)}
        >
          <i
            className={`${navShow ? "ri-close-line" : "ri-menu-5-line"
              } text-white   font-bold text-xl`}
          ></i>
        </div>
        <div
          className="w-12 h-12 md:hidden justify-center shadow-lg flex items-center z-50 fixed bottom-[10%] right-[2%] bg-blue-500 rounded-full"
          onClick={() => setShow(!show)}
        >
          <i
            className={`${show ? "ri-close-line" : "ri-menu-5-line"
              } text-white   font-bold text-xl`}
          ></i>
        </div>
        <main className="w-full  mx-auto" >{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;

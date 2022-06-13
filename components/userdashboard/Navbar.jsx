import { useState, useEffect } from "react";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import { allTasks } from '../../store/apicall/userCalls';


const Display = ({ children, type, ...rest }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <div onClick={() => setShow(!show)}>
        {type === "profile" ? (
          <img
            className="object-cover  rounded-full h-8 w-8"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
        ) : (
          <div className="flex items-center relative text-[#6B6D72] text-2xl">
            <span {...rest}></span>
            <i className={type}></i>
          </div>
        )}
      </div>
      <div onClick={() => setShow(false)}>
          {show && children}
      </div>
    </div>
  );
};

function Navbar() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => async () => {
    const res = await allTasks();
    if (res) {
      setTasks(res);
    }
  }, [])
  const handleSearch = async (searched) => {
    setSearch(searched);
  }
  return (
    <>
      <div className="h-16 md:h-12 flex py-2 px-4 fixed md:sticky z-50 md:z-10 bottom-0  bg-gray-300 md:top-[2rem] w-full md:w-full mx-auto md:bg-white rounded-t-2xl  md:rounded-xl shadow-sm ">
        <div className="flex items-center  w-full justify-between">
          <div className="relative w-[30%] md:flex hidden  items-center">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-3 h-3 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokewidth="2"
                  strokelinecap="round"
                  strokelinejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="w-full  pl-8 py-[0.35rem] text-gray-700 bg-[#F7F6F4]   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 rounded-2xl focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-100 focus:ring-opacity-40 text-[10px] focus:outline-none focus:ring"
              placeholder="search by task name..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="flex justify-between md:w-[20%] w-[90%] mx-auto md:mx-0">
            <Display
              type="ri-chat-1-line"
              className="p-1 bg-blue-500 absolute right-[0.1rem] top-1  rounded-full"
            >
              <div className="absolute right-0 left-0 md:left-auto  bottom-16 md:bottom-auto z-20 mt-3 overflow-hidden bg-white rounded-md shadow-lg w-80 dark:bg-gray-800">
                <div className="py-2">
                  <a
                    href="#"
                    className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
                  >
                    <p className="mx-2 text-sm text-gray-600 dark:text-white">
                      <span className="font-bold" href="#">
                        Sara Salah
                      </span>{" "}
                      replied on the{" "}
                      <span className="font-bold text-blue-500" href="#">
                        Upload Image
                      </span>{" "}
                      artical . 2m
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
                  >
                    <p className="mx-2 text-sm text-gray-600 dark:text-white">
                      <span className="font-bold" href="#">
                        Slick Net
                      </span>{" "}
                      start following you . 45m
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
                  >
                    <p className="mx-2 text-sm text-gray-600 dark:text-white">
                      <span className="font-bold" href="#">
                        Jane Doe
                      </span>{" "}
                      Like Your reply on{" "}
                      <span className="font-bold text-blue-500" href="#">
                        Test with TDD
                      </span>{" "}
                      artical . 1h
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <p className="mx-2 text-sm text-gray-600 dark:text-white">
                      <span className="font-bold" href="#">
                        Abigail Bennett
                      </span>{" "}
                      start following you . 3h
                    </p>
                  </a>
                </div>
              </div>
            </Display>

            <Display
              type="ri-notification-3-line"
              className="p-1 bg-red-500 absolute right-1 top-1  rounded-full"
            >
              <div className="absolute md:right-0  md:left-auto bottom-16 md:bottom-auto -left-24 z-20 mt-3 overflow-hidden bg-white rounded-md shadow-lg w-80 dark:bg-gray-800">
                <div className="py-2">
                  <a
                    href="#"
                    className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
                  >
                    <p className="mx-2 text-sm text-gray-600 dark:text-white">
                      <span className="font-bold" href="#">
                        Sara Salah
                      </span>{" "}
                      replied on the{" "}
                      <span className="font-bold text-blue-500" href="#">
                        Upload Image
                      </span>{" "}
                      artical . 2m
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
                  >
                    <p className="mx-2 text-sm text-gray-600 dark:text-white">
                      <span className="font-bold" href="#">
                        Slick Net
                      </span>{" "}
                      start following you . 45m
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
                  >
                    <p className="mx-2 text-sm text-gray-600 dark:text-white">
                      <span className="font-bold" href="#">
                        Jane Doe
                      </span>{" "}
                      Like Your reply on{" "}
                      <span className="font-bold text-blue-500" href="#">
                        Test with TDD
                      </span>{" "}
                      artical . 1h
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <p className="mx-2 text-sm text-gray-600 dark:text-white">
                      <span className="font-bold" href="#">
                        Abigail Bennett
                      </span>{" "}
                      start following you . 3h
                    </p>
                  </a>
                </div>
              </div>
            </Display>
            <div className="flex items-center md:hidden text-[#6B6D72] text-2xl">
              <i className="ri-search-2-line"></i>
            </div>
            <div className="relative inline-block">
              <Display type="profile">
                <div className="absolute right-0  bottom-16 md:bottom-auto z-20 w-56 py-2 mt-3 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
                  <a
                    href="#"
                    className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <div className="mx-1">
                      <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Jane Doe
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        janedoe@exampl.com
                      </p>
                    </div>
                  </a>

                  <hr className="border-gray-200 dark:border-gray-700 " />

                  <Link href="/editprofile">
                    <a className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      Edit profile
                    </a>
                  </Link>

                  <a
                    href="#"
                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Logout
                  </a>
                </div>
              </Display>
            </div>
          </div>
        </div>
      </div>
      {
        search && <div className="bg-gray-200 duration-300 relative mt-2 rounded-md py-3 px-6">
          {
            tasks.filter(x => x.taskName.toLowerCase().includes(search.toLowerCase())).map((x, i) => {
              if (!x.taskName) {
                return <span>No task found</span>
              } else {
                return (<div className="w-full" key={i} onClick={() => setSearch("")}>

                  <Link href={`/mytasks/${x._id}`}>
                    <a className="block mb-2 text-base text-gray-800"> {`> ${x.taskName}`}</a>
                  </Link>

                </div>)

              }
            })
          }
        </div>
      }
    </>
  );
}

export default Navbar;

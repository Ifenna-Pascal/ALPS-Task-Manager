import { useState, useEffect } from "react";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import { signOut } from "next-auth/react"
import { allTasks } from '../../store/apicall/userCalls';
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ThemeButton from "../../layout/ThemeButton";

const Display = ({ children, type, display, show, setShow, active, choosen, setChoosen, ...rest }) => {
  const { loggedInUser } = useSelector(state => state.users);
  const handleShow = () => {
    setShow(!show);
    setChoosen(active);
  }
  return (
    <div className="">
      <div onClick={handleShow}>
        {type === "profile" ? (
          loggedInUser?.imageUrl ? <img
            className="object-cover cursor-pointer  rounded-full h-8 w-8"
            src={loggedInUser?.imageUrl}
            alt="avatar"
          /> : <span className="w-8 h-8 flex items-center cursor-pointer text-white text-xl text-center justify-center font-900  bg-purple-500 rounded-full"> {loggedInUser?.userName?.charAt(0).toUpperCase()} </span>
        ) : (
          <div className="flex items-center cursor-pointer relative text-[#6B6D72] dark:text-gray-400 text-2xl">
            {display && <span {...rest}></span>}
            <i className={type}></i>
          </div>
        )}
      </div>
      <div className={`duration-300 ${(show && choosen === active) ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

function Navbar({ show, setShow }) {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [choosen, setChoosen] = useState('');
  const { loggedInUser, messages } = useSelector(state => state.users);
  useEffect(() => {
    const fetchData = async () => {
      const res = await allTasks(loggedInUser?._id);
      setTasks(res && res);
    }
    fetchData().catch(err => {
      console.log(err);
      toast.error('Error fetching tasks');
    });
  }, [])
  const handleSearch = async (searched) => {
    setSearch(searched);
  }
  return (
    <div
      className={`${show ? "w-full h-screen md:h-12 md:static  fixed z-40 bg-[rgba(0,0,0,0.3)] lg:bg-transparent " : "w-full"
        } duration-300`}
    >
      <div className="h-16 md:h-12 flex py-2 px-4 fixed md:sticky z-50 md:z-10 bottom-0 dark:bg-[#1F2937] bg-gray-300 md:top-[2rem] w-full md:w-full mx-auto md:bg-white rounded-t-2xl  md:rounded-xl shadow-sm ">
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
              className="w-full  pl-8 py-[0.35rem] text-gray-700  bg-[#F7F6F4]   rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-2xl focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-100 focus:ring-opacity-40 text-[10px] focus:outline-none focus:ring"
              placeholder="search by task name..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center md:w-[15%] w-[90%] mx-auto md:mx-0">
            <ThemeButton />
            <Display
              setChoosen={setChoosen}
              choosen={choosen}
              show={show}
              setShow={setShow}
              active='0'
              type="ri-chat-1-line"
              display={messages && messages.length > 0}
              className="p-1 bg-blue-500 absolute right-[0.1rem] top-1  rounded-full"
            >
              <div className={`absolute right-0 md:mt-4 bottom-0 duration-300  left-0 md:left-auto md:bottom-auto z-20  overflow-hidden bg-white rounded-t-lg shadow-xl md:w-80 w-[100%] dark:bg-gray-800`}>
                <div className="py-2">
                  {
                    messages && messages.length > 0 ? messages.map((x, i) => (
                      <a
                        key={i}
                        href="#"
                        className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
                      >
                        <p className="mx-2 text-sm text-gray-600 dark:text-white">
                          <span className="font-bold block" href="#">
                            {x.title}:-
                          </span>{" "}
                          {x.message}
                        </p>
                      </a>
                    )) : <a
                      className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
                    >
                      <p className="mx-2 text-sm text-gray-600 dark:text-white">
                        No Message available
                      </p>
                    </a>
                  }

                </div>
              </div>
            </Display>
            <div className="flex items-center md:hidden text-[#6B6D72] text-2xl">
              <Link href="/mobilesearch"><i className="ri-search-2-line"></i></Link>
            </div>
              <Display type="profile" show={show}
                setShow={setShow}
                setChoosen={setChoosen}
                choosen={choosen}
                active='2'>
                <div className={`absolute right-0 py-3 w-full md:mt-4 bottom-0 duration-300  left-0 md:left-auto md:bottom-auto z-20  overflow-hidden bg-white rounded-t-lg shadow-xl md:w-80 w-[100%] dark:bg-gray-800`}>
                  <a
                    href="#"
                    className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <div className="mx-1">
                      <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        {loggedInUser && loggedInUser.userName}
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {loggedInUser && loggedInUser.email}
                      </p>
                    </div>
                  </a>

                  <hr className="border-gray-200 dark:border-gray-700 " />

                  <Link href="/viewprofile">
                    <a className="block px-4 pt-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      view profile
                    </a>
                  </Link>

                  <a
                    onClick={() => signOut({ callbackUrl: `${window.location.origin}/auth/signin` })}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Logout
                  </a>
                </div>
              </Display>
            </div>
          </div>
        </div>
      {
        search && <div className="bg-gray-200 rounded-lg dark:bg-gray-700 duration-300 relative mt-2  py-3 px-6">
          {
            tasks && tasks.length === 0 && <div className="text-left w-full dark:text-gray-300 text-base font-Roboto"> NO TASKS FOUND </div>
          }
          {
            tasks && tasks.filter(x => x.taskName.toLowerCase().includes(search.toLowerCase())).length === 0 && <div className="text-left w-full text-base dark:text-gray-300 font-Roboto"> NO MATCH </div>
          }
          {
            tasks && tasks.filter(x => x.taskName.toLowerCase().includes(search.toLowerCase())).map((x, i) => {

              {
                return (<div className="w-full" key={i} onClick={() => setSearch("")}>

                  <Link href={`/mytasks/${x._id}`}>
                    <a className="block mb-2 text-base text-gray-800 dark:text-gray-300"> {`> ${x.taskName}`}</a>
                  </Link>

                </div>)

              }
            })
          }
        </div>
      }
    </div>
  );
}

export default Navbar;

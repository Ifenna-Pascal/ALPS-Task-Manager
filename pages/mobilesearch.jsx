import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import Taskcard from '../components/userdashboard/tasks/Taskcard';
import EmptyState from '../components/EmptyState';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import {
    getUserDetails,
    getUserTasks,
    allTasks,
    allMessages,
  } from "../store/apicall/userCalls";
  import { wrapper } from "../store/store";
  import {
    userDetails,
    addCurrentTask,
    filterTasks,
    loggedUser,
    allMyMessages,
  } from "../store/slice/userSlice";
  import MainLayout from "../layout/MainLayout";
  import { getSession } from 'next-auth/react';
  import { loadUser } from "../util/tokenLoad";

function MobileSearch() {
    const textInput = useRef(null);
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [tasks, setTasks] = useState([]);
    const { loggedInUser } = useSelector(state => state.users);
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
<MainLayout>
<div className="bg-gray-100 dark:bg-[#111827] h-screen">

<div className="relative w-full sticky top-3 px-5 md:hidden flex py-6  items-center">
    <span className="absolute inset-y-0 left-0 flex items-center pl-8">
        <svg
            className="w-5 h-5 text-gray-400"
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
        ref={textInput}
        className="w-full  pl-9 py-4 text-gray-700 mb-1 bg-gray-200  rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 rounded-2xl focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-100 focus:ring-opacity-40 text-[15px] focus:outline-none focus:ring"
        placeholder="Search By Taskname..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
    />

</div>
<div
    className="flex px-5 md:hidden mb-6 items-center"
>
    <div className="text-xl text-[#E74141]"></div>
    <i className="ri-arrow-left-line dark:text-gray-300 text-2xl mr-1" onClick={() => router.push("/mytasks")} ></i>
    <span className="text-gray-700 font-Poppins dark:text-gray-300  font-[400] text-[20px] leading-[24px]" onClick={() => router.push("/mytasks")} >
        Back
    </span>
</div>
{
    search ? <div className="px-5 max-h-[80vh] md:hidden mb-12 overflow-y-scroll ">
        {
            // tasks && tasks.length === 0 && <div className="py-5 md:hidden"> <EmptyState msg="No Result Found" /></div>
        }
        {
            tasks && tasks.filter(x => x.taskName.toLowerCase().includes(search.toLowerCase())).length === 0 && <div className="py-5 md:hidden"> <EmptyState msg="No Result Found" /> </div>
        }
        {
            tasks && tasks.filter(m => m.taskName.toLowerCase().includes(search.toLowerCase())).map((x, i) => {
                return (<div className="w-full" key={i} onClick={() => setSearch("")}>
                    <Link href={`/mytasks/${x._id}`}>
                        {/* <a> */}
                            <Taskcard
                                key={i}
                                id={x._id}
                                header={x.taskName}
                                content={
                                    x.taskDescription
                                        ? x.taskDescription.slice(0, x.taskDescription.length / 2)
                                        : ""
                                }
                                deadline={x.startDate}
                                duration={x.endDate}
                            />
                        {/* </a> */}
                    </Link>

                </div>)
            })

        }
    </div> : <div className="px-5 md:hidden"> <EmptyState msg="No Result Found" /> </div>
}
</div>
</MainLayout>
    )
}

export default MobileSearch;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async ({req,res}) => {
      const session = await getSession({req})
      console.log('sessionss');
      const fetchedUser = await loadUser(session?.user?.accessToken);
      const result = await getUserDetails(fetchedUser?._id);
      const currentTask = await getUserTasks(fetchedUser?._id);
      const allTask = await allTasks(fetchedUser?._id);
      const allMessage = await allMessages(fetchedUser?._id);
      await store.dispatch(allMyMessages(allMessage));
      await store.dispatch(filterTasks(allTask));
      await store.dispatch(loggedUser(result));
      await store.dispatch(userDetails(result));
      await store.dispatch(addCurrentTask(currentTask));
    }
  );
  
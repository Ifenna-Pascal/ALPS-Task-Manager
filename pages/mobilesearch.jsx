import React, { useState, useEffect } from 'react'
import { allTasks } from '../store/apicall/userCalls';
import Link from 'next/link';
import Taskcard from '../components/userdashboard/tasks/Taskcard';
import EmptyState from '../components/EmptyState';
import { useRouter } from 'next/router';

function MobileSearch() {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [tasks, setTasks] = useState([]);
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
        <div className="bg-gray-100 h-screen">

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
                    className="w-full  pl-9 py-4 text-gray-700 mb-1 bg-gray-200  rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 rounded-2xl focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-100 focus:ring-opacity-40 text-[15px] focus:outline-none focus:ring"
                    placeholder="Search By Taskname..."
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                />

            </div>
            <div
                className="flex px-5 mb-6 items-center"
            >
                <div className="text-xl text-[#E74141]"></div>
                <i className="ri-arrow-left-line mr-1" onClick={() => router.push("/mytasks")} ></i>
                <span className="text-gray-700 font-Poppins font-[400] text-[20px] leading-[24px]" onClick={() => router.push("/mytasks")} >
                    Back
                </span>
            </div>
            {
                search ? <div className="px-5 max-h-[80vh] mb-12 overflow-y-scroll ">
                    {
                        tasks && tasks.filter(m => m.taskName.toLowerCase().includes(search.toLowerCase())).map((x, i) => {
                            console.log("......................", i)
                            if (x === null) {
                                console.log("......................", x)
                                return <span>No task found</span>
                            } else {
                                // console.log("......................", x)
                                // return <span>No task found</span>
                                return (<div className="w-full" key={i} onClick={() => setSearch("")}>
                                    <Link href={`/mytasks/${x._id}`}>
                                        <a>
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
                                        </a>
                                    </Link>

                                </div>)

                            }
                        })

                    }
                </div> : <div className="px-5"> <EmptyState msg="No Result Found" /> </div>
            }
        </div>
    )
}

export default MobileSearch
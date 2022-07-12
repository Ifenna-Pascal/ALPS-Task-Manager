import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { updateUserDetails } from "../../store/apicall/userCalls";
import { toast } from 'react-toastify';

export default function Settings() {
  const { loggedInUser: { _id, userName, origin, phoneNumber, userBioData, firstName, lastName, contact, address, dateOfBirth, country } } = useSelector(state => state.users);
  const initialState = {
    userName: userName ? userName : "",
    firstName: firstName ? firstName : "",
    phoneNumber: phoneNumber ? phoneNumber : "",
    lastName: lastName ? lastName : "",
    contact: contact ? contact : "",
    address: address ? address : "",
    userBioData: userBioData ? userBioData : "",
    dateOfBirth: dateOfBirth ? dateOfBirth : "",
    origin: origin ? origin : "",
    country: country ? country : "",
  };
  const [updateData, setUpdateData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const formHandler = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await updateUserDetails(_id, updateData);
      if (result) {
        setLoading(false);
        toast.success("Profile Updated")
      }
    } catch (error) {
      toast.error("Error updating profile")
    }
  }
  
  return (
    <div>
      <div>
        <section className="px-3 py-8">
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className=" flex flex-col mx-auto space-y-4 md:space-y-12"
          >
            <fieldset className="bg-white dark:bg-[#1F2937] dark:mx-2   grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium dark:text-gray-300">Personal Information</p>
                <p className="text-sm dark:text-gray-300 text-gray-800 dark:text-gray-300">
                  Update Personal Information
                </p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm dark:text-gray-300">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    value={updateData.firstName}
                    onChange={(e) => formHandler(e)}
                    id="firstname"
                    type="text"
                    placeholder="First name"
                    className="w-full p-3 rounded-md dark:bg-gray-700 dark:text-gray-400 bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm dark:text-gray-300">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    value={updateData.lastName}
                    onChange={(e) => formHandler(e)}
                    id="lastname"
                    type="text"
                    placeholder="Last name"
                    className="w-full p-3 rounded-md dark:bg-gray-700 dark:text-gray-400 bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm dark:text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    placeholder="0120877890"
                    value={updateData.phoneNumber}
                    name="phoneNumber"
                    onChange={(e) => formHandler(e)}
                    className="w-full p-3 rounded-md dark:bg-gray-700 dark:text-gray-400 bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="address" className="text-sm dark:text-gray-300">
                    Address
                  </label>
                  <input
                    name="address"
                    value={updateData.address}
                    onChange={(e) => formHandler(e)}
                    id="address"
                    type="text"
                    placeholder=""
                    className="w-full p-3 rounded-md dark:bg-gray-700 dark:text-gray-400 bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="origin" className="text-sm dark:text-gray-300">
                    State Of Origin
                  </label>
                  <input
                    name="origin"
                    value={updateData.origin}
                    onChange={(e) => formHandler(e)}
                    id="origin"
                    type="text"
                    placeholder=""
                    className="w-full p-3 rounded-md dark:bg-gray-700 dark:text-gray-400 bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="state" className="text-sm dark:text-gray-300">
                    Country
                  </label>
                  <input
                    id="state"
                    name="country"
                    value={updateData.country}
                    onChange={(e) => formHandler(e)}
                    type="text"
                    placeholder=""
                    className="w-full p-3 rounded-md dark:bg-gray-700 dark:text-gray-400 bg-[#F7F6F4]"
                  />
                </div>
         
              </div>
            </fieldset>
            <fieldset className="bg-white dark:bg-[#1F2937] dark:mx-2    grid py-6 mb-2 grid-cols-4 gap-6 px-6 md:p-6 rounded-md shadow-sm">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium dark:text-gray-300">Profile</p>
                <p className="text-md text-gray-800 dark:text-gray-300">Update your profile status</p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="username" className="text-sm dark:text-gray-300">
                    Username
                  </label>
                  <input
                    name="userName"
                    value={updateData.userName}
                    onChange={(e) => formHandler(e)}
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 rounded-md dark:bg-gray-700 dark:text-gray-400 bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="dateofbirth" className="text-sm dark:text-gray-300">
                    Date Of Birth
                  </label>
                  <input
                    name="dateOfBirth"
                    value={updateData.dateOfBirth}
                    onChange={(e) => formHandler(e)}
                    id="dateOfBirth"
                    type="date"
                    // placeholder="Username"
                    className="w-full p-3 rounded-md dark:bg-gray-700 dark:text-gray-400 bg-[#F7F6F4]"
                  />
                </div>
                {/* <div className="col-span-full sm:col-span-3">
                  <label htmlFor="website" className="text-sm dark:text-gray-300">
                    Website
                  </label>
                  <input
                    id="website"
                    type="text"
                    placeholder="https://"
                    className="w-full p-3 rounded-md dark:bg-gray-700 dark:text-gray-400 bg-[#F7F6F4]"
                  />
                </div> */}
                <div className="col-span-full">
                  <label htmlFor="bio" className="text-sm dark:text-gray-300">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="userBioData"
                    value={updateData.userBioData}
                    onChange={(e) => formHandler(e)}
                    placeholder=""
                    className="w-full p-3 rounded-md dark:bg-gray-700 dark:text-gray-400 bg-[#F7F6F4]"
                  ></textarea>
                </div>
                <div>
                </div>
              </div>
            </fieldset>
            <div className="px-6 py-2 ">
              <button className="px-12 py-2 mb-16 leading-5 text-white transition-colors duration-200  bg-blue-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                {loading ? "Updating..." : "Update Profile"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

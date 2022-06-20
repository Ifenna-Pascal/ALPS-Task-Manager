import React, { useState } from "react";
import { useSelector } from "react-redux";
import { updateUserDetails } from "../../store/apicall/userCalls";

export default function Settings() {
  const { profile } = useSelector(state => state.users)
  const initialState = {
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    contact: "",
    address: "",
    userBio: "",
    dateOfBirth: "",
    state: "",
    country: ""
  };
  const [updateData, setUpdateData] = useState(initialState);

  const formHandler = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(updateData)
    // updateUserDetails(profile?._id, updateData);
  }
  return (
    <div>
      <div>
        <section className="p-3">
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className=" flex flex-col mx-auto space-y-4 md:space-y-12"
          >
            <fieldset className="bg-white grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">Personal Information</p>
                <p className="text-sm text-gray-800">
                  Update Personal Information
                </p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    First Name
                  </label>
                  <input
                    name="firstname"
                    value={updateData.firstname}
                    onChange={(e) => formHandler(e)}
                    id="firstname"
                    type="text"
                    placeholder="First name"
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    Last name
                  </label>
                  <input
                    name="lastname"
                    value={updateData.lastname}
                    onChange={(e) => formHandler(e)}
                    id="lastname"
                    type="text"
                    placeholder="Last name"
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                {/* <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div> */}
                <div className="col-span-full">
                  <label htmlFor="address" className="text-sm">
                    Address
                  </label>
                  <input
                    name="address"
                    value={updateData.address}
                    onChange={(e) => formHandler(e)}
                    id="address"
                    type="text"
                    placeholder=""
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="city" className="text-sm">
                    City
                  </label>
                  <input
                    name="city"
                    value={updateData.state}
                    onChange={(e) => formHandler(e)}
                    id="city"
                    type="text"
                    placeholder=""
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="state" className="text-sm">
                    State / Province
                  </label>
                  <input
                    id="state"
                    type="text"
                    placeholder=""
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                {/* <div className="col-span-full sm:col-span-2">
                  <label htmlFor="zip" className="text-sm">
                    ZIP / Postal
                  </label>
                  <input
                    id="zip"
                    type="text"
                    placeholder=""
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div> */}
              </div>
            </fieldset>
            <fieldset className="bg-white grid grid-cols-4 gap-6 px-6 md:p-6 rounded-md shadow-sm">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">Profile</p>
                <p className="text-md text-gray-800">Update your profile status</p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="username" className="text-sm">
                    Username
                  </label>
                  <input
                    name="username"
                    value={updateData.username}
                    onChange={(e) => formHandler(e)}
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                {/* <div className="col-span-full sm:col-span-3">
                  <label htmlFor="website" className="text-sm">
                    Website
                  </label>
                  <input
                    id="website"
                    type="text"
                    placeholder="https://"
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div> */}
                <div className="col-span-full">
                  <label htmlFor="bio" className="text-sm">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="userBio"
                    value={updateData.userBio}
                    onChange={(e) => formHandler(e)}
                    placeholder=""
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  ></textarea>
                </div>
                <div>
                </div>
              </div>
            </fieldset>
            <button className="px-12 py-2 mb-12 leading-5 text-white transition-colors duration-200 transhtmlForm bg-blue-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Update
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

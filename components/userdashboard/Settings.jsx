import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { updateUserDetails } from "../../store/apicall/userCalls";

export default function Settings() {
  const router = useRouter();
  const { loggedInUser: { _id, userName, origin, userBioData, firstName, lastName, contact, address, dateOfBirth, country } } = useSelector(state => state.users)
  // console.log(loggedInUser, "profile")
  const initialState = {
    userName: userName ? userName : "",
    firstName: firstName ? firstName : "",
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
    console.log(updateData)
    try {
      const result = await updateUserDetails(_id, updateData);
      if (result) {
        setLoading(false);
        router.push('/viewprofile');
      }
    } catch (error) {
      console.log(error);
    }
  }
  {
    loading && <div className="w-screen flex items-center justify-center h-screen">
      <div className="w-full h-full w-[60px] h-[60px] rounded-full p-8 bg-blue-500 animate-ping" />
    </div>
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
                    name="firstName"
                    value={updateData.firstName}
                    onChange={(e) => formHandler(e)}
                    id="firstname"
                    type="text"
                    placeholder="First name"
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    value={updateData.lastName}
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
                <div className="col-span-full sm:col-span-3">
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
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="origin" className="text-sm">
                    State Of Origin
                  </label>
                  <input
                    name="origin"
                    value={updateData.origin}
                    onChange={(e) => formHandler(e)}
                    id="origin"
                    type="text"
                    placeholder=""
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="state" className="text-sm">
                    Country
                  </label>
                  <input
                    id="state"
                    name="country"
                    value={updateData.country}
                    onChange={(e) => formHandler(e)}
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
                    name="userName"
                    value={updateData.userName}
                    onChange={(e) => formHandler(e)}
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="dateofbirth" className="text-sm">
                    Date Of Birth
                  </label>
                  <input
                    name="dateOfBirth"
                    value={updateData.dateOfBirth}
                    onChange={(e) => formHandler(e)}
                    id="dateOfBirth"
                    type="date"
                    // placeholder="Username"
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
                    name="userBioData"
                    value={updateData.userBioData}
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

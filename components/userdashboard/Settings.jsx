import React from "react";

export default function Settings() {
  return (
    <div>
      <div>
        <section className="p-3">
          <form
            noValidate=""
            action=""
            className=" flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
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
                    First name
                  </label>
                  <input
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
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="zip" className="text-sm">
                    ZIP / Postal
                  </label>
                  <input
                    id="zip"
                    type="text"
                    placeholder=""
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
              </div>
            </fieldset>
            <fieldset className="bg-white grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
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
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="website" className="text-sm">
                    Website
                  </label>
                  <input
                    id="website"
                    type="text"
                    placeholder="https://"
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="bio" className="text-sm">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    placeholder=""
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  ></textarea>
                </div>
                {/* <div className="col-span-full">
                  <label htmlFor="bio" className="text-sm">
                    Photo
                  </label>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://source.unsplash.com/30x30/?random"
                      alt=""
                      className="w-10 h-10 rounded-full bg-gray-500 "
                    />
                    <button
                      type="button"
                      className="px-4 py-2 border rounded-md border-gray-100"
                    >
                      Change
                    </button>
                  </div>
                </div> */}
              </div>
            </fieldset>
            <div className="mb-[400px]">
              <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transhtmlForm bg-blue-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Update
              </button>
            </div>
            
          </form>
        </section>
      </div>
    </div>
  );
}

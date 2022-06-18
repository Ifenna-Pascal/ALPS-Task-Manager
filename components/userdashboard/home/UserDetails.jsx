import React from "react";
import { useSelector } from 'react-redux';


function UserDetails() {
  const { profile } = useSelector(state => state.users)
  const IMAGE = profile?.headerUrl ? profile.headerUrl : '/project.png';
  return (
    <div className="w-full h-full bg-white  relative ">
      <div className={`w-full h-[20%] bg-blend-darken bg-cover bg-center`} style={{ backgroundImage: `url(${IMAGE})` }}></div>
      <div className="w-[100px]  h-[100px] rounded-full flex item-center absolute top-[12%] left-[calc(50%-50px)]">
        <img
          className="object-cover object-center  rounded-full h-full w-full"
          src= {profile && profile.imageUrl}
          alt="avatar"
        /> 
      </div>
      <div className="py-20 px-4 lg:px-8">
        <div>
          <span className="block text-gray-700 leading-[24px] text-[20px] lg:text-[26px] font-[500] font-Poppins mb-1">
            {profile && profile.userName}
          </span>
          <span className="text-[14px] lg:text-[16px] leading-[12px] text-gray-600">
            Backend Developer
          </span>
        </div>
        <div className="mt-2 lg:mt-4 w-full">
          <span className="py-2  flex font-500 font-Roboto text-base lg:text-lg text-gray-400 border-b-[1px] border-gray-200 w-full">
            Contact Information
          </span>
          <div className="flex  py-4 lg:px-4">
            <div className="mr-8 lg:mr-20">
              <span className="mb-2 text-base block font-semibold text-gray-500">
                Email
              </span>
              <span className="mb-2 text-base block font-semibold text-gray-500">
                Password
              </span>
              <span className="mb-2 text-base block font-semibold text-gray-500">
                Contact Address
              </span>
              <span className="mb-2 text-base block font-semibold text-gray-500">
                Phone Number
              </span>
            </div>
            <div>
              <span className="mb-2 text-base block  text-gray-500">
                 {profile && profile.email}
              </span>
              <span className="mb-2 text-base block  text-gray-500">
                ********* <i className="ri-eye-line ml-4"></i>
              </span>
              <span className="mb-2 text-base block  text-gray-500">
                11 Ani Street Enugu
              </span>
              <span className="text-base block  text-gray-500">
                +234675344443
              </span>
            </div>
          </div>
        </div>
        <div className="lg:mt-4 w-full">
          <span className="py-2  flex font-500 font-Roboto  text-base text-gray-400 border-b-[1px] border-gray-200 w-full">
            Base Information
          </span>
          <div className="flex py-4 lg:px-4">
            <div className="mr-8 lg:mr-20">
              <span className="mb-2 text-base block font-semibold text-gray-500">
                Gender
              </span>
              <span className="mb-2 text-base block font-semibold text-gray-500">
                State of orgin
              </span>
              <span className="mb-2 text-base block font-semibold text-gray-500">
                Birthday
              </span>
            </div>
            <div>
              <span className="mb-2 text-base block  text-gray-500">Male</span>
              <span className="mb-2 text-base block  text-gray-500">
                Anambra
              </span>
              <span className="mb-2 text-base block  text-gray-500">
               {profile && profile.dateOfBirth}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
  
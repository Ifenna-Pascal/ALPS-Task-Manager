import {useState} from "react";
import { useSelector } from 'react-redux';


function UserDetails() {
  const { profile } = useSelector(state => state.users)
  const [show, setShow] = useState(false);
  const IMAGE = profile?.headerUrl ? profile.headerUrl : '/project.png';
  return (
    <div className="w-full h-full pb-12 bg-white dark:bg-transparent   relative ">
      <div className={`w-full h-[20%] bg-blend-darken bg-cover bg-center`} style={{ backgroundImage: `url(${IMAGE})` }}></div>
      <div className="w-[100px]  h-[100px] rounded-full flex item-center absolute top-[12%] left-[calc(50%-50px)]">
        <img
          className="object-cover object-center  rounded-full h-full w-full"
          src= {profile && profile.imageUrl}
          alt="avatar"
        /> 
      </div>
      <div className="py-20  max-h-fit  px-4 lg:px-8">
        <div>
          <span className="block text-gray-700 dark:text-white leading-[24px] text-[20px] lg:text-[26px] font-[500] font-Poppins ">
            {profile && profile.userName}
          </span>
          <span className="text-[14px] font-medium dark:text-gray-200 lg:text-[16px] leading-[12px] text-gray-500">
          {profile && profile.Role}
          </span>
          <span className="text-[14px] block my-1 dark:text-gray-300 lg:text-[16px] leading-[12px] text-gray-600">
          {profile && profile.userBioData ? profile.userBioData : '' }
          </span>
         
        </div>
        <div className="mt-2 lg:mt-4 w-full">
          <span className="py-2  flex font-500 font-Roboto md:text-lg md:mr-2  text-base lg:text-lg dark:text-gray-300 text-gray-400 border-b-[1px] dark:border-gray-600 border-gray-200 w-full">
            Contact Information
          </span>
          <table className="border-separate border-spacing-4   py-4 lg:px-4">  
          <tr> 
            <td>  <span className="mb-2 md:text-lg md:mr-2  text-base block font-semibold  text-gray-500 dark:text-gray-400"> Email</span> </td>  
            <td>  <span className="mb-2 md:text-lg md:mr-2  text-base block  text-gray-500 dark:text-gray-400">
                 {profile && profile.email}
              </span> </td>
          </tr>
          <tr> 
            <td>  <span className="mb-2 md:text-lg md:mr-2  text-base block font-semibold text-gray-500 dark:text-gray-400">
                Phone Number
              </span> </td>  
            <td>  <span className="md:text-lg md:mr-2  text-base block  text-gray-500 dark:text-gray-400">
            {profile && profile.phoneNumber ? profile.phoneNumber : 'nill' }
              </span> </td>
          </tr>
          {/* <tr> 
            <td>    <span className="mb-2 md:text-lg md:mr-2  text-base block font-semibold text-gray-500 dark:text-gray-400">
                Password
              </span> </td>  
            <td>  <span className="mb-2 text-sm block  text-gray-500 dark:text-gray-400">
                {profile && show ? profile.password : "XXXXXXXX"} <i className="ri-eye-line ml-1" onClick={() => setShow(!show)}></i>
              </span> </td>
          </tr> */}
          <tr> 
            <td>  <span className="mb-2 md:text-lg md:mr-2  text-base block font-semibold text-gray-500 dark:text-gray-400">
                Contact Address
              </span> </td>  
            <td>   <span className="mb-2 md:text-lg md:mr-2  text-base block  text-gray-500 dark:text-gray-400">
                {profile && profile.address}
              </span> </td>
          </tr>
          </table>
        </div>
        <div className="lg:mt-4 w-full">
          <span className="py-2  flex font-500 font-Roboto  dark:border-gray-600 dark:text-gray-300 md:text-lg md:mr-2  text-base text-gray-400 border-b-[1px] border-gray-200 w-full">
            Base Information
          </span>
          <table className="border-separate border-spacing-4   py-4 lg:px-4">  
          <tr> 
            <td><span className="mb-2 md:text-lg md:mr-2  text-base block font-semibold text-gray-500 dark:text-gray-400">
                Gender
              </span> </td>  
            <td>  <span className="mb-2 md:text-lg md:mr-2  text-base block  text-gray-500 dark:text-gray-400"> {profile && profile.gender ? profile.gender : 'nill' } </span> </td>
          </tr>
          <tr> 
            <td> <span className="mb-2 md:text-lg md:mr-2  text-base block font-semibold text-gray-500 dark:text-gray-400">
                State of orgin
              </span> </td>  
            <td> <span className="mb-2 md:text-lg md:mr-2  text-base block  text-gray-500 dark:text-gray-400">
              {profile && profile.origin ? profile.origin : 'nill' }
              </span> </td>
          </tr>
          <tr> 
            <td>    <span className="mb-2 md:text-lg md:mr-2  text-base block font-semibold text-gray-500 dark:text-gray-400">
                Date Of Birth
              </span> </td>  
            <td>    <span className="mb-2 md:text-lg md:mr-2  text-base block  text-gray-500 dark:text-gray-400">
               {profile && profile.dateOfBirth ? profile.dateOfBirth : 'nill' }
              </span> </td>
          </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
  
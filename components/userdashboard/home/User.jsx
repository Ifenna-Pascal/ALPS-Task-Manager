import {useSelector} from 'react-redux';

function User() {
  const { profile } = useSelector(state => state.users)
  return (
    <div className="w-full h-full  relative ">
      <div className="w-full h-[35%] image rounded-t-xl bg-cover bg-center"></div>
      <div className="w-[100px]  h-[100px] rounded-full flex item-center absolute top-[17.5%] left-[calc(50%-50px)]">
        <img
          className="object-cover object-center  rounded-full h-full w-full"
          src= {profile && profile.imageUrl}
          alt="avatar"
        />
      </div>
      <div className="flex flex-col h-[65%] items-center justify-center">
        <span className="font-bold text-gray-800 font-Roboto text-xl">
          {profile && profile.userName}
        </span>
        <span className="text-gray-500 text-lg font-Poppins">
          Backend Developer{" "}
        </span>
      </div>
     
    </div>
  );
}

export default User;

import { useSelector } from 'react-redux';

function User() {
  const { profile } = useSelector(state => state.users);
  const IMAGE = profile?.headerUrl ? profile.headerUrl : '/project.png';
  return (
    <div className="w-full h-full  relative ">
      <div className={`w-full h-[35%] bg-blend-darken bg-cover bg-center`} style={{ backgroundImage: `url(${IMAGE})` }}></div>
      <div className="w-[100px]  h-[100px] rounded-full flex item-center absolute top-[17.5%] left-[calc(50%-50px)]">
        {
          profile && profile.imageUrl ? <img
            className="object-cover object-center  rounded-full h-full w-full"
            src={profile && profile.imageUrl}
            alt="avatar"
          /> : <span className="w-full h-full flex items-center text-white text-3xl text-center justify-center font-900  bg-purple-500 rounded-full"> {profile?.userName?.charAt(0).toUpperCase() + profile?.userName?.charAt(1).toUpperCase()} </span>
        }

      </div>
      <div className="flex flex-col h-[65%] items-center justify-center">
        <span className="font-bold text-gray-800 dark:text-white font-Roboto text-xl">
          {profile && profile.userName}
        </span>
        <span className="text-gray-500 dark:text-gray-300 text-lg font-Poppins">
          Backend Developer{" "}
        </span>
      </div>

    </div>
  );
}

export default User;

import { getSession } from "next-auth/react";
import { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { getUserDetails, uploadImage } from "../../store/apicall/userCalls";
import { loggedUser } from "../../store/slice/userSlice";
import { wrapper } from "../../store/store";
import { loadUser } from "../../util/tokenLoad";
import { useSelector } from "react-redux";

export default function ProfileSettings() {
  const { loggedInUser: { _id, imageUrl } } = useSelector(state => state.users);
  const [img, setImg] = useState(imageUrl && imageUrl);
  const [loading, setLoading] = useState(false);
  const [upload, setUpload] = useState(false);
  const handleUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImg(URL.createObjectURL(img));
      setUpload(true);
    }
    else {
      console.log('not')
    }
  }
  const submitImage = async (e) => {
    e.preventDefault();
    console.log('res');
    setLoading(true);
    try {
      const result = await uploadImage(_id, img);
      if (result) {
        console.log(result);
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
    <MainLayout>
      <div>
        <div>
          <section className="py-6 px-5">
            <p className="text-gray-700 text-2xl font-bold mt-5 mb-6">
              Settings
            </p>
            <form
              onSubmit={submitImage}
              className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
            >
              <fieldset className="py-6 rounded-md shadow-sm bg-white lg:px-24 pt-10 pb-10">
                <div className="space-y-2 col-span-full mb-8">
                  <p className="font-medium">Profile Settings</p>
                  <p className="text-base text-gray-800">
                    Change your profile picture display
                  </p>
                </div>

                <div className="relative  w-full md:w-[30%] mx-auto">
                  <div className="bg-[#F7F6F4] rounded-full  w-48 h-48 mx-auto">
                    <img  src={img} alt="profile_img" className="rounded-full w-full h-full" />
                  </div>
                  <div className="flex justify-center absolute inset-x-7 top-[9.8rem] ">
                    <label
                      htmlFor="image"
                      className="p-2 h-12 w-12 flex items-center justify-center bg-[#247bf4] text-white rounded-full"
                    >
                      <i className="ri-camera-switch-line text-2xl"></i>
                    </label>
                    {!upload ? <input id="image" type="file" className="mx-auto hidden" onChange={handleUpload} /> :
                      <button className="mx-auto hidden" />}
                  </div>
                </div>

                {/* <button  >change</button> */}
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    const session = await getSession({ req })
    const fetchedUser = await loadUser(session?.user?.accessToken);
    const result = await getUserDetails(fetchedUser?._id);
    await store.dispatch(loggedUser(result));
  }
);

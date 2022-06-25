import { getSession } from "next-auth/react";
import { useState } from "react";
import { toast } from 'react-toastify';
import MainLayout from "../../layout/MainLayout";
import { getUserDetails, uploadImage } from "../../store/apicall/userCalls";
import { loggedUser } from "../../store/slice/userSlice";
import { wrapper } from "../../store/store";
import { loadUser } from "../../util/tokenLoad";
import { useSelector } from "react-redux";
import axios from 'axios';

export default function ProfileSettings() {
  const { loggedInUser: { _id, imageUrl } } = useSelector(state => state.users);
  const [img, setImg] = useState(imageUrl && imageUrl);
  const [loading, setLoading] = useState(false);
  const [filepath, setFilePath] = useState('');
  const handleUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImg(URL.createObjectURL(img));
      setFilePath(event.target.files[0]);
    }
  }
  const submitImage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const body = new FormData();
      body.append("file", filepath);
      body.append("_id", _id);
      const result = await axios.post('/api/sanity/upload', body)
      if (result) {
        setLoading(false);
        toast.success("Profile Picture Updated!")
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Error Updating Profle Picture")
    }
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
              encType="multipart/form-data"
              onSubmit={submitImage}
              className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
            >
              <fieldset className="py-6 rounded-md shadow-sm bg-white lg:px-24 pt-10 pb-10">
                <div className="space-y-2 col-span-full mb-8">
                  <p className="font-medium text-lg">Profile Settings</p>
                  <p className="text-base text-gray-800">
                    Change your profile picture display
                  </p>
                </div>

                <div className="relative  w-full md:w-[30%] mx-auto">
                  <div className="bg-[#F7F6F4] rounded-full  w-48 h-48 mx-auto">
                    <img src={img} alt="profile_img" className="rounded-full w-full h-full" />
                  </div>
                  <div className="flex justify-center absolute inset-x-7 top-[9.8rem] ">
                    <label
                      htmlFor="image"
                      className="p-2 h-12 w-12 flex items-center justify-center bg-[#247bf4] text-white rounded-full"
                    >
                      <i className="ri-camera-switch-line text-2xl"></i>
                    </label>
                    <input id="image" type="file" name="file" className="mx-auto hidden" onChange={handleUpload} />
                  </div>
                </div>
                <button className="bg-[#247bf4] py-2 px-12 rounded-md text-white text-base">{loading ? "Processing" : "Update"}</button>
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

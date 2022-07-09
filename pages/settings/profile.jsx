import { getSession } from "next-auth/react";
import { useState } from "react";
import { toast } from 'react-toastify';
import MainLayout from "../../layout/MainLayout";
import { allMessages, getUserDetails, uploadImage } from "../../store/apicall/userCalls";
import { allMyMessages, loggedUser } from "../../store/slice/userSlice";
import { wrapper } from "../../store/store";
import { loadUser } from "../../util/tokenLoad";
import { useSelector } from "react-redux";
import axios from 'axios';

export default function ProfileSettings() {
  const { loggedInUser: { _id, imageUrl } } = useSelector(state => state.users);
  const [img, setImg] = useState(imageUrl && imageUrl);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageType, setImageType] = useState('');
  const [filepath, setFilePath] = useState('');
  const handleUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImg(URL.createObjectURL(img));
      setFilePath(event.target.files[0]);
      setShowModal(false)
    }
  }
  const submitImage = async (e) => {
    e.preventDefault();
    if (!filepath) return toast.error('Kindly Select An Image')
    setLoading(true);
    try {
      const body = new FormData();
      body.append("file", filepath);
      body.append("_id", _id);
      if (imageType === 'userImage') {
        const result = await axios.post('/api/sanity/upload', body)
        setLoading(false);
        toast.success("Picture Updated!")

      } else {
        const result = await axios.post('/api/sanity/header', body)
        setLoading(false);
        toast.success("Picture Updated!")
      }

    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Error Updating Profle Picture")
    }
  }
  return (
    <MainLayout>
      <div className="h-full">
        <div>
          <section className="py-6 px-5 h-full">
            <p className="text-gray-700 dark:text-white text-2xl font-bold mt-5 mb-6">
              Settings
            </p>
            <form
              encType="multipart/form-data"
              onSubmit={submitImage}
              className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
            >
              <fieldset className="py-6 rounded-md shadow-sm bg-white dark:bg-[#1F2937] lg:px-24 pt-10 pb-10">
                <div className="space-y-2 col-span-full mb-8">
                  {/* <p className="font-medium text-lg">Profile Settings</p> */}
                  <p className="text-base text-gray-800">
                    Change your profile picture display
                  </p>
                </div>

                <div className="relative  w-full md:w-[30%] mx-auto">
                  <div className="bg-[#F7F6F4] rounded-full  w-48 h-48 mx-auto">
                    <img src={img} alt="profile_img" className="rounded-full w-full h-full" />
                  </div>
                  <div className="flex justify-center absolute inset-x-7 top-[9.8rem] " onClick={() => setShowModal(!showModal)}>
                    <label
                      className="p-2 h-12 w-12 flex items-center justify-center bg-[#247bf4] text-white rounded-full"
                    >
                      <i className="ri-camera-switch-line text-2xl"></i>
                    </label>
                  </div>
                  {
                    showModal && <div className={`absolute left-24   bottom-32 md:bottom-auto z-20   mt-5 overflow-hidden bg-white rounded-md shadow-2xl dark:bg-gray-800`}>
                      <label htmlFor="image" className='block py-3 cursor-pointer px-4 hover:bg-gray-200 dark:hover:bg-[#333d4c] dark:text-white text-gray-500' onClick={() => setImageType('headerImage')}> Backdrop Image
                        <input id="image" type="file" name="file" className="hidden" onChange={handleUpload} />
                      </label>
                      <label htmlFor="images" className='block py-3  px-4 cursor-pointer dark:hover:bg-[#333d4c] hover:bg-gray-200 dark:text-white  text-gray-500' onClick={() => setImageType('userImage')}>Profile Picture
                        <input id="images" type="file" name="file" className="hidden" onChange={handleUpload} />
                      </label>

                    </div>
                  }
                </div>
                <div className="flex items-center w-full justify-center mt-8">
                  <button className="bg-[#247bf4] py-2 mt-4  px-12 rounded-md text-white text-base">{loading ? "Processing..." : "Update"}</button>
                </div>
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </MainLayout >
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    const session = await getSession({ req })
    const fetchedUser = await loadUser(session?.user?.accessToken);
    const allMessage = await allMessages(fetchedUser?._id);
    await store.dispatch(allMyMessages(allMessage));
    const result = await getUserDetails(fetchedUser?._id);
    await store.dispatch(loggedUser(result));
  }
);

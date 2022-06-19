import { useEffect, useState } from "react";
import Navbar from "../components/userdashboard/Navbar";
import Sidebar from "../components/userdashboard/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import sanityClient from "../store/apicall/sanityInit";
function MainLayout({ children }) {
  const [show, setShow] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  // f420ddb9-250f-4ccb-9e0e-9152daf87d8a
  const getUserDetails = async (id) => {
    const data = await sanityClient.fetch(
      `*[_type == 'user' && _id == "${id}"]{..., "imageUrl": userImage.asset->url, "headerUrl": headerImage.asset->url}[0]`
    );
    console.log(data);
    return data;
  };
  useEffect(() =>  {
    console.log(status, "status")
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [session]);

  useEffect(()=> async ()=> {
    const res = await getUserDetails("f420ddb9-250f-4ccb-9e0e-9152daf87d8a");
    console.log(res, "testeed test")
  },[])

  return (
    <div className="md:bg-[#F7F6F4] md:p-8 flex gap-x-12 h-screen md:h-full w-full">
      <Sidebar closeSidebar={setShow} show={show} />
      <div className="w-full h-full  md:ml-[250px]">
        <Navbar />
        <div
          className="p-4 md:hidden flex items-center z-50 fixed bottom-[10%] right-[2%] bg-blue-600 rounded-full"
          onClick={() => setShow(!show)}
        >
          <i
            className={`${show ? "ri-close-line" : "ri-menu-5-line"
              } text-white  font-bold text-3xl`}
          ></i>
        </div>
        <main className="w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;

import React from "react";
import ChevronIcon from "../../components/icons/Chevron";
import Link from "next/link";
import MainLayout from "../../layout/MainLayout";
import { getSession } from "next-auth/react";
import { wrapper } from "../../store/store";
import { loadUser } from "../../util/tokenLoad";
import { loggedUser } from "../../store/slice/userSlice";
import { getUserDetails } from "../../store/apicall/userCalls";
const settings = [
  {
    title: "Personal Information",
    icon: <i className="ri-user-line"></i>,
    link: "/settings/account",
  },
  {
    title: "Password/Security",
    icon: <i className="ri-fingerprint-2-line"></i>,
    link: "/settings/password",
  },
  {
    title: "Profile Photo",
    icon: <i className="ri-user-smile-line"></i>,
    link: "/settings/profile",
  },
  {
    title: "Notifications",
    icon: <i className="ri-notification-3-line"></i>,
    link: "/settings/notifications",
  },
];
export default function index() {
  return (
    <MainLayout>
      <div className=" min-h-screen">
        <div className=" mx-auto px-8 ">
          <p className="text-gray-700 text-2xl ddark:text-gray-300 font-bold mt-5 mb-6">Settings</p>
          <div className=" bg-white dark:bg-transparent rounded-xl mt-5  lg:px-24 py-12 ">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Customise the look and feel of your application
            </p>
            {settings.map((setting, index) => (
              <Link key={index} href={setting.link}>
                <a>
                  <div
                    key={setting}
                    className="flex justify-between items-center border dark:border-none dark:bg-[#1F2937]  rounded-lg w-100 py-4 px-8 mb-4 text-gray-600"
                  >
                    <div className="flex gap-3 dark:text-gray-300 items-center">
                      <div className="flex items-center text-xl dark:text-white justify-center dark:bg-transparent shadow-2xl bg-blue-50 rounded w-12 h-12">
                        {setting.icon}
                      </div>
                      {setting.title}
                    </div>
                    <ChevronIcon />
                  </div>
                </a>
              </Link>
            ))}
          </div>
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

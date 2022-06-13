import React from "react";
import ChevronIcon from "../../components/icons/Chevron";
import Link from "next/link";
const settings = [
  {
    title: "Personal Inormation",
    icon: <i class="ri-user-line"></i>,
    link: "/settings/account",
  },
  {
    title: "Password/Security",
    icon: <i class="ri-fingerprint-2-line"></i>,
    link: "/settings/password",
  },
  {
    title: "Profile Photo",
    icon: <i class="ri-user-smile-line"></i>,
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
    <div className=" min-h-screen">
      <div className=" mx-auto px-8 ">
        <p className="text-gray-700 text-2xl font-bold mt-5 mb-6">Settings</p>
        <div className=" bg-white rounded mt-5 px-4 lg:px-24 py-12 ">
          <p className="text-gray-600 mb-4">
            Customise the look and feel of your application
          </p>
          {settings.map((setting, index) => (
            <Link href={setting.link}>
              <a>
                <div
                  key={setting}
                  className="flex justify-between items-center border rounded-lg w-100 py-4 px-8 mb-4 text-gray-600"
                >
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center justify-center bg-blue-50 rounded w-12 h-12">
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
  );
}
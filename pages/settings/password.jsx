import React from "react";
import MainLayout from "../../layout/MainLayout";

export default function PasswordSettings() {
  return (
    <MainLayout>
      <div>
        <div>
          <section className="p-6">
            <p className="text-gray-700 text-2xl font-bold mt-5 mb-6">
              Settings
            </p>
            <form
              novalidate=""
              action=""
              className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
            >
              <fieldset className="p-6 rounded-md shadow-sm bg-white lg:px-24 pt-10 pb-10">
                <div className="space-y-2 col-span-full mb-6">
                  <p className="font-medium">Password Settings</p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Adipisci fuga autem eum!
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full ">
                    <label for="currentPassword" className="text-sm">
                      Enter Current Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="******"
                      className="w-full p-3 rounded-md bg-[#F7F6F4]"
                    />
                  </div>
                  <div className="col-span-full ">
                    <label for="newPassword" className="text-sm">
                      Enter New Password
                    </label>
                    <input
                      id="newpassword"
                      type="password"
                      placeholder="******"
                      className="w-full p-3 rounded-md bg-[#F7F6F4]"
                    />
                  </div>
                  <div className="col-span-full ">
                    <label for="email" className="text-sm">
                      Enter Verification Email
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        name="vcode"
                        id="vcode"
                        placeholder="******"
                        className="w-full p-3 rounded-md bg-[#F7F6F4]"
                      />
                      <span className="flex items-center px-2  whitespace-nowrap text-white rounded-r-md bg-[#247bf4]">
                        Send Code
                      </span>
                    </div>
                  </div>

                  <div className="col-span-full justify-center mt-4">
                    <button className="py-2 w-full text-white bg-[#247bf4] rounded">
                      submit
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

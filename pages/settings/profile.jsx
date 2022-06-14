import React from "react";
import MainLayout from "../../layout/MainLayout";

export default function ProfileSettings() {
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
                  <p className="font-medium">Profile Settings</p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Adipisci fuga autem eum!
                  </p>
                </div>

                <div className="bg-[#F7F6F4]  w-56 h-56 mx-auto">
                  <img className="rounded-lg" src="/avatar.png" alt="" />
                </div>
                <div className="flex justify-center mt-4">
                  <label
                    htmlFor="image"
                    className="px-12 bg-[#247bf4] text-white rounded-full"
                  >
                    change
                  </label>
                  <input id="image" type="file" className="mx-auto hidden" />
                </div>

                {/* <button className="">change</button> */}
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

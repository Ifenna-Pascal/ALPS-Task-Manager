import React from "react";

export default function Account() {
  return (
    <div>
      <div>
        <section className="p-6">
          <p className="text-gray-700 text-2xl font-bold mt-5 mb-6">Settings</p>
          <form
            novalidate=""
            action=""
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <fieldset className="p-6 rounded-md shadow-sm bg-white lg:px-24 pt-10 pb-10">
              <div className="space-y-2 col-span-full mb-6">
                <p className="font-medium">Personal Inormation</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Adipisci fuga autem eum!
                </p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label for="firstname" className="text-sm">
                    First name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    placeholder="First name"
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="lastname" className="text-sm">
                    Last name
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Last name"
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="email" className="text-sm">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="phone"
                    placeholder="phone"
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full">
                  <label for="address" className="text-sm">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder=""
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label for="city" className="text-sm">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder=""
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label for="state" className="text-sm">
                    State / Province
                  </label>
                  <input
                    id="state"
                    type="text"
                    placeholder=""
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label for="zip" className="text-sm">
                    ZIP / Postal
                  </label>
                  <input
                    id="zip"
                    type="text"
                    placeholder=""
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  />
                </div>
                <div className="col-span-full">
                  <label for="bio" className="text-sm">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    placeholder=""
                    className="w-full p-3 rounded-md bg-[#F7F6F4]"
                  ></textarea>
                </div>

                <div className="col-span-full justify-center">
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
  );
}

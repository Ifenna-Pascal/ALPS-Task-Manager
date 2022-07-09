export default function PasswordSettings() {

  // const form = useState()
  return (
      <div className='md:max-w-[70%] max-w-full   mx-auto'>
        <div className="mt-12"> 
          <section className="p-6">
            <form
              noValidate=""
              action=""
              className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
            >
              <fieldset className="p-6 rounded-md shadow-sm bg-white lg:px-24 pt-10 pb-10">
                <div className="space-y-2 col-span-full mb-6">
                  <p className="font-medium">Password Settings</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  {/* <div className="col-span-full ">
                    <label htmlFor="currentPassword" className="text-sm">
                      Enter Current Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="******"
                      className="w-full p-3 rounded-md bg-[#F7F6F4]"
                    />
                  </div> */}
                 
                  <div className="col-span-full ">
                    <label htmlFor="email" className="text-sm">
                      Enter Verification Email
                    </label>
                    <div className="flex">
                      <input
                        type="email"
                        name="email"
                        id="vcode"
                        placeholder="mail@mail.com"
                        className="w-full p-3 rounded-md bg-[#F7F6F4]"
                      />
                      {/* <span className="flex items-center px-2  whitespace-nowrap text-white rounded-r-md bg-[#247bf4]">
                        Send Code
                      </span> */}
                    </div>

                  </div>
                  <div className="col-span-full ">
                    <label htmlFor="newPassword" className="text-sm">
                      Enter New Password
                    </label>
                    <input
                      id="newpassword"
                      type="password"
                      placeholder="******"
                      className="w-full p-3 rounded-md bg-[#F7F6F4]"
                    />
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
  );
}

 

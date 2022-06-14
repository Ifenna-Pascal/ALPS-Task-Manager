import React from "react";
import Toggle from "../../components/userdashboard/Toggle";
import MainLayout from "../../layout/MainLayout";

export default function NotificationSettings() {
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
                  <p className="font-medium">Notification Settings</p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Adipisci fuga autem eum!
                  </p>
                </div>

                {/* Settings Starts */}
                <div className="divide-y">
                  <div className="flex justify-between items-center pt-3 pb-8">
                    <div>
                      <p className="font-bold text-gray-700">Comments</p>
                      <p className="text-sm ">
                        These are notifications for comments on your tasks and
                        replies to your comment
                      </p>
                    </div>
                    <div>
                      <div>
                        <Toggle />
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex justify-between items-center pt-3 pb-8">
                    <div>
                      <p className="font-bold text-gray-700">Tags</p>
                      <p className="text-sm ">
                        These are notifications for when someone Tag you in a
                        comment.
                      </p>
                    </div>
                    <div>
                      <div>
                        <Toggle />
                      </div>
                    </div>
                  </div>
                  {/* Reminder */}
                  <div className="flex justify-between items-center pt-3 pb-8">
                    <div>
                      <p className="font-bold text-gray-700">Reminders</p>
                      <p className="text-sm ">
                        These are notifications to remind about task ypu are yet
                        to do
                      </p>
                    </div>
                    <div>
                      <div>
                        <Toggle />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Settings Ends */}
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

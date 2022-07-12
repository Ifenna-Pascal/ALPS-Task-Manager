import { getSession } from "next-auth/react";
import React from "react";
import Toggle from "../../components/userdashboard/Toggle";
import MainLayout from "../../layout/MainLayout";
import { allMessages, getUserDetails } from "../../store/apicall/userCalls";
import { allMyMessages, loggedUser, userDetails } from "../../store/slice/userSlice";
import { wrapper } from "../../store/store";
import { loadUser } from "../../util/tokenLoad";

export default function NotificationSettings() {
  return (
    <MainLayout>
      <div>
        <div>
          <section className="p-6">
            <p className="text-gray-700 dark:text-gray-300 text-2xl font-bold mt-5 mb-6">
              Settings
            </p>
            <form
              noValidate=""
              action=""
              className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
            >
              <fieldset className="p-6 rounded-md shadow-sm bg-white dark:bg-[#1F2937]  lg:px-24 pt-10 pb-10">
                <div className="space-y-2 col-span-full mb-6">
                  <p className="font-medium dark:text-gray-300">Notification Settings</p>
                  <p className="text-xs dark:text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Adipisci fuga autem eum!
                  </p>
                </div>

                {/* Settings Starts */}
                <div className="divide-y dark:divide-gray-500">
                  <div className="flex justify-between items-center pt-3 pb-8">
                    <div>
                      <p className="font-bold text-gray-700 dark:text-gray-300">Comments</p>
                      <p className="text-sm dark:text-gray-300 ">
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
                      <p className="font-bold dark:text-gray-300 text-gray-700">Tags</p>
                      <p className="text-sm dark:text-gray-300">
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
                      <p className="font-bold dark:text-gray-300 text-gray-700">Reminders</p>
                      <p className="text-sm dark:text-gray-300 ">
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    const session = await getSession({ req })
    const fetchedUser = await loadUser(session?.user?.accessToken);
    const result = await getUserDetails(fetchedUser?._id);
    const allMessage = await allMessages(fetchedUser?._id);
    await store.dispatch(allMyMessages(allMessage));
    await store.dispatch(loggedUser(result));
    await store.dispatch(userDetails(result));
  }
);
import React from "react";
import CompletedTask from "../../components/userdashboard/tasks/CompletedTask";
import InProgress from "../../components/userdashboard/tasks/InProgress";
import PendingTask from "../../components/userdashboard/tasks/PendingTask";
import MainLayout from "../../layout/MainLayout";
import { allMessages, allTasks, getUserDetails } from "../../store/apicall/userCalls";
import { allMyMessages, filterTasks, loggedUser } from "../../store/slice/userSlice";
import { wrapper } from "../../store/store";
import { getSession } from 'next-auth/react';
import { loadUser } from "../../util/tokenLoad";

function Tasks() {
  return (
    <MainLayout>
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-[95%] mx-auto lg:grid-cols-3 sticky lg:h-[calc(100vh-7rem)] contains overflow-scroll my-8 gap-x-4">
        <div className="md:hidden flex mb-4 items-center">
          <i className="ri-layout-2-fill text-2xl mr-2 text-gray-600"></i>
          <span className="text-gray-700 font-Poppins font-[500] text-[20px] leading-[24px]">
            My Tasks
          </span>
        </div>
        <PendingTask />
        <InProgress />
        <CompletedTask />
      </div>
    </MainLayout>
  );
}

export default Tasks;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res }) => {
    const session = await getSession({ req })
    const fetchedUser = await loadUser(session?.user?.accessToken);
    const allTask = await allTasks(fetchedUser?._id);
    const result = await getUserDetails(fetchedUser?._id);
    const allMessage = await allMessages(fetchedUser?._id);
    await store.dispatch(allMyMessages(allMessage));
    await store.dispatch(loggedUser(result));
    await store.dispatch(filterTasks(allTask));
  }
);

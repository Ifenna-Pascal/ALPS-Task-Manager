import Dashboard from "../components/userdashboard/home/Dashboard";
import {
  getUserDetails,
  getUserTasks,
  allTasks,
  allMessages,
} from "../store/apicall/userCalls";
import { wrapper } from "../store/store";
import {
  userDetails,
  addCurrentTask,
  filterTasks,
  loggedUser,
  allMyMessages,
} from "../store/slice/userSlice";
import MainLayout from "../layout/MainLayout";
import { getSession } from 'next-auth/react';
import { loadUser } from "../util/tokenLoad";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({req,res}) => {
    const session = await getSession({req})
    console.log('sessionss');
    const fetchedUser = await loadUser(session?.user?.accessToken);
    const result = await getUserDetails(fetchedUser?._id);
    const currentTask = await getUserTasks(fetchedUser?._id);
    const allTask = await allTasks(fetchedUser?._id);
    const allMessage = await allMessages(fetchedUser?._id);
    await store.dispatch(filterTasks(allTask));
    await store.dispatch(loggedUser(result));
    await store.dispatch(userDetails(result));
    await store.dispatch(allMyMessages(allMessage));
    await store.dispatch(addCurrentTask(currentTask));
  }
);

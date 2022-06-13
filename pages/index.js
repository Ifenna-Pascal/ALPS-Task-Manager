import Dashboard from "../components/userdashboard/home/Dashboard";
import {
  getUserDetails,
  getUserTasks,
  allTasks,
} from "../store/apicall/userCalls";
import { wrapper } from "../store/store";
import { userDetails, addCurrentTask, filterTasks } from "../store/slice/userSlice";

export default function Home() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res = await getUserDetails();
    const currentTask = await getUserTasks();
    const allTask = await allTasks();
    await store.dispatch(filterTasks(allTask));
    await store.dispatch(userDetails(res));
    await store.dispatch(addCurrentTask(currentTask));
  }
);

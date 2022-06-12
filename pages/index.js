import Dashboard from "../components/userdashboard/home/Dashboard";
import { useEffect } from "react";
import { getUserDetails, getUserTasks, allTasks } from "../store/apicall/userCalls";
import { wrapper } from "../store/store";
import { userDetails, addCurrentTask } from "../store/slice/userSlice";

export default function Home() {
  useEffect(()=> async() => {
    const all = await  allTasks();
    console.log(all)
  })
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
    await store.dispatch(userDetails(res));
    await store.dispatch(addCurrentTask(currentTask))
  }
);

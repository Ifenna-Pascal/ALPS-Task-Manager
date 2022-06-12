import PieChart from "./Chart";
import CurrentTask from "./CurrentTask";
import Messages from "./Messages";
import User from "./User";
import { useSelector } from "react-redux";

function Dashboard() {
  const { currentTask } = useSelector((state) => state.users);

  return (
    <div className="lg:my-8 grid grid-cols-1 lg:grid-cols-7  lg:h-[calc(100vh-7rem)] lg:grid-rows-5 gap-y-8 lg:gap-8">
      <div className="lg:col-span-3 h-[300px]  col-span-1 lg:row-span-2">
        <User />
      </div>
      <div className="lg:col-start-4 -mt-12  md:-mt-0 lg:row-span-3 lg:col-span-4 ">
        <CurrentTask
          type="current"
          duration={currentTask ? currentTask.endDate : "...."}
          deadline={currentTask ? currentTask.startDate : "...."}
          header={currentTask ? currentTask.taskName : "..."}
          content={
            currentTask
              ? currentTask.taskDescription?.slice(0, 300) + "..."
              : "..."
          }
          id={currentTask && currentTask._id}
          home
        />
      </div>
      <div className="lg:row-start-3 lg:col-span-3 lg:row-span-3 w-full">
        <PieChart pending_task={3} completed_task={4} in_progress={2} />
      </div>
      <div className="lg:row-start-4 lg:col-start-4 lg:col-span-4 lg:row-span-2 w-full">
        <Messages />
      </div>
    </div>
  );
}

export default Dashboard;

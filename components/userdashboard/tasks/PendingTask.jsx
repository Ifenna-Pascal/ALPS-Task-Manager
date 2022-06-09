import Taskcard from "./Taskcard";
import TaskHeading from "./TaskHeading";
import { useSelector } from "react-redux";

function PendingTask() {
  const {
    pendingTask: { total, tasks },
  } = useSelector((state) => state.users);
  console.log("pending Taks", tasks, total);
  return (
    <div className="mb-4">
      <TaskHeading
        color="bg-blue-400"
        text="Pending"
        total={total && total}
      />
      <div className="md:max-h-screen overflow-scroll contains mb-4">
        {tasks &&
          tasks.length > 0 &&
          tasks.map((x, i) => (
            <Taskcard
              key={i}
              id={x._id}
              header={x.taskName}
              content={x.taskDescription ? x.taskDescription.slice(0, x.taskDescription.length / 2): ''}
              deadline={x.startDate}
              duration={x.endDate}
            />
          ))}
      </div>
    </div>
  );
}

export default PendingTask;

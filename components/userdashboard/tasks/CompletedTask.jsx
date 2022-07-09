import Taskcard from "./Taskcard";
import TaskHeading from "./TaskHeading";
import { useSelector } from "react-redux";
import EmptyState from "../../EmptyState";

function CompletedTask() {
  const {
    completedTask: { total, tasks }
  } = useSelector((state) => state.users);
  return (
    <div className="mb-4">
      <TaskHeading
        color="bg-green-400"
        text="Completed"
        total={total && total}
      />
      <div className="max-h-screen overflow-scroll contains mb-4">
        {tasks && tasks.length > 0 ? (
          tasks.map((x, i) => (
            <Taskcard
              key={i}
              id={x._id}
              header={x.taskName}
              content={
                x.taskDescription
                  ? x.taskDescription.slice(0, x.taskDescription.length / 2)
                  : ""
              }
              deadline={x.startDate}
              duration={x.endDate}
            />
          ))
        ) : (
           <EmptyState msg="No Task Completed" />
        )}
      </div>
    </div>
  );
}

export default CompletedTask;

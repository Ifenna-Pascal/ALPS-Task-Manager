import Taskcard from "./Taskcard";
import TaskHeading from "./TaskHeading";
import { useSelector } from "react-redux";
import EmptyState from "../../EmptyState";

function InProgress() {
  const {
    inProgressTask: { total, tasks },
  } = useSelector((state) => state.users);
  console.log(total, tasks, "progress....");
  return (
    <div className="mb-4">
      <TaskHeading
        color="bg-blue-400"
        text="In Progress"
        total={total && total}
      />
      <div className="md:max-h-screen overflow-scroll contains mb-4">
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
           <EmptyState msg="No Task In Progress" />
        )}
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const project = await getFunctionByType("Pending");
//   return { props: project };
// }

export default InProgress;

import React from "react";
import CompletedTask from "../components/userdashboard/tasks/CompletedTask";
import CurrentTask from "../components/userdashboard/tasks/CurrentTask";
import InProgress from "../components/userdashboard/tasks/InProgress";
import PendingTask from "../components/userdashboard/tasks/PendingTask";

function Tasks() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 max-w-[95%] mx-auto lg:grid-cols-4 sticky lg:h-[calc(100vh-7rem)] contains overflow-scroll my-8 gap-x-4">
      <PendingTask />
      <InProgress />
      <CurrentTask />
      <CompletedTask />
    </div>
  );
}

export default Tasks;

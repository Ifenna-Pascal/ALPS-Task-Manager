import React from "react";
import Taskcard from "./Taskcard";
import TaskHeading from "./TaskHeading";

function PendingTask() {
  return (
    <div className="mb-4">
      <TaskHeading color="bg-blue-400" text="Pending" total={4} />
      <div className="max-h-screen overflow-scroll contains mb-4">
        <Taskcard
          header="Wireframe Landing Page"
          content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical "
          deadline="May 30"
          duration="12 Days"
        />
        <Taskcard
          header="Wireframe Landing Page"
          content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical "
          deadline="May 30"
          duration="12 Days"
        />
        <Taskcard
          header="Wireframe Landing Page"
          content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical "
          deadline="May 30"
          duration="12 Days"
        />
        {/* <Taskcard
          header="Wireframe Landing Page"
          content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical "
          deadline="May 30"
          duration="12 Days"
        /> */}
        {/* <Taskcard
          header="Wireframe Landing Page"
          content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical "
          deadline="May 30"
          duration="12 Days"
        /> */}
      </div>
    </div>
  );
}

export default PendingTask;

import React, { useEffect, useState } from "react";
import { getFunctionByType } from "../../../util/projects";
import Taskcard from "./Taskcard";
import TaskHeading from "./TaskHeading";

function CurrentTask() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const project = getFunctionByType("current");
    setProjects(project);
  }, []);
  return (
    <div className="mb-4">
      <TaskHeading
        color="bg-blue-400"
        text="Current"
        total={projects && projects.length}
      />
      <div className="md:max-h-screen overflow-scroll contains mb-4">
        {projects &&
          projects.length > 0 &&
          projects.map((x, i) => (
            <Taskcard
              key={i}
              id={x.id}
              header={x.name}
              content={x.content}
              deadline={x.deadline}
              duration={x.duration}
            />
          ))}
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const project = await getFunctionByType("Pending");
//   return { props: project };
// }

export default CurrentTask;

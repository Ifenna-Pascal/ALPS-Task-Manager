import React from "react";
import CurrentTask from "../../components/userdashboard/home/CurrentTask";
import Taskcard from "../../components/userdashboard/tasks/Taskcard";
import EmptyState from "../../components/EmptyState";
import { useRouter } from "next/router";
import {
  allTasks,
  filteredTasks,
  oneUserTask,
} from "../../store/apicall/userCalls";
import MainLayout from "../../layout/MainLayout";
function OneProject({ project, tasks }) {
  const router = useRouter();
  return (
    <MainLayout>
      <div className="flex lg:h-[calc(100vh-7rem)]  flex-col">
        <div className="flex px-6 items-center my-8">
          <div className="text-xl text-[#E74141]"></div>
          <i
            className="ri-arrow-left-line mr-1"
            onClick={() => router.push("/mytasks")}
          ></i>
          <span className="text-gray-700 font-Poppins font-[400] text-[20px] leading-[24px]">
            Back
          </span>
        </div>
        <CurrentTask
          header={project.taskName}
          type={project.taskProgress}
          content={project.taskDescription}
          deadline={project.startDate}
          duration={project.endDate}
        />
        <div className="flex px-6 items-center">
          <span className={`p-[0.35rem] bg-blue-400  mr-2 rounded-full`}></span>
          <span className="my-8 font-Roboto capitalize  text-gray-700 text-2xl font-semibold">
            Related {project.type} Task
          </span>
        </div>
        <div className="flex flex-col w-full md:flex-row px-6 md:space-x-6 items-center">
          {tasks && tasks.length > 0 ? (
            tasks.map((x, i) => (
              <Taskcard
                key={i}
                id={x._id}
                header={x.taskName}
                content={project.taskDescription}
                deadline={project.startDate}
                duration={project.endDate}
              />
            ))
          ) : (
            <EmptyState msg="No Related Task Found" />
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default OneProject;

export async function getStaticPaths() {
  const projects = await allTasks();
  const paths = projects.map((x) => ({
    params: { id: x._id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = await oneUserTask(params.id);
  const tasks = await filteredTasks(project._id, project.taskProgress);
  return { props: { project, tasks } };
}

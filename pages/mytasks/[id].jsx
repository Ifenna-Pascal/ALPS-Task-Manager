import React from "react";
import CurrentTask from "../../components/userdashboard/home/CurrentTask";
import Taskcard from "../../components/userdashboard/tasks/Taskcard";
import EmptyState from "../../components/EmptyState";
import { getSession } from 'next-auth/react';
import { useRouter } from "next/router";
import {
  allMessages,
  allTasks,
  filteredTasks,
  getUserDetails,
  oneUserTask,
} from "../../store/apicall/userCalls";
import MainLayout from "../../layout/MainLayout";
import { loadUser } from "../../util/tokenLoad";
import { allMyMessages, loggedUser } from "../../store/slice/userSlice";
import { wrapper } from "../../store/store";
function OneProject({ project, tasks }) {
  const router = useRouter();
  return (
    <MainLayout>
      <div className="flex lg:h-[calc(100vh-7rem)]  flex-col">
        <div className="flex px-6 items-center my-8">
          <div className="text-xl text-[#E74141]"></div>
          <i
            className="ri-arrow-left-line dark:text-gray-200 mr-1"
            onClick={() => router.push("/mytasks")}
          ></i>
          <span className="text-gray-700 dark:text-gray-200 font-Poppins font-[400] text-[20px] leading-[24px]">
            Back
          </span>
        </div>
        <CurrentTask  
          header={project.taskName}
          type={project.taskProgress}
          level={project.taskProgress ==='inProgress' ? 50 : project.taskProgress ==='pending' ? 0 : project.taskProgress ==='done' ? 100 : null}
          content={project.taskDescription}
          deadline={project.startDate}
          duration={project.endDate}
        />
        <div className="flex px-6 items-center">
          <span className={`p-[0.35rem] bg-blue-400  mr-2 rounded-full`}></span>
          <span className="my-8 font-Roboto dark:text-gray-200 capitalize  text-gray-700 text-2xl font-semibold">
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


export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req, res, params }) => {
    const session = await getSession({ req })
      const fetchedUser = await loadUser(session?.user?.accessToken);
      const allMessage = await allMessages(fetchedUser?._id);
      const result = await getUserDetails(fetchedUser?._id);
      await store.dispatch(allMyMessages(allMessage));
      await store.dispatch(loggedUser(result));
      const project = await oneUserTask(params.id);
      const tasks = await filteredTasks(project._id, project.taskProgress,fetchedUser?._id);
      return { props: { project, tasks } };
  }
);
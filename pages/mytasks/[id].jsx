import React from "react";
import CurrentTask from "../../components/userdashboard/home/CurrentTask";
import Taskcard from "../../components/userdashboard/tasks/Taskcard";
import { getAll, getFunctionById } from "../../util/projects";
import {useRouter} from 'next/router';
function OneProject(props) {
  const router = useRouter();
  return (
    <div className="flex lg:h-[calc(100vh-7rem)]  flex-col">
      <div className="flex px-6 items-center my-8" onClick={()=> router.back()}>
        <div className="text-xl text-[#E74141]"></div>
        <i className="ri-arrow-left-line mr-1"></i>  
        <span className="text-gray-700 font-Poppins font-[400] text-[20px] leading-[24px]">
          Back
        </span>
      </div>
      <CurrentTask
        header={props.name}
        type={props.type}
        content={props.content}
        deadline={props.deadline}
        duration={props.duration}
      />
      <div className="flex px-6 items-center">
        <span className={`p-[0.35rem] bg-blue-400  mr-2 rounded-full`}></span>
        <span className="my-8 font-Roboto capitalize  text-gray-700 text-2xl font-semibold">
          Related {props.type} Task
        </span>
      </div>
      <div className="flex flex-col md:flex-row px-6 md:space-x-6 items-center">
        <Taskcard
          id={props.id}
          header={props.name}
          content={props.content}
          deadline={props.deadline}
          duration={props.duration}
        />
        <Taskcard
          id={props.id}
          header={props.name}
          content={props.content}
          deadline={props.deadline}
          duration={props.duration}
        />
        <Taskcard
          id={props.id}
          header={props.name}
          content={props.content}
          deadline={props.deadline}
          duration={props.duration}
        />
      </div>
    </div>
  );
}

export default OneProject;

export async function getStaticPaths() {
  const projects = await getAll();
  const paths = projects.map((x) => ({
    params: { id: x.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = await getFunctionById(params.id);
  return { props: project };
}

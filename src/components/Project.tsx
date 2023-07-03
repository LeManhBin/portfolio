import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectProps {
  id: any;
  name: string;
  backgroundImage: string;
  sourceCode: string;
  demo:string
}

const Project = ({ project }: { project: ProjectProps }) => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-[20px] font-semibold text-gray-500'>{project.name}</h1>
       <div className='flex gap-5 cursor-pointer relative overflow-hidden hover-overlay-card h-[200px] w-[350px] max-sm:w-[300px]' style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
          <div className='bg-black opacity-80 absolute inset-0 w-0 overlay-card flex justify-center items-center overflow-hidden gap-5'>
              <button className='bg-white z-30 opacity-100 px-[10px] py-[5px] font-bold whitespace-nowrap rounded hover:bg-gray-200'>
                <a href={project.sourceCode} target="_blank">
                    Source Code
                </a>
              </button>
              <button className='bg-white z-30 opacity-100 px-[10px] py-[5px] font-bold whitespace-nowrap rounded hover:bg-gray-200'>
                <a href={project.demo} target="_blank">
                    Watch Project
                </a>
              </button>
          </div>
          <img
            src={project.backgroundImage}
            alt="backgroundImage"
            className='w-full h-full object-cover'
          />
      </div>
    </div>
  );
};

export default Project;
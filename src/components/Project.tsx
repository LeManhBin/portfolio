import React from 'react';
import { Button, Popover } from 'antd';

interface ProjectProps {
  id: any;
  name: string;
  type: string;
  teamSize: number;
  position: string;
  backgroundImage: string;
  sourceCode: string;
  demo:string;
  frontEnd: string;
  backEnd: string;
  description: string;
  note: string;
}


const Project = ({ project }: { project: ProjectProps }) => {
  const content = (
    <div className='max-w-[300px] flex flex-col gap-1 border-t-2 pt-1'>
      <p className='font-semibold'>Name: <span className='text-gray-500 font-normal'>{project.name}</span></p>
      <p className='font-semibold'>Type: <span className='text-gray-500 font-normal'>{project.type}</span></p>
      <p className='font-semibold'>Team size: <span className='text-gray-500 font-normal'>{project.teamSize}</span></p>
      <p className='font-semibold'>Position: <span className='text-gray-500 font-normal'>{project.position}</span></p>
      <p className='font-semibold'>Front End: <span className='text-gray-500 font-normal'>{project.frontEnd}</span></p>
      {
        project.backEnd &&
        <p className='font-semibold'>Back End: <span className='text-gray-500 font-normal'>{project.backEnd}</span></p>
      }
      {
        project.description &&
        <p className='font-semibold'>Description: <span className='text-gray-500 font-normal'>{project.description}</span></p>
      }
      {
        project.note &&
        <p className='font-semibold'>Note: <span className='text-red-500 text-[12px] font-normal'>{project.note}</span></p>
      }
    </div>
  );
  return (
    <Popover  content={content} title="Project information">
      <div className='flex flex-col items-center'>
        <h1 className='text-[20px] font-semibold text-gray-500'>{project.name}</h1>
        <div className='flex gap-5 cursor-pointer relative overflow-hidden hover-overlay-card h-[200px] w-[350px] max-sm:w-[300px]' style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <div className='bg-black opacity-80 absolute inset-0 w-0 overlay-card flex justify-center items-center overflow-hidden gap-5'>
                <button className='bg-white z-30 opacity-100 px-[10px] py-[5px] font-bold whitespace-nowrap rounded hover:bg-gray-200'>
                  <a href={project.sourceCode} target="_blank">
                      Source Code
                  </a>
                </button>
                {
                  project.demo &&
                    <button className='bg-white z-30 opacity-100 px-[10px] py-[5px] font-bold whitespace-nowrap rounded hover:bg-gray-200'>
                      <a href={project.demo} target="_blank">
                          Watch Project
                      </a>
                  </button>
                }
            </div>
            <img
              src={project.backgroundImage}
              alt="backgroundImage"
              className='w-full h-full object-cover'
            />
        </div>
      </div>
    </Popover>
  );
};

export default Project;
import React from 'react';
import { Button, Popover } from 'antd';
import {AiFillGithub} from "react-icons/ai"
import {TbWorldCode} from "react-icons/tb"
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
      <p className='font-semibold'>Name: <span className='text-gray-500 font-normal'>{project?.name}</span></p>
      <p className='font-semibold'>Type: <span className='text-gray-500 font-normal'>{project?.type}</span></p>
      <p className='font-semibold'>Team size: <span className='text-gray-500 font-normal'>{project?.teamSize}</span></p>
      <p className='font-semibold'>Position: <span className='text-gray-500 font-normal'>{project?.position}</span></p>
      <p className='font-semibold'>Front End: <span className='text-gray-500 font-normal'>{project?.frontEnd}</span></p>
      {
        project?.backEnd &&
        <p className='font-semibold'>Back End: <span className='text-gray-500 font-normal'>{project?.backEnd}</span></p>
      }
      {
        project?.description &&
        <p className='font-semibold'>Description: <span className='text-gray-500 font-normal'>{project?.description}</span></p>
      }
      {
        project?.note &&
        <p className='font-semibold'>Note: <span className='text-red-500 text-[12px] font-normal'>{project?.note}</span></p>
      }
    </div>
  );
  return (
    <Popover  content={content} title="Project information">
      {/* <div className='flex flex-col items-center'>
        <h1 className='text-[20px] font-semibold text-gray-500'>{project?.name}</h1>
        <div className='flex gap-5 cursor-pointer relative overflow-hidden hover-overlay-card h-[200px] w-[350px] max-sm:w-[300px]' style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <div className='bg-black opacity-80 absolute inset-0 w-0 overlay-card flex justify-center items-center overflow-hidden gap-5'>
                <button className='bg-white z-30 opacity-100 px-[10px] py-[5px] font-bold whitespace-nowrap rounded hover:bg-gray-200'>
                  <a href={project?.sourceCode} target="_blank">
                      Source Code
                  </a>
                </button>
                {
                  project?.demo &&
                    <button className='bg-white z-30 opacity-100 px-[10px] py-[5px] font-bold whitespace-nowrap rounded hover:bg-gray-200'>
                      <a href={project?.demo} target="_blank">
                          Watch Project
                      </a>
                  </button>
                }
            </div>
            <img
              src={project?.backgroundImage}
              alt="backgroundImage"
              className='w-full h-full object-cover'
            />
        </div>
      </div> */}
      <div className="max-w-[350px] min-h-[440px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='h-[45%]'>
            <img className="rounded-t-lg h-full w-full object-cover" src={project?.backgroundImage} alt="" />
        </div>
        <div className="p-5 h-[55%] flex flex-col justify-between">
          <div className=''>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project?.name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
              {project?.description}
            </p>
          </div>
          <div className='flex items-center gap-3 justify-end w-full'>
            <button className='px-3 py-2 text-sm text-center  rounded-lg hover:bg-black focus:ring-4 focus:outline-none text-[#fafafa] bg-[#333] font-semibold'>
              <a href={project?.sourceCode} target="_blank" className='flex items-center gap-1'>
                GitHub <AiFillGithub size={14}/>
              </a>
            </button>
            {
              project?.demo &&
              <button className='px-3 py-2 text-sm text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-semibold'>
                <a href={project?.demo} target="_blank" className='flex items-center gap-1'>
                  Website <TbWorldCode size={14}/>
                </a>
              </button>
            }
          </div>
        </div>
      </div>
    </Popover>
    


  );
};

export default Project;
"use client"
import React, { useEffect, useState } from 'react'
import {PiDevToLogoFill} from 'react-icons/pi'
import { GrClose } from 'react-icons/gr'
import {HiMenuAlt3} from 'react-icons/hi'
import { MdDarkMode, MdOutlineLanguage } from 'react-icons/md'
import {CiLight} from 'react-icons/ci'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setActive] = useState("#")

    const handleActive = (id:string) => {
        setActive(id)
        setIsOpen(false)
    }
    
    
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white h-[80px] border-b'>
        <div className='flex justify-between items-center h-full max-w-[1300px] mx-auto px-[50px] max-sm:px-5 relative'>
            <div className='flex items-center gap-2'>
                <a href="#" className={`flex items-center gap-2`}>
                    <PiDevToLogoFill size={28}/>
                    <span className='font-extrabold text-[20px]'>Mạnh Bin</span>
                </a>
            </div>
            {
                isOpen &&
                <div className='hidden max-md:block fixed inset-0 bg-black opacity-70 w-screen h-screen z-40 ease-in-out duration-500' onClick={() => setIsOpen(false)}></div>
            }
            <ul className={`flex items-center gap-5 font-semibold z-50
            max-md:flex-col max-md:bg-white max-md:fixed max-md:top-0 ${isOpen ? `max-md:right-0` : `max-md:right-[-100%]`} ease-in-out duration-500 max-md:bottom-0 max-md:w-[50%] max-sm:w-[90%] max-md:py-24 max-md:text-[30px] max-md:items-start max-md:pl-[40px]`}>
                <GrClose size={30} className='hidden max-md:block top-[20px] left-[20px] cursor-pointer absolute'  onClick={() => setIsOpen(false)}/>
                <li className='cursor-pointer' onClick={() => handleActive("#")}>
                    <a href="#" className={`${isActive === "#" && "active"} relative`}>Home</a>
                </li>
                <li className='cursor-pointer' onClick={() => handleActive("#experiences")}>
                    <a href="#experiences" className={`${isActive === "#experiences" && "active"} relative`}>Experiences</a>
                </li>
                <li className='cursor-pointer' onClick={() => handleActive("#project")}>
                    <a href="#project" className={`${isActive === "#project" && "active"} relative`}>Project</a>
                </li>
                <li className='cursor-pointer' onClick={() => handleActive("#contact")}>
                    <a href="#contact" className={`${isActive === "#contact" && "active"} relative`}>Contact</a>
                </li>
            </ul>
            <div className='flex items-center gap-5'>
                <div className='flex items-center gap-1 bg-gray-300 px-[10px] py-[5px] rounded-full max-md:hidden'>
                    <MdOutlineLanguage size={20}/>
                    <span className='font-semibold'>Hello, world</span>
                </div>
            </div>
            <HiMenuAlt3 size={30} onClick={() => setIsOpen(true)} className='cursor-pointer hidden max-md:block'/>
        </div>
    </header>
  )
}

export default Header
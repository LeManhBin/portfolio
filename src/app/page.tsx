"use client"
import {useEffect, useState, useRef} from "react"
import {FaFacebookF, FaGithub, FaLinkedinIn, FaLongArrowAltRight, FaNodeJs} from 'react-icons/fa'
import {RiBootstrapFill, RiCss3Fill, RiHtml5Line, RiJavascriptFill, RiReactjsLine} from 'react-icons/ri'
import {BiLogoSass, BiLogoTypescript} from 'react-icons/bi'
import {SiTailwindcss} from 'react-icons/si'
import {TbBrandRedux} from 'react-icons/tb'
import {BsSend} from 'react-icons/bs'
import Project from '@/components/Project';
import { projectData } from '../../projectData'
import Pagination from "@/components/Pagination"
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import {formSchema} from "../config/formSchema";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(2)
  const lastPageIndex = currentPage * limit;
  const firstPageIndex = lastPageIndex - limit;
  const currentItems = projectData.slice(firstPageIndex, lastPageIndex);
  const totalPage = projectData.length;
  const form:any = useRef();
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 1300 && screenWidth > 851) {
        setLimit(4);
      } else if (screenWidth < 850) {
        setLimit(2);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openPdf = () => {
    window.open('/file.pdf', '_blank');
  };

  //validate
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(formSchema)
  })

  const onSubmit = (data: any, e: any) => {
    e.preventDefault();
    sendEmail(e);
    reset()
  };
  
  
  const sendEmail = (e: any) => {
    emailjs
      .sendForm('service_11jf3yw', 'template_cd8op6l', form.current, '98kaYMXUw5ygqkTBt')
      .then(
        (result: any) => {
          toast.success("Submission successful!");
        },
        (error: any) => {
          toast.error("Sorry, an error occurred. Please try again later.");
        }
      );
  };

  return (
    <div className='px-[100px] max-lg:px-[50px] max-sm:px-5'>
        <section className='flex items-center justify-center w-full h-screen max-lg:flex-col-reverse max-lg:items-end max-lg:justify-center max-lg:mb-[10px] max-md:mt-[30px]'>
          <div className='flex flex-col justify-center w-[50%] max-lg:w-full max-lg:items-center max-lg:text-center'>
            <p className='text-[35px] w-[50%] max-lg:text-[30px] max-sm:[20px] max-sm:w-[80%] max-lg:w-full'>
              HI! <span className='font-semibold'>I&apos;m Bin</span>, <span className="">A WEB DEVELOPER</span>
            </p>
            <div className="max-sm:hidden">
              <p className='opacity-80'>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>
              <p className="text-right max-lg:text-center">-Martin Fowler-</p>
            </div>
            <div className='mt-5 max-sm:mt-[10px] flex items-center gap-5 max-sm:gap-[10px] max-sm:flex-col max-sm:justify-center'>
              <button className='max-sm:hidden flex items-center gap-2 px-[14px] py-[7px] bg-black text-white rounded-full'>CONTACT ME <FaLongArrowAltRight/></button>
              <div className='flex items-center gap-5 max-sm:gap-[10px]'>
                <a href='https://github.com/LeManhBin' target="_blank" className='w-[40px] h-[40px] border-[1px] rounded-full flex justify-center items-center cursor-pointer hover-github'>
                  <FaGithub size={20} className='text-[#333] github-icon'/>
                </a>
                <a href='https://www.linkedin.com/in/le-manh-bin/' target="_blank" className='w-[40px] h-[40px] border-[1px] rounded-full flex justify-center items-center cursor-pointer hover-linkedin'>
                  <FaLinkedinIn size={20} className='text-[#0077b5] linkedin-icon'/>
                </a>
                <a href='https://www.facebook.com/bin.lemanh/' target='_blank' className='w-[40px] h-[40px] border-[1px] rounded-full flex justify-center items-center cursor-pointer hover-facebook'>
                  <FaFacebookF size={20} className='text-[#4267B2] facebook-icon'/>
                </a>
              </div>
              <button onClick={openPdf} className='flex items-center gap-2 px-[14px] py-[7px] bg-gray-300 text-white rounded-full'>WATCH MY CV</button>
            </div>
            <div className='mt-5 max-sm:mt-[10px] flex gap-5 max-lg:flex-wrap max-lg:justify-center'>
                <RiReactjsLine size={40} className='text-[#61DBFB]  rotate-css'/>
                <RiHtml5Line size={40} className='text-[#F06529]'/>
                <RiCss3Fill size={40} className='text-[#3C99DC]'/>
                <BiLogoSass size={40} className='text-[#CD6799]'/>
                <RiBootstrapFill size={40} className='text-[#563d7c]'/>
                <SiTailwindcss size={40} className='text-[#63D0E0]'/>
                <RiJavascriptFill size={40} className='text-[#F0DB4F]'/>
                <BiLogoTypescript size={40} className='text-[#0093BF]'/>
                <TbBrandRedux size={40} className='text-[#764abc]'/>
                <FaNodeJs size={40} className='text-[#68A063]'/>
            </div>
          </div>
          <div className='w-[50%] max-lg:w-full max-lg:mb-[20px]'>
            <div className='flex justify-center items-center'>
              <div className='flex justify-center items-center w-[350px] h-[350px] max-lg:w-[250px] max-lg:h-[250px] bg-orange-300 border-radius-custom '>
                <img src="/images/avatar.jpg" alt="avatar" className='w-[250px] h-[250px] max-lg:w-[200px] max-lg:h-[200px] rounded-full object-fill border-[5px] border-white'/>
              </div>
            </div>
          </div>
        </section>
         {/* experiences */}
        {/* <section id='experiences' className='flex flex-col w-full py-[100px] gap-10 h-screen'>
          <div className='flex justify-center w-full'>
            <h1 className='text-[40px] font-semibold whitespace-nowrap'>EXPERIENCES</h1>
          </div>
          
          
        </section> */}
         {/* project */}
        <section id='project' className='flex flex-col w-full py-[100px] gap-10 h-screen'>
          <div className='flex justify-center w-full'>
            <h1 className='text-[40px] font-semibold whitespace-nowrap'>MY PROJECT</h1>
          </div>
          <div className='flex flex-col items-center max-[1300px]:hidden'>
            <div className='flex justify-center gap-5 flex-wrap'>
                {
                  projectData.map((project:any) => {
                    return(
                      <Project key={project.id} project={project}/>
                    )
                  })
                }
            </div>
          </div>
          <div className='flex flex-col items-center min-[1300px]:hidden'>
            <div className='flex justify-center gap-5 flex-wrap'>
                {
                  currentItems.map((project:any) => {
                    return(
                      <Project key={project.id} project={project}/>
                    )
                  })
                }
            </div>
            <div className='mt-5'>
                <Pagination
                currentPage={currentPage}
                limit={limit}
                setCurrentPage={setCurrentPage}
                totalPage={totalPage}
                background={'#AEE2FF'}
              />
            </div>
          </div>
        </section>
        {/* contact */}
        <section id='contact' className='flex flex-col w-full py-[100px] gap-10 h-screen'>
          <div className='flex justify-center w-full'>
            <h1 className='text-[40px] font-semibold'>CONTACT</h1>
          </div>
          <form ref={form} onSubmit={handleSubmit(onSubmit)} className='max-w-[500px] w-[100%] flex flex-col gap-5 mx-auto'>
            <div className='flex items-center flex-wrap justify-between gap-5'>
              <div className='flex flex-col max-sm:w-full'>
                  <label htmlFor="" className='font-semibold'>Your name</label>
                  <input type="text" placeholder='Join Doe' id="user_name" className='px-[10px] py-[5px] outline-none border rounded-[5px]' {...register('user_name')}/>
                  {errors.user_name && <p className='text-[12px] text-red-500'>{errors.user_name.message}</p>}
              </div>
              <div className='flex flex-col max-sm:w-full'>
                <label htmlFor="" className='font-semibold'>Your email</label>
                <input type="email" placeholder='example@gmail.com' id="user_email"  className='px-[10px] py-[5px] outline-none border rounded-[5px]' {...register('user_email')}/>
                {errors.user_email && <p className='text-[12px] text-red-500'>{errors.user_email.message}</p>}
              </div>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='font-semibold'>Subject</label>
                <input type="text" placeholder='Subject here' id="subject"  className='px-[10px] py-[5px] outline-none border rounded-[5px]' {...register('subject')}/>
                {errors.subject && <p className='text-[12px] text-red-500'>{errors.subject.message}</p>}
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='font-semibold'>Message</label>
                <textarea id="message" placeholder='Let me know your opinion' cols={30} rows={7} className='px-[10px] py-[5px] outline-none border rounded-[5px]' {...register('message')}></textarea>
                {errors.message && <p className='text-[12px] text-red-500'>{errors.message.message}</p>}
            </div>
            <button type="submit" value="Send" className='px-[10px] py-[5px] rounded-[5px] bg-black opacity-80 text-white flex items-center justify-center gap-2'>Just Send <BsSend size={15}/></button>
          </form>
        </section>
    </div>
  )
}

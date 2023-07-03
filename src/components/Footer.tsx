import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <>
        <footer className="relative bg-gray-200 pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                <div className="w-full lg:w-6/12 px-4">
                    <h4 className="text-3xl font-semibold text-gray-700">Let&apos;s keep in touch!</h4>
                    <h5 className="text-lg mt-0 mb-2 text-gray-600">
                    Find me on any of these platforms, we respond 1-2 business days.
                    </h5>
                    <div className="mt-6 lg:mb-0 mb-6 flex items-center gap-2">
                        <button className="bg-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <FaFacebookF size={15} className='text-[#4267B2] facebook-icon'/>
                        </button>
                        <button className="bg-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <FaLinkedinIn size={15} className='text-[#0077b5] linkedin-icon'/>
                        </button>
                        <button className="bg-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <FaGithub size={15} className='text-[#333] github-icon'/>
                        </button>
                        <button className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <MdEmail size={15} className='text-red-400 github-icon'/>
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4 ">
                    <div className="flex flex-wrap items-top mb-6">
                        <div className="w-full lg:w-4/12 px-4 ml-auto mb-5">
                            <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">Useful Links</span>
                            <ul className="list-unstyled">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="">About Us</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="">Blog</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="">Github</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="">Free Products</a>
                            </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-4/12 px-4">
                            <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">Other Resources</span>
                            <ul className="list-unstyled">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="">MIT License</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="">Terms &amp; Conditions</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="">Privacy Policy</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="">Contact Us</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                <hr className="my-6 border-gray-400"></hr>
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div className="text-sm text-gray-500 font-semibold py-1">
                    Copyright © <span id="get-current-year">2023</span>
                    <a href="" target='_blank' className="text-gray-500 ml-1 hover:text-gray-800">llemanhbin@gmail.com</a>.
                    </div>
                </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";
import footerlogo from "../../assets/images/logo-yh4yOaug.png";

const FooterLinks = [

    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blogs",
        link: "/#blogs",
    },

];

const Footer = () => {
    return (
        <div className='bg-gray-200 dark:bg-gray-950 '>
            <div className="container">
                <div className="grid md:grid-cols-3 py-4 ">
                    {/*Company Details*/}
                    <div className='py-8'>
                        <h1 className='font-bold text-xl sm:text-3xl sm:text-left text-justify mb-3 '>Books Store</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe hic laborum obcaecati voluptatem? {" "}</p>
                        <br />
                        {/* Social Links */}
                        <div className="flex items-center gap-3 mt-3 ">
                            <FaLocationArrow />
                            <p>Noida, Uttar Pradesh</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3 ">
                            <FaMobileAlt />
                            <p>+92 3123456789</p>
                        </div>
                        <div className='flex justify-start mt-6 gap-3 items-center' >
                            <a href="#">
                                <FaInstagram className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaFacebook className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-3xl" />
                            </a>
                        </div>
                    </div>
                    {/*Links Section*/}

                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10' >

                        <div className='flex justify-around gap-10'>
                            <div className="py-8 px-4">
                                <h1 className='text-xl font-bold sm:text-left text-justify mb-3 '>Important Links</h1>
                                <ul>
                                    {

                                        FooterLinks.map((data) => (

                                            <li className='cursor-pointer hover:translate-x-1 duration-300 py-1  hover:text-purple-600 text-gray-600'>
                                                <span>&#11162;</span>
                                                <span>{data.title}</span>
                                            </li>

                                        ))
                                    }
                                </ul>

                            </div>
                            <div className="py-8 px-4">
                                <h1 className='text-xl font-bold sm:text-left text-justify mb-3 '>Important Links</h1>
                                <ul>
                                    {

                                        FooterLinks.map((data) => (

                                            <li className='cursor-pointer hover:translate-x-1 duration-300 py-1  hover:text-purple-600 text-gray-600 '>
                                                <span>&#11162;</span>
                                                <span>{data.title}</span>
                                            </li>

                                        ))
                                    }
                                </ul>

                            </div>
                            <div className="py-8 px-4">
                                <h1 className='text-xl font-bold sm:text-left text-justify mb-3 '>Important Links</h1>
                                <ul>
                                    {

                                        FooterLinks.map((data) => (

                                            <li className='cursor-pointer hover:translate-x-1 duration-300 py-1  hover:text-purple-600 text-gray-600 '>
                                                <span>&#11162;</span>
                                                <span>{data.title}</span>
                                            </li>

                                        ))
                                    }
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
               {/*Copyright Section */}
               <div className='border-t-2 dark:border-gray-300 border-gray-700 '>
                <div className='text-center py-10'>
                    Copyright © 2025. All rights reserved || Made with ❤️ by SM
                </div>
               </div>
            </div>
        </div>
    )
}

export default Footer;
import { data } from 'autoprefixer';
import React from 'react';
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from './DarkMode';



const Menu = [

    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Seller",
        link: "/#services",
    },


];
const DropdownLinks = [

    {
        name: "Trending Books",
        link: "/#",
    },
    {
        name: "Best Selling",
        link: "/#",
    },
    {
        name: "Authors",
        link: "/#",
    },

];


const Navbar = () => {
    return (
        <div className='shadow-lg bg-white text-black dark:bg-gray-900 dark:text-white duration-200  '  >
            <div className="container p-3 sm:py-0 ">
                <div className="flex justify-between items-center">
                    <div>
                        <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-5' >
                            <img src="https://bookstore-tcj.netlify.app/assets/logo-yh4yOaug.png" alt="" className='w-10' />
                            Books
                        </a>
                    </div>

                    <div className="flex items-center gap-4" >
                        <div>
                            <DarkMode />
                        </div>
                        <ul className='  justify-around gap-10 items-center hidden sm:flex font-semibold ' >
                            {
                                Menu.map((menu) => (
                                    <li>
                                        <a href={menu.link} className="inline-block py-5 px-5 
                        
                        hover:text-purple-600 duration-200" >{menu.name}</a>
                                    </li>
                                ))}
                            {/* Dropdown Section */}
                            <li className=' group relative cursor-pointer ' >
                                <a href="http:/#" className='flex gap-1 items-center' >
                                    Quick Links
                                    <span>
                                        <FaCaretDown className='transition duration-300 group-hover:rotate-180' />
                                    </span>
                                    {/* Dropdown  Links Section */}
                                    <div className='absolute z-[1000px ] top-[100%] right-0 hidden  group-hover:block text-black bg-white p-2 shadow-md w-[150px]  dark:bg-gray-900 dark:text-white   duration-200 ' >
                                        <ul>
                                            {
                                                DropdownLinks.map((data) => (
                                                    <li key={data.id}  className='hover:dark:text-purple-900'  >
                                                        <a href={data.link} className='inline-block w-full rounded-md  p-2  hover:bg-purple-200' >{data.name}</a>
                                                    </li>

                                                ))
                                            }
                                        </ul>
                                    </div>
                                </a>
                            </li>
                         </ul>
                         <button className='bg-gradient-to-r  bg-[#2cb5f5] text-white px-6 py-2 rounded-full flex items-center gap-3  text-xl hover:scale-105 duration-150 '>
                          Order  <FaShoppingCart className='text-2xl  text-white drop-shadow-sm  cursor-pointer' />  </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
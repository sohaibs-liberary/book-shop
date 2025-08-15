import React from 'react'
import LibraryImg from "../../assets/images/library-jI5gRUk5.jpg";
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const Banner = () => {
  return (
   <>
   <div className="container pb-6 py-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
      {/* Image */}
      <div>
      <img src={LibraryImg} alt="" className="max-w-[400px] block mx-auto h-[350px] w-full 
      drop-shadow-[-15px_15px_15px_rgba(0,0,0,1)] object-cover rounded-xl  " />
      </div>
      {/* Text Section */}
      <div  className='flex flex-col justify-center gap-8 sm:pt-0'>
        <h1 className='text-3xl sm:text-4xl font-bold' >Library at your fingertips</h1>
        <p className='text-sm text-gray-500 tracking-wide leading-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam aliquid ipsum placeat ipsa sunt facilis, voluptate necessitatibus ex in aut saepe vero! Hic.</p>
       
      <div className="flex flex-col gap-6  pb-7 ">
        <div className=" flex items-center gap-4">
          <GrSecure 
          className='text-4xl  w-12 h-12 p-4 shadow-sm rounded-full bg-violet-300 dark:bg-violet-400'/>
          <p>Quality Books</p>
        </div>
        <div className=" flex items-center gap-4">
          <GrSecure 
          className='text-4xl  w-12 h-12 p-4 shadow-sm rounded-full bg-green-300 dark:bg-green-400'/>
          <p>Fast Delivery</p>
        </div>
        <div className=" flex items-center gap-4">
          <GrSecure 
          className='text-4xl  w-12 h-12 p-4 shadow-sm rounded-full bg-orange-300 dark:bg-orange-400'/>
          <p>Easy Payment method</p>
        </div>
        <div className=" flex items-center gap-4">
          <GrSecure 
          className='text-4xl  w-12 h-12 p-4 shadow-sm rounded-full bg-yellow-200 dark:bg-yellow-400'/>
          <p>Get offers on books</p>
        </div>
      </div>

      </div> 
    </div>
   </div>
   </>
  )
}

export default Banner
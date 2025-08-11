import React from 'react'
import LibraryImg from "../../assets/images/library-jI5gRUk5.jpg";

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
      <div  className='flex flex-col justify-center gap-8'>
        <h1 className='text-3xl sm:text-4xl font-bold' >Library at your fingertips</h1>
        <p className='text-sm text-gray-500 tracking-wide leading-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam aliquid ipsum placeat ipsa sunt facilis, voluptate necessitatibus ex in aut saepe vero! Hic.</p>
      </div>
    </div>
   </div>
   </>
  )
}

export default Banner
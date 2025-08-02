import React, { useState , useEffect  } from 'react'
import Book1 from "../../assets/images/book2-C96QbsXx.jpg"
import Book2 from "../../assets/images/book1-T1QIvOvc.jpg"
import Book3 from "../../assets/images/book3-5_h1HoKi.jpg"
import Vector from "../../assets/images/blue-pattern-frndFZgs.png"

const Hero = () => {
   
    const[imageid , setImageid] = useState(Book1);
    const[tital , settital] =useState(" His Life will forever be Changed ");
    const[description , setDescription]=useState(" His Whole Life by Elizabeth Hay is a coming-of-age story set in the mid-1990s following a young boy named Jim as his family grapples with a faltering marriage and the political tensions surrounding Quebecs potential separation from Canada.");



  return (
   <>
   <div className='min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center  dark:bg-gray-950 dark:text-white duration-200  ' >
    <div className="cointerner pb-8 sm:pb-0 ">
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/*text-content-section*/}
            <div className='px-10'>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold ' >
                  {tital}
                    <p className='bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-500 text-right  text-sm '  > by Anonymous</p>

                </h1>
                <p className='text-sm' >
                {description}
                </p>
                <div className=''>
                    <button className='bg-gradient-to-r from-purple-700 to-pink-400 text-white py-3  px-7 rounded-full my-3 text-xl hover:scale-105 duration-200 mt-4 '>Order Now</button>
                </div>
            </div>
            {/* Image section */}
            <div className='min-h-[450px] flex justify-center itme-center order-1 sm:order-2' >
                <div className="h-[300px ] sm:h-[450px] overflow-hidden flex justify-center  items-center"> 
                    <img src={Book1} alt="" width="300px" />
                </div>

            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Hero
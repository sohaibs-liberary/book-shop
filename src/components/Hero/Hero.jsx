import React from 'react'

const Hero = () => {
  return (
   <>
   <div className='min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center  dark:bg-gray-950 dark:text-white duration-200  ' >
    <div className="cointerner pb-8 sm:pb-0 ">
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/*text-content-section*/}
            <div className='px-10'>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold ' >
                    His Life will forever be Changed
                    <p className='bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-500 text-right  text-sm '  > by Anonymous</p>

                </h1>
                <p className='text-sm' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos porro, aperiam quis dolorum exercitationem veniam at quod architecto cupiditate temporibus culpa. Autem!
                </p>
                <div className=''>
                    <button className='bg-gradient-to-r from-purple-700 to-pink-400 text-white py-3  px-7 rounded-full my-3 text-xl hover:scale-105 duration-200 mt-4  ' >Order Now</button>
                </div>
            </div>
            {/* Image section */}
            <div className='min-h-[450px] flex justify-center itme-center order-1 sm:order-2' >

            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Hero
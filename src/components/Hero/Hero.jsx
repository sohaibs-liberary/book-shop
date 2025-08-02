import React from 'react'

const Hero = () => {
  return (
   <>
   <div className='min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center  dark:bg-gray-950 dark:text-white duration-200  ' >
    <div className="cointerner pb-8 sm:pb-0 ">
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/*text-content-section*/}
            <div className=''>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold' >
                    His Life will forever be Changed
                    <p className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500' > by Anonymous</p>

                </h1>
                <p className='text-sm' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos porro, aperiam quis dolorum exercitationem veniam at quod architecto cupiditate temporibus culpa. Autem!
                </p>
            </div>
            {/* Image section */}

            <div></div>
            <div></div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Hero
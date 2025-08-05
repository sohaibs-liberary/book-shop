import React, { useState, useEffect } from 'react'
import Book1 from "../../assets/images/book2-C96QbsXx.jpg"
import Book2 from "../../assets/images/book1-T1QIvOvc.jpg"
import Book3 from "../../assets/images/book3-5_h1HoKi.jpg"
import Vector from "../../assets/images/blue-pattern-frndFZgs.png"

const Hero = () => {

    const [imageid, setImageid] = useState(Book1);
    const [tital, setTital] = useState(" His Life will forever be Changed ");
    const [description, setDescription] = useState(" His Whole Life by Elizabeth Hay is a coming-of-age story set in the mid-1990s following a young boy named Jim as his family grapples with a faltering marriage and the political tensions surrounding Quebecs potential separation from Canada.");

    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "Center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "Cover",
        Width: "100%",
    };

    const ImageList=[
        {
            id:1,
            img:Book1,
            tital: "His Life will forever be Changed",
            description: "His Whole Life by Elizabeth Hay is a coming-of-age story set in the mid-1990s following a young boy named Jim as his family grapples with a faltering marriage and the political tensions surrounding Quebecs potential separation from Canada.",
        },
        {
            id:2,
            img:Book2,
            tital: "Who's there",
            description: "Who's There? by Stephanie S. Tolan is a young adult novel about two orphaned siblings, Drew and Evan Broderick, who move into their late father's childhood home, Rose Hill, after their parents die in a gas explosion.",
        },
        {
            id:3,
            img:Book3,
            tital: "Lost Boy",
            description: "Lost Boy by Christina Henry offers a dark, gritty retelling of the Peter Pan story, focusing on the relationship between Peter and his first Lost Boy, Jamie, before the arrival of Wendy.",
        },
    ]
        



    return (
        <>
            <div className='min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center  dark:bg-gray-950 dark:text-white duration-200 
            'style={bgImage} >
                <div className="cointerner pb-8 sm:pb-0 ">
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        {/*text-content-section*/}
                        <div className='px-10 flex flex-col justify-center gap-12 pt-12 sm:pt-0 text-center sm:text-left  order-2 sm:order-1'>
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
                        <div className='min-h-[450px] lg:flex justify-center  itme-center order-1 sm:order-2' >

                            {/*Main-Image */}
                            <div className=" h-[300px ]  sm:h-[450px]  overflow-hidden  flex  justify-center  items-center ">
                                <img src={imageid} alt="" className=' w-[300px] h-[300px] sm:h-[450px ] sm:[w-450px] sm:scale-125 object-contain mx-auto ' />
                            </div>
                            {/*Other-Image-List */}
                            <div className='flex lg:flex-col  lg:top-1/2 lg:-translate-y-10 lg:py-2 justify-center gap-4 absulate -bottom-[40px] lg: -right-1 bg-gray-300 dark:bg-gray-900 rounded-full'>
                            {
                                ImageList.map((data)=>(

                                  <img src={data.img} alt=""
                                  className='max-w-[100px] h-[100px] object-contain inline-block hover:scale-110  duration-200   cursor-pointer' 
                                  onClick={()=>{
                                     setImageid(

                                        data.id===1 ? Book1:
                                        data.id===2 ? Book2:
                                        Book3
                                     );
                                     setTital(data.tital);
                                     setDescription(data.description);
                                    }}
                                  />


                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
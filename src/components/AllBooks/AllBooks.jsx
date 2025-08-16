import React from 'react'
import Img1 from "../../assets/images/book2-C96QbsXx.jpg"
import Img2 from "../../assets/images/book1-T1QIvOvc.jpg"
import Img3 from "../../assets/images/book3-5_h1HoKi.jpg"
import { FaStar } from "react-icons/fa";
const BooksData = [
    {
        id: 1,
        img: Img1,
        tital: "His Life",
        rating: 4.5,
        author: "John",
    },
    {
        id: 2,
        img: Img2,
        tital: "Who's there",
        rating: 4.3,
        author: "Someone"
    },
    {
        id: 3,
        img: Img3,
        tital: "Lost Boy",
        rating: 4.8,
        author: "Lost Girl",
    },
    {
        id: 1,
        img: Img1,
        tital: "His Life",
        rating: 4.5,
        author: "John",
    },
    {
        id: 2,
        img: Img2,
        tital: "Who's there",
        rating: 4.3,
        author: "Someone"
    },
]
const AllBooks = () => {
    return (
        <>
            <div className='dark:bg-gray-900 bg-gray-200 '>
                <div className="container  p-9">
                    {/* header */}
                    <div className='text-center mb-20 max-w-[400px] mx-auto '>
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-purple-400  font-semibold ">Best Books</p>
                        <h1 className='font-extrabold text-4xl'>Tops Books</h1>
                        <p className="text-gray-500  text-xs py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, minima eligendi?</p>
                    </div>
                    {/* cards */}
                    <div>
                        <div className='grid grig-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-5'>
                            {
                                BooksData.map((data) => (
                                    <div className='space-y-3'>
                                        <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md  ' />
                                        <div>
                                            <h2 className='font-semibold'>
                                                {data.tital}
                                            </h2>
                                            <p className='text-sm text-gray-700 dark:text-gray-400 '>
                                            {data.author}
                                            </p>
                                            <div className='flex items-center gap-2'>
                                                <FaStar className='text-yellow-500' />
                                                <p className=''>{data.rating}</p>
                                            </div>
                                        </div>
                                      
                                    </div>
                                    

                                ))
                            }

                        </div>
                        <div className='flex justify-center py-8'> <button className='bg-purple-600  text-white font-bold  group-hover:bg-white group-hover:text-purple-500 hover:font-semibold py-2 px-9 rounded-full mx-20 hover:scale-105  duration-200 mt-3'> View All Books </button></div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AllBooks
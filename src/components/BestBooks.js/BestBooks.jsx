import React from 'react'
import Img1 from "../../assets/images/book2-C96QbsXx.jpg"
import Img2 from "../../assets/images/book1-T1QIvOvc.jpg"
import Img3 from "../../assets/images/book3-5_h1HoKi.jpg"
import { FaStar } from "react-icons/fa";

const BestBooks = () => {
  const BooksData = [
    {
      id: 1,
      img: Img1,
      tital: "His Life will forever be Changed",
      description: "His Whole Life by Elizabeth Hay is a coming-of-age story set in the mid-1990s following a young boy named Jim as his family grapples with a faltering marriage and the political tensions surrounding Quebecs potential separation from Canada.",
    },
    {
      id: 2,
      img: Img2,
      tital: "Who's there",
      description: "Who's There? by Stephanie S. Tolan is a young adult novel about two orphaned siblings, Drew and Evan Broderick, who move into their late father's childhood home, Rose Hill, after their parents die in a gas explosion.",
    },
    {
      id: 3,
      img: Img3,
      tital: "Lost Boy",
      description: "Lost Boy by Christina Henry offers a dark, gritty retelling of the Peter Pan story, focusing on the relationship between Peter and his first Lost Boy, Jamie, before the arrival of Wendy. ",
    },
  ]
  return (
    <>
      <div className=" dark:bg-gray-900 dark:text-white py-10">
        <div className="container ">
          <div className='text-center mb-20 max-w-[400px] mx-auto '>
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-purple-400  font-semibold ">Trending Books</p>
            <h1 className='font-extrabold text-5xl'>Best Books</h1>
            <p className="text-gray-500  text-xs py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, minima eligendi?</p>
          </div>
          {/*Cards Sections*/}
          <div className='grid grid-cols-1 lg:flex lg:justify-around sm:grid-cols-2 md-grid-cols-3 md:gap-5  place-items-center'  >
            {/*Card-1*/}
            {
              BooksData.map((books) => (
                <div className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-purple-600 dark:hover:bg-purple-700 hover:text-white relative  shadow-2xl duration-high group max-w-[300px] '>
                  <div className='h-[100px]'>
                    <img src={books.img} alt="" />
                  </div>
                  <div>
                    <div className='w-full flex items-center justify-center ' >
                      <FaStar
                      className='text-yellow-500'/>
                      <FaStar
                      className='text-yellow-500'/>
                      <FaStar
                      className='text-yellow-500'/>
                      <FaStar
                      className='text-yellow-500'/>
                    </div>
                    <h1 className='text-xl font-bold' >{books.tital}</h1>
                    <p className='text-gray-500  group-hover:text-white duration-300 text-sm line-clamp-2 '>{books.description}</p>
                    <button className='bg-purple-600 '>Order Now</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default BestBooks;
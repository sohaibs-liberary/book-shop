import React from 'react'

const Menu =[

     {
        id:1,
        name:"Home",
        link:"/#",
     },
     {
        id:2,
        name:"Best Seller",
        link:"/#services",
     },


];


const Navbar = () => {
  return (
    <div>
        <div className="container p-3 sm:py-0 ">
            <div className="flex justify-between items-center">
                <div>
                    <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-5' >
                        <img src="https://bookstore-tcj.netlify.app/assets/logo-yh4yOaug.png" alt="" className='w-10' />
                    Books
                    </a>
                </div>
                <div>
                    <ul className='  justify-around gap-10 items-center hidden sm:flex' >
                    {
                       Menu.map((menu) => (
                        <li>
                        <a href={menu.link}>{menu.name}</a> 
                         </li>
                       ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
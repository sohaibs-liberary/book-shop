import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="container">
            <div className="flex justify-between items-center">
                <div>
                    <a href='#'>
                        <img src="https://bookstore-tcj.netlify.app/assets/logo-yh4yOaug.png" alt="" className='w-20' />
                    </a>
                    Books
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Best Seller</li>
                        <li>Home</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
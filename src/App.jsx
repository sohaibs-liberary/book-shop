import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import BestBooks from './components/BestBooks.js/BestBooks';

const App = () => {
  return (

    <>
    <div  className='bg-white dark:bg-gray-800  dark:text-white duration-200'>
     <Navbar/>
     <Hero/>  
     <BestBooks/>  

    </div>
    </>
  )
}

export default App

{/**/}
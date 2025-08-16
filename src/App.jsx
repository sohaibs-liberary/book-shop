import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import BestBooks from './components/BestBooks.js/BestBooks';
import Banner from './components/Banner/Banner';
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner';
import AllBooks from './components/AllBooks/AllBooks';
import Testimontal from './components/Testimotional/Testimontal';

const App = () => {
  return (

    <>
    <div  className='bg-white dark:bg-gray-900  dark:text-white duration-200'>
     <Navbar/>
     <Hero/>  
     <BestBooks/> 
     <Banner /> 
     <AppStoreBanner />
     <AllBooks />
     <Testimontal />

     

    </div>
    </>
  )
}

export default App

{/*1:46:48*/}
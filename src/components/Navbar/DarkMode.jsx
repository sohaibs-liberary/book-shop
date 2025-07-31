 import React , { useState,useEffect } from 'react';
// import Lightpng  from "https://bookstore-tcj.netlify.app/assets/dark-mode-button-85jBkhOs.png";
 //import Darkpng  from "https://bookstore-tcj.netlify.app/assets/light-mode-button-X4OXHFfW.png";

 const DarkMode = () => {

   const [theme , setTheme] = useState(localStorage.getItem("theme") || "light");

   useEffect (() =>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
      localStorage.getItem("theme","dark")
    }else{
      document.documentElement.classList.remove("dark")
      localStorage.getItem("theme","dark")
    }
   },[theme]);


  return (
   <>
   <div className='relative' >
       <img src="https://bookstore-tcj.netlify.app/assets/light-mode-button-X4OXHFfW.png" alt="" 
        
      className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)] transition-all duration-300 absolute right-0 z-10
       ${theme === "dark"? "opacity-0" : "opacity-100"}` } 
       onClick={()=> setTheme(theme === "dark"? "light":"dark")}

      />

        <img src="https://bookstore-tcj.netlify.app/assets/dark-mode-button-85jBkhOs.png" alt=""
          className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)] transition-all duration-300 absolute right-0 z-10"
            onClick={()=> setTheme(theme === "dark"? "light":"dark")}



/>
   </div>


     </>
  ) }

 export default DarkMode

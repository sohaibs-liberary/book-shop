 import React, { useEffect, useState } from 'react'
 
 import Darkpng from "../../assets/images/dark-mode-button-85jBkhOs.png";
 import Lightpng from "../../assets/images/light-mode-button-X4OXHFfW.png";
 
 

 const DarkMode = () => {

 const [theme , setTheme] = useState ( localStorage.getItem("theme") || "light" );

  useEffect(() => {
   if (theme ==="dark"){
       document.documentElement.classList.add("dark");
       localStorage.setItem("theme", "dark");
   }else{
         document.documentElement.classList.remove("dark");
         localStorage.setItem("theme", "light");
 }
    
  }, [theme])
  

   return(
    <>
    <div className='relative' >

    
      <img src={Lightpng} alt='light' className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)] transition-all duration-300 absulate right-0 z-10 translate-y-[12px] 

      ${
        theme === "dark" ? "opacity-0" :"opacity-100"
      }
        
        `}
        onClick={()=>setTheme(theme === "dark" ? "light ":"dark")


        }
        />
          
      <img src={Darkpng} alt='light' className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)] transition-all duration-300 absulate right-0 z-10 translate-y-[-12px]

      ${
        theme === "dark" ? "opacity-100" :"opacity-0"
      }
        
        `}
        onClick={()=>setTheme(theme === "dark" ? "light ":"dark")


        }
        />
          
       
    

    </div>
    </>
   );
 };
 
 export default DarkMode;
 import React from 'react'
 
 import Darkpng from "../../assets/images/dark-mode-button-85jBkhOs.png";
 import Lightpng from "../../assets/images/light-mode-button-X4OXHFfW.png";
 
 

 const DarkMode = () => {
   return(
    <>
    <div className='' >

    
      <img src={Lightpng} alt='light' className='w-14 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)] transition-all duration-300 absolute'></img>
     {/* <img src={Darkpng} alt='Dark'></img>*/}

    </div>
    </>
   );
 };
 
 export default DarkMode;
import React from 'react'
import BorderImg from "../../assets/images/board-nj_GR-yJ.png"


const bannerImg = {
    
    backgroundImage:`url(${BorderImg})`,
    backgroundPosition :"center",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
    height:"100%",
    weight:"100%",
        
};

const AppStoreBanner = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800  text-white py-10" 
        style={bannerImg}>
            <div className="container">
                <div>
                <h1>Read Books at your fingertips</h1>
                </div>
            </div>
        </div>
    );
};

export default AppStoreBanner;
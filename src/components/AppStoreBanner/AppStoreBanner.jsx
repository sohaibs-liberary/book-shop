import React from 'react'
import BorderImg from "../../assets/images/board-nj_GR-yJ.png"
import AppStoreImg from "../../assets/images/app_store-aoAyJ2T_.png"
import PlayStoreImg from "../../assets/images/play_store-25MAnoNl.png"


const bannerImg = {

    backgroundImage: `url(${BorderImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    weight: "100%",

};

const AppStoreBanner = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800  text-white py-10"
            style={bannerImg}>
            <div className="container">
                <div className=' space-y-6 max-w-xl mx-auto' >
                    <h1 className='text-2xl text-center sm:text-4xl font-semibold'>Read Books at your fingertips</h1>
                    <div className='flex  justify-center items-center gap-4 '>
                        <a href='#' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                            <img src={PlayStoreImg} alt="" 
                            classname="  " />
                        </a>
                        <a href='#' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                            <img src={AppStoreImg} alt=""
                            classname="" />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppStoreBanner;
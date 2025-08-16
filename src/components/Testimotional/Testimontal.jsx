import React from 'react'
import Slider from "react-slick";

const TestimonialData=[
   {
    id:1,
    name:Victor,
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, minima eligendi?",
    img:"https://picsum.photos/102/102",

   },
   {
    id:1,
    name:Victor,
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, minima eligendi?",
    img:"https://picsum.photos/102/102",

   },
   {
    id:1,
    name:Victor,
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, minima eligendi?",
    img:"https://picsum.photos/102/102",

   },
]

const Testimontal = () => {
  //slider config
 var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


  return (
    <div>
      <div className="container">
             {/*header*/}
         <div className='text-center mb-20 max-w-[400px] mx-auto '>
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-purple-400  font-semibold ">What our customer says</p>
                        <h1 className='font-extrabold text-4xl'>Testimonials</h1>
                        <p className="text-gray-500  text-xs py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, minima eligendi?</p>
                    </div>

             {/*Cards scetion*/}
             
             <div>
                <Slider  {...settings}>
                  {TestimonialData.map((data)=>(
                    <div>
                      
                      <div>
                        <div>
                          <img src={data.img}  alt="" />
                        </div>
                        <div>
                          <div>
                            <p>{data.text}</p>
                          </div>
                        </div>
                      </div>

                    </div>                 
                
                ))}
                  </Slider>                     
             </div>

      </div>
    </div>
  )
}

export default Testimontal
import React from 'react'
import "./Bedroom.css"
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import livingProd from "../../JSONSTRUCTURE/livingProd.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Bedroom() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <main>
      <section className="bedroomLandingPage">
        <div>
          
        </div>
      </section>

      <section className="bedroomS1">
      
        <div className="bedRoomImg">
        <Slider {...settings}>
          
          {
            livingProd[0].livingRoomItems.chairs.map((item , index)=>{

              return (
                <>
                <div>
                  <div className='imgDiv'><img src={item.imgUrls[0]} alt="Img" /></div>
                
                  <div className="info">
                      <h1>{item.name}</h1>
                      <p><b>{item.description}</b></p>
                      <p>${item.price}</p>
                      <button>Buy</button>
                      </div>
              
              </div>
              
             </>    
              
              )
            })
          } 
   </Slider>    
        </div>
      </section>

      <section className="bedRoomSlideBar">
          <div></div>
      </section>

    </main>
  )
}

export default Bedroom

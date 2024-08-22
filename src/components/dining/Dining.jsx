import React from 'react'
import "./Dining.css"
import data from "../../products.json"
import CardsType3 from '../Cards/CardsType3'
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import dinindProd from "../../JSONSTRUCTURE/diningProd.json";
import livingProd from "../../JSONSTRUCTURE/livingProd.json"

const Dining = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <main>
     <section className="diningLandingPage">

     </section>

     <section className="diningS1">

        <div className="dsImgDiv">
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

      <section className="diningSlidebar">
          <div></div>
      </section>

     <section className="diningRoomShopping">
     {
        data.slice(1,10).map((item)=>{
          return  <CardsType3 item={item}></CardsType3>
        })
       }
     </section>
    </main>
  )
}

export default Dining

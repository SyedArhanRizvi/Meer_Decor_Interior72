import React, { useEffect, useState } from 'react'
import "./Living.css"
import data from "../../products.json"
import CardsType3 from '../Cards/CardsType3'
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import livingProd from "../../JSONSTRUCTURE/livingProd.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Living = () => {


    
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <main>
      <section className="livinLandingPage">
          <div className='lpdiv'>
            <h1 className='h1'>Make Your Home</h1>
            <h1 className='ndh1'>With Meer Decor Interior72</h1>
            <div>
              <button className='orderNowLiving'>Order Now</button>
              <button>View More</button>
            </div>
          </div>
      </section>

      <section className="livingS1">
        
        <div className="ls1imgDiv">
          
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

      <section className="livingSlider">
          <div></div>
      </section>

      <section className="livingPageProduct1Page">
      {
        data.slice(1,10).map((item)=>{
          return  <CardsType3 item={item}></CardsType3>
        })
       }
      </section>

       <section className="livingPng">

       </section>

    </main>
  )
}

export default Living

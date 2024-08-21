import React, { useEffect, useState } from 'react'
import "./Living.css"
import data from "../../products.json"
import CardsType3 from '../Cards/CardsType3'
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

const Living = () => {
    const url = [
      "https://th.bing.com/th/id/OIP.hhHQhWAFX5dz1pGRskD2QQHaE7?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.hhHQhWAFX5dz1pGRskD2QQHaE7?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.hhHQhWAFX5dz1pGRskD2QQHaE7?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.hhHQhWAFX5dz1pGRskD2QQHaE7?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.hhHQhWAFX5dz1pGRskD2QQHaE7?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.hhHQhWAFX5dz1pGRskD2QQHaE7?rs=1&pid=ImgDetMain",

    ];
    

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
        <div className="ls1infoDiv">

        </div>
        <div className="ls1imgDiv">
          <img src="" alt="" />
          <button className='left'><FaAnglesRight /></button>
          <button className='right'><FaAnglesLeft /></button>
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

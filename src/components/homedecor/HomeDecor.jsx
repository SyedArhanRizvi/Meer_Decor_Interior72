import React from 'react'
import "./HomeDecor.css"
import data from "../../products.json"
import CardsType3 from '../Cards/CardsType3'
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
function HomeDecor() {
  return (
    <main>
      <section className="homeDecorLandingPage">

      </section>

      <section className="homeDecorS1">
        <div className="hdInfo">

        </div>
        <div className="hdImg">
          <button className='left'><FaAnglesRight /></button>
          <button className='right'><FaAnglesLeft /></button>
        </div>
      </section>

      <section className="hdSlideBar">
          <div></div>
      </section>


      <section className="homeDecorItemsShopping">
      {
        data.slice(1,10).map((item)=>{
          return  <CardsType3 item={item}></CardsType3>
        })
       }
      </section>
    </main>
  )
}

export default HomeDecor

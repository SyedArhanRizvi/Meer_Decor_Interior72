import React from 'react'
import "./Dining.css"
import data from "../../products.json"
import CardsType3 from '../Cards/CardsType3'
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
const Dining = () => {
  return (
    <main>
     <section className="diningLandingPage">

     </section>

     <section className="diningS1">
        <div className="dsinfo">

        </div>
        <div className="dsImgDiv">
          <button className='left'><FaAnglesRight /></button>
          <button className='right'><FaAnglesLeft /></button>
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

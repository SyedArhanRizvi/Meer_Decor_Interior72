import React from 'react'
import "./Kitchen.css"
import data from "../../products.json"
import CardsType3 from '../Cards/CardsType3'
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
function Outdoor() {
  return (
    <main>
     <section className="kitchenLandingPage">
      <div>

      </div>
     </section>

     <section className="kitchenS1">
        <div className="kitcheninfo">

        </div>
        <div className="kitchenImg">
          <button className='left'><FaAnglesRight /></button>
          <button className='right'><FaAnglesLeft /></button>
        </div>
      </section>

      <section className="kitchenSlideBar">
          <div></div>
      </section>


     <section className="kitchenItemShopping">
     {
        data.slice(1,10).map((item)=>{
          return  <CardsType3 item={item}></CardsType3>
        })
       }
     </section>
    </main>
  )
}

export default Outdoor

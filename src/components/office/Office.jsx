import React from 'react'
import "./Office.css"
import data from "../../products.json"
import CardsType3 from '../Cards/CardsType3'
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
function Office() {
  return (
    <main>
     <section className="officeLandingPage">
      <div>
    
      </div>
     </section>

     <section className="officeS1">
        <div className="officeInfo">

        </div>
        <div className="officeImg">
          <button className='left'><FaAnglesRight /></button>
          <button className='right'><FaAnglesLeft /></button>
        </div>
      </section>

      <section className="officeSlideBar">
          <div></div>
      </section>

     <section className="OfficeItemShopping">
     {
        data.slice(1,10).map((item)=>{
          return  <CardsType3 item={item}></CardsType3>
        })
       }
     </section>
    </main>
  )
}

export default Office

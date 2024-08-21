import React from 'react'
import "./Bedroom.css"
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
function Bedroom() {
  return (
    <main>
      <section className="bedroomLandingPage">
        <div>
          
        </div>
      </section>

      <section className="bedroomS1">
        <div className="bedroomInfo">

        </div>
        <div className="bedRoomImg">
          <button className='left'><FaAnglesRight /></button>
          <button className='right'><FaAnglesLeft /></button>
        </div>
      </section>

      <section className="bedRoomSlideBar">
          <div></div>
      </section>

    </main>
  )
}

export default Bedroom

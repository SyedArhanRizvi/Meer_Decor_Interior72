import React from 'react'
import '../Navbar/Nav2.css'
import { FaSearch } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { FaTruckArrowRight } from "react-icons/fa6";

function Nav2() {
  return (
    <div className='nav2'>
        <div className="logo">
            <div className="name"><span><b>MEER DECOR</b></span></div>
            <div className="name2"><span>INTERIORS</span><p><b>72</b></p></div>
        </div>
        <div className="searchField">
            <div className="inputTag"><input type="text" placeholder='search by items or by category'/></div>
            <div className="searchglass"><span><FaSearch className='g'/></span></div>
        </div>
        <div className="callingDetails">
            <div className="cpntact">
            <div className='phone'><GiRotaryPhone /></div>
            <div className='numbers'>
            <p><b>+91-9354628900</b></p>
            <p><b>+91-7310943625</b></p></div></div>
           
            <div className="shipping">
                <div><FaTruckArrowRight className='truck'/></div>
                <div className='pp'><p ><b>Free Shipping</b></p></div></div>
             </div>    
    </div>
  )
}

export default Nav2

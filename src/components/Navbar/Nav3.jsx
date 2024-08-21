import React from 'react'
import '../Navbar/Nav3.css'
import { FaFacebookSquare } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import {Link} from "react-router-dom"

function Nav3() {
  return (
    <div className='nav3'>
      <div><Link to="/">HOME</Link></div>
      <div><Link to="/living">LIVING</Link></div>
      <div><Link to="/dining">DINING</Link></div>
      <div><Link to="office">OFFICE</Link></div>
      <div><Link to="homedecor">HOME DECOR</Link></div>
      <div><Link to="outdoor">KITCHEN</Link></div>
      <div><Link to="bedroom">BED ROOM</Link></div>
      <div><Link to="contactus">CONTACT US</Link></div>
      <div className='icons'><span className='fb'><FaFacebookSquare /></span>
      <span className='insta'><FaInstagram /></span>
      <span className='linkd'><TbBrandLinkedin />
      </span>
      <span className="twi"><BsTwitterX /></span>
      </div>
      
    </div>
  )
}

export default Nav3

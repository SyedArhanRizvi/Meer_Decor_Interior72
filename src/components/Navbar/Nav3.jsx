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
      <div><a href="">OFFICE</a></div>
      <div><a href="">HOME DECOR</a></div>
      <div><a href="">OUTDOOR</a></div>
      <div><a href="">BED ROOM</a></div>
      <div><a href="">CONTACT US</a></div>
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

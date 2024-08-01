import React from 'react'
import '../Navbar/Nav1.css'
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { PiWechatLogoBold } from "react-icons/pi";
import { FaOpencart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Nav1() {
  return (
    <div className='nav1'>
        <div className='acCont'><p>Welcome visitors you can <a href="">login</a> or <a href="">create a new account</a></p></div>
        <div className='logo1'>
            <div><span><FaRegHeart /></span> Wish List</div>
            <div><span><RiAccountCircleLine /></span> My Account </div>
            <div><Link to="cartEle" className='link'><span><FaOpencart /></span> Shopping Cart</Link></div>
            <div><span className='chat'><PiWechatLogoBold /></span> Chat Online</div>
        </div>
    </div>
  )
}

export default Nav1

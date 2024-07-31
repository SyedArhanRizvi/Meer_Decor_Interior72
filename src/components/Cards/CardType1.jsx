import React from 'react'
import '../Cards/CardType1.css'
import Btn from '../btns/Btn'
function Card({name, img, price}) {
  
  return (
    <div className='ct1'>
      <div className="img"><img src={img} alt="" /></div>
      <div className="btnstitles">
        <p>{name}</p>
        <p>{price}</p>
        <Btn></Btn>
      </div>
    </div>
  )
}

export default Card

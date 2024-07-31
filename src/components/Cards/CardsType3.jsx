import React from 'react'
import Btn from '../btns/Btn'
import './CardsType3.css'
function CardsType3({name, date, img}) {
  return (
    <div className='ct3'>
      <div className="img"><img src={img} alt="" /></div>

      <div className="det">
        <div className="na"><h1>{name}</h1></div>
        <div className="nm">
            <Btn></Btn>
            <p>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default CardsType3

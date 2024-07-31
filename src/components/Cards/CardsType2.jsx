import React from 'react'
import Btn from '../btns/Btn'
import './CardsType2.css'
function CardsType2({name, title, price, img, date}) {
  return (
    <div className='ct2'>

      <div className="img"><img src={img} alt="" /></div>
      <div className="ct2d1">
        <p>{name}</p>
        <Btn></Btn>
      </div>
      <div className="ct2d2">
        <h4>{title}</h4>
        <p>{date}</p>
      </div>

    </div>
  )
}

export default CardsType2

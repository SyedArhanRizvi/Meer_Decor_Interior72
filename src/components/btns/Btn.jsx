import React from 'react'
import '../btns/Btn.css'
function Btn({onClick}) {
  return (
    <div>
      <button onClick={onClick}>Add to Cart</button>
    </div>
  )
}

export default Btn

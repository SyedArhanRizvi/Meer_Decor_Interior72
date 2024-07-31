import React from 'react'
import '../Cards/SpecialCard.css'

function SpecialCard({img}) {
  return (
    <div className='sp'>
      <div className="img"><img src={img} alt="" /></div>
    </div>
  )
}

export default SpecialCard

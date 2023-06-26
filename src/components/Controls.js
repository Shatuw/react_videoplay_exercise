import React from 'react'

export default function Controls() {
  return (
    <div className='vidcontrols'>
      <button className='playbtn'>Play</button>
      <button className='stopbtn'>Stop</button>
      <div className='timewrapper'><div></div><span className='timer'>00:00</span></div>
      <button className='backwardBtn'></button>
      <button className='forwardBtn'></button>
    </div>
  )
}

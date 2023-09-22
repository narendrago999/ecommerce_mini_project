import React from 'react'
import Marquee from 'react-fast-marquee'
const SecondHeader:React.FC = () => {
  return (
    <>
    <div className="secondheader">
    <Marquee className='marquee' style={{padding:1,margin:0,height:'50px', fontSize:'23px',background:'#f1f3f6'}}>
        Offer* available. Big Sale on diwali shop using and credit or debit card also sudexo card applicable
        </Marquee>
    </div>
    </>
  )
}

export default SecondHeader
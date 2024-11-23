import Navebar from './Navbar'
import React from 'react'

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/saba_butt.jpg)] flex justify-center bg-cover"
        style={{backgroundSize: "13%" , backgroundPosition: "left 180px top 180px"}}
   >
    <Navebar/>
    <div className="container grid lg:grid-cols-2 has-[calc(100vh-60px)]:">
<div className="hidden lg:block"></div>
  <div className="text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center alignCenter:text-center">
<div>
  <p data-aos="zoom-in">I am</p>
  <p data-aos="zoom-in">Saba</p>
  <p data-aos="zoom-in">Butt</p>

  </div>

</div>
    </div>
    </div>
  )
}

export default Hero

import React from 'react'
import './Hero.css'
import blood_img from '../../assets/blood_grps.png'
import Navbar from '../Navbar/Navbar'
import { Button } from '@mui/material'
import bgrp from '../../assets/table.jpg'

const Hero = () => {

  return (
    
    <>
      <Navbar/>
    <div className="hero-wrapper">
      <div className="hero-text">
        <h1>Donate blood,<span> save lives.</span></h1>
        <h2> Your small act of kindness can make a world of difference.</h2>
      </div>
    </div>

    <div className="blood_img">
      <br />
      <img src={blood_img} alt="" />
      </div>

      {/* -----leran about donation starts here------ */}

      <section className="about" id="about">
        <h1 className="heading">LEARN ABOUT<span> DONATION</span> </h1>

        <div className="row">
          <div className="img-container">
            <img src={bgrp} alt="" className='limg'/>
          </div>

          <div className="content">
            <h3>Compatible Blood Type Donors</h3>
            <p>Understanding blood type compatibility is crucial for safe blood donations and
               transfusions. This table shows which blood types can donate to and receive from others. 
               For example, O- is a universal donor, meaning it can donate to any blood type, while AB+ is a universal recipient and can receive from any blood type. Knowing these compatibilities helps ensure that blood donations are used effectively to save lives. By donating blood, you contribute to a critical resource that supports the health and survival of people in need.</p>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Hero

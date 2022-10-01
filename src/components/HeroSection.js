import React from 'react'
import "../index.css"
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import{FaPlayCircle} from "react-icons/fa"

import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className='hero-container'>
     <video src='/videos/video-2.mp4' autoPlay loop muted />
     <h1>ADVENTURE AWAITS</h1>
     <p>what are you waiting for?</p>
     <div className='hero-btns'>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" onClick={console.log("hey")}>

            WATCH TRAILER <FaPlayCircle className='far'/>

        </Button>

     </div>
    </div>
  )
}

export default HeroSection
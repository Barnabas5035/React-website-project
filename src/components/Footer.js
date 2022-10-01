import React from 'react'
import "./Footer.css"
import { Button } from 'react-bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css"
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import{FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaTypo3, FaYoutube} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        
        Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
            You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
        <form>
            <input className='footer-input' name="email" type="email" placeholder="Your Email"/>
            <Button buttonStyle="btn--outline" style={{padding:"15px 32px ",color:"white",fontSize:"12px",textAlign:'center',borderRadius:"4px"}} variant="secondary">
               <Link to='Services'>subscribe</Link>
            </Button>
        </form>
        </div>
        </section>
        <div className='footer-links'>
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
        <h2>About us</h2>
        <Link to="/sign-up">How it works</Link>
        <Link to="/">Testimonials</Link>
        <Link to="/">Careers</Link>
        <Link to="/">Investors</Link>
        <Link to="/">Terms of service</Link>
        </div>
        <div className='footer-link-items'>
        <h2>Contact US</h2>
        <Link to="/">Contact</Link>
        <Link to="/">Support</Link>
        <Link to="/">Destinations</Link>
        <Link to="/">Sponsorships</Link>
        </div>
        </div>
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
        <h2>Videos</h2>
        <Link to="/">Ambassador</Link>
        <Link to="/">Submit Video</Link>
        <Link to="/">Agency</Link>
        <Link to="/">Influencer</Link>
        </div>
        <div className='footer-link-items'>
        <h2>Social media</h2>
        <Link to="/">Facebook</Link>
        <Link to="/">Instagram</Link>
        <Link to="/">Youtube</Link>
        <Link to="/">Twitter</Link>
        </div>
        </div>
        </div>
        <section className='social-media'>
        <div class='social-media-wrap'>
        <div className='footer-logo'>
        <Link to="/"className='social-logo'>
            TRVL <FaTypo3 className='fab'/>
        </Link>
        </div>
        <footer className='website-rights'>
        TRVL &copy;2020
        </footer>
         <div className='social-icons'>
            <Link to="/" className='social-icon-link facebook'target="_blank" aria-label="facebook">
                <FaFacebookF className='fab'/>
            </Link>
            <Link to="/" className='social-icon-link instagram'target="_blank" aria-label="Instagram">
                <FaInstagram className='fab'/>
            </Link>
            <Link to="/" className='social-icon-link youtube'target="_blank" aria-label="Youtube">
                <FaYoutube className='fab'/>
            </Link>
            <Link to="/" className='social-icon-link twitter'target="_blank" aria-label="Twitter">
                <FaTwitter className='fab'/>
            </Link>
            <Link to="/" className='social-icon-link twitter'target="_blank" aria-label="Linkedin">
                <FaLinkedin className='fab'/>
            </Link>

         </div>
         </div>
        </section>

    </div>
  )
}

export default Footer
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


import{FaBars,FaTimes, FaTypo3} from "react-icons/fa"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
const Navbar = () => {
    const[click,setClick] =useState(false)
    const handleClick=()=>setClick(!click)
    const [button,setButton] =useState(true)

    const closeMenu =()=>setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);
  return (
    <nav className='navbar'>
     <div className='navbar-container'>
    <Link to="/" className="navbar-logo">
        TRVL  <FaTypo3 className='fab'/>
    </Link>
    <div className='menu-icons' onClick={handleClick}>
       {click? <FaTimes className='FaBars'/>:<FaBars className='FaBars'/>}
    </div>
    <ul className={click? "nav-menu active":"nav-menu"}>
    <li className='nav-item'>
     <Link to="/"className='nav-links'  onClick={closeMenu}>Home</Link>
    </li>
    <li className='nav-item'>
        <Link to="/services" className='nav-links'onClick={closeMenu}>Service</Link>
    </li>
    <li className='nav-item'>
        <Link to="/products" className='nav-links'onClick={closeMenu}>Products</Link>
    </li>
    <li className='nav-item'>
        <Link to="/signUp" className='nav-links-mobile'onClick={closeMenu}>SignUp</Link>
    </li>
    </ul>
    {button && <Button buttonStyle='btn--outline'variant='secondary' >signup</Button>}
</div>
    </nav>
   
  )
}

export default Navbar
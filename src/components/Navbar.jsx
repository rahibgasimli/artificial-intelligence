import React from 'react'

// React icons 
import { AiFillAccountBook,AiFillAlert,AiFillAlipayCircle } from "react-icons/ai";


import logo from '../assets/images/logo.svg'


const Navbar = () => {
  return (
    <div className="navbar">
        <div class="logo">
            <img src={logo} alt=""/>
            <span>Artificial Intelligence</span>
        </div>

        <i class="fa-solid fa-bars"></i>

        <nav class="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
        </nav>

        <button class="sign-in">Sign In</button>

    </div>
  )
}

export default Navbar
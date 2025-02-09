import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Photo from 'C:/Users/Ashraf Mazlom Yar/Desktop/WebProject Follder/React Follder/Portfolio Website in React/src/components/img/logo.png'
import './Header.css'
import { Link } from 'react-router-dom'




function Header() {
  return (
    <div>
       <header>
        <nav className='navbar navbar-expand-lg bg-white p-4 shadow fixed-top zindex-5'>
        <div className="container-fluid">
          <a href="" className="navbar-brand ">
            <img src={Photo} alt="logo" width={200} className='ms-5'/>
          </a>
          <button type='button' className='navbar-toggler d ' data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className='navbar-toggler-icon'></span>

        </button>
        </div>
     
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              <li className='nav-item'>
                <Link to="/home" className='nav-link active'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to="/about" className='nav-link'>About</Link>
              </li>
              <li className='nav-item'>
                <Link to="/classes" className='nav-link'>Classes</Link>
              </li>
              <li className='nav-item'>
                <Link to="/work" className='nav-link'>Work</Link>
              </li>
              <li className='nav-item'>
                <Link to="/trainers" className='nav-link'>Trainers</Link>
              </li>
              <li className='nav-item'>
                <Link to="/contact" className='nav-link'>Contact</Link>
              </li>
              <li className='nav-item btn'>
                <Link to="/contact" className='nav-link  gs-btn'>Get Started</Link>
              </li>

               
            </ul>
          </div>
          

        </nav>
       </header>
    </div>
  )
}

export default Header

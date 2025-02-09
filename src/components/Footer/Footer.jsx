import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import { FaXRay } from 'react-icons/fa'


function Footer() {
  return (
    <>

    <div className="row bg-white shadow p-5 mt-5">
       <div className="col-md ps-5">
        <h5>VibeFitZone.</h5><p>Designed by <Link to="/">Safwave Ocean</Link></p>
       </div>
       <div className="col-md ps-5">
        <p className=''>Follow us:</p>
    <div className="icons">

        <span><FaXRay></FaXRay></span>
        <span></span>
        <span>Facebook</span>
        <span>Instagram</span>
        <span>S</span>

    </div>
       </div>
    </div>
      
    </>
  )
}

export default Footer

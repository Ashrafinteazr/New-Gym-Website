import React from 'react'
import Image from 'C:/Users/Ashraf Mazlom Yar/Desktop/WebProject Follder/React Follder/Portfolio Website in React/src/components/img/about001.jpg'

import './Home.css'

function Home() {
  return (
    <>
      <div className="container-fluid bg-img">
        <img src={Image} alt=""  className='home-img'/>
        <div className="row home-section">
          <div className="col-lg-6">
            <h1>Build Your Body With<br/> Healthy Mind</h1>
            <p>We offer hardcore strength machines, curve treadmills, boxing studio, TRX, and spinning</p>
          </div>
          <div className="col-lg-6 form">
             <form action="" className='shadow bg-white'>
                <h2>Get Started Today!!!</h2>
                <input type="text" name='name' placeholder='Name*'/>
                <input type="email" name='emailaddress' placeholder='Email Address*'/>
                <input type="number" name='phon number' placeholder='Contact Number*'/>
                <button>Get Started Today</button>


             </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

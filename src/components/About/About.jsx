import React from 'react'
import './About.css'
import AboutPhoto from 'C:/Users/Ashraf Mazlom Yar/Desktop/WebProject Follder/React Follder/Portfolio Website in React/src/components/img/about001.jpg'
import { TiTick } from "react-icons/ti";
// import { CiHeart, CiHome, CiVoicemail } from 'react-icons/ci'
import { FaBox, FaHeart, FaHome, FaUser } from 'react-icons/fa'


function About() {
  return (
    <>
      <div className="container pb-5 about-margin">
        <div className="row">
          <div className="col-md-6">
            <img src={AboutPhoto} alt="aboutphoto" className='about-img' />
          </div>
          <div className="col-md-6 about-content">
            <h1>Discover how we can help you to grow your physical health.</h1>
            <p className='p'>We understand that everyone's fitness journey is unique, which is why our expert trainers are dedicated to crafting customized workout plans tailored to your goals and aspirations.</p>
             
             <div className="ab-p text-justif">
             <p><TiTick size={25} color='red'/>Quias netus magni netsum eos qui ratione sequi.</p>
            <p><TiTick size={25} color='red'/>Venis ratione sequi netus enim quia tempor magni.</p>
            <p><TiTick size={25} color='red'/>Enim ipsam netus voluptatem quia voluptas.</p>
            <button className='dm-btn'>Discover More</button>
             </div>
          </div>
        </div>
      </div>
      <section className="container-fluid about-section">
        <div className="row">
          <div className="col">
          <h1 className='text-center'>Why Chose Us?</h1>
          <p className='text-center'>Curabitur quam etsum lacus net</p>
          </div>
          <div className="w-100"></div>
           <div className="col-md-3 text-center">
             <div className="card  p-3 mt-3">
              <span><FaHome size={60} color='blue'></FaHome></span>
               <div className="card-body">
                 <h5 className="card-title">Modern Equipment</h5>
                 <p className="card-text">Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.</p>
               </div>
             </div>
           </div>

           <div className="col-md-3 text-center">
           <div className="card  p-3 mt-3">
              <span ab-i><FaHeart size={60} color='red'></FaHeart></span>
               <div className="card-body">
                 <h5 className="card-title">Modern Equipment</h5>
                 <p className="card-text">Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.</p>
               </div>
             </div>
           </div>
           <div className="col-md-3 text-center">
           <div className="card  p-3 mt-3">
              <span><FaBox size={60} color='green'></FaBox></span>
               <div className="card-body">
                 <h5 className="card-title">Modern Equipment</h5>
                 <p className="card-text">Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.</p>
               </div>
             </div>
           </div>
           <div className="col-md-3 text-center">
           <div className="card  p-3 mt-3">
              <span><FaUser size={60} color='purple'></FaUser></span>
               <div className="card-body">
                 <h5 className="card-title">Modern Equipment</h5>
                 <p className="card-text">Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.</p>
               </div>
             </div>
           </div>
        </div>
      </section>

    </>
  )
}

export default About

import React from 'react'
import Header from 'C:/Users/Ashraf Mazlom Yar/Desktop/WebProject Follder/React Follder/Portfolio Website in React/src/components/Header/Header.jsx'
import Footer from 'C:/Users/Ashraf Mazlom Yar/Desktop/WebProject Follder/React Follder/Portfolio Website in React/src/components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'


function Welcom() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Welcom

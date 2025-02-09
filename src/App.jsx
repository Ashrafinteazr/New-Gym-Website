import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Welcom from './components/Layout/Welcom.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Classes from './components/Classes/Classes'
import Contact from './components/Contact/Contact'
import Pricing from './components/Pricing/Pricing'
import Trainers from './components/Trainers/Trainers'
import Work from './components/Work/Work'
import {createBrowserRouter , RouterProvider} from 'react-router'
import { Children } from 'react'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcom/>,
    children:[
     {
      path: "/",
      element: <Home/>
     },
     {
      path: "/about",
      element: <About/>
     },
     {
      path: "/Classes",
      element: <Classes/>
     },
     {
      path: "/Work",
      element: <Work/>
     },
     {
      path: "/Trainers",
      element: <Trainers/>
     },
     {
      path: "/Pricing",
      element: <Pricing/>
     },
     {
      path: "/Contact",
      element: <Contact/>
     },
    ]
    
  },
  {
    path: "*",
    element: <h1>Pages not found</h1>
  }
 
])



function App() {
  return (
    <>

      <RouterProvider router={router}/>
   
    </>
  )
}

export default App

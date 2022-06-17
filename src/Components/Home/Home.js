import React from 'react'
import { Link } from 'react-router-dom'
import dairyPng from '../../Images/dairy.png'
import backgroundPng from '../../Images/background.png'

function Home() {
  return (
<div className="hero min-h-[80vh] "  >
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={dairyPng} className="max-w-[300px] md:max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl lg:text-5xl font-bold w-[80%]">Welcome To Darkfam Virtual Diary</h1>
      <p className="py-6 text-2xl capitalize">write your precious memories...</p> 
      <Link to="/dairy"><button className="btn btn-primary">Get Started</button> </Link>
    </div>
  </div>
</div>
   
  )
}

export default Home
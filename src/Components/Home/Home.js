import React from 'react'
import { Link } from 'react-router-dom'
import dairyPng from '../../Images/dairy.jpg'

function Home() {
  return (
<div class="hero min-h-[80vh] ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={dairyPng} class="max-w-[300px] md:max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-3xl lg:text-5xl font-bold w-[80%]">Welcome To Darkfam Virtual Dairy</h1>
      <p class="py-6 text-2xl capitalize">write your precious memories...</p>
      <Link to="/dairy"><button class="btn btn-primary">Get Started</button> </Link>
    </div>
  </div>
</div>
   
  )
}

export default Home
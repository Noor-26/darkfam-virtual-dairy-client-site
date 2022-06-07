import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dairy() {
  return (
    <div class="drawer drawer-mobile h-auto ">
    <input id="my_dairy" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content ">
    <p className='text-4xl m-3 capitalize'>your virtual dairy</p>
  <Outlet/>
    
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay "></label> 
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li><Link to="/dairy" className='capitalize'>add your memorys</Link></li>
        <li><Link to="/dairy/seeMemory" className='capitalize'>see your memorys</Link></li>
      </ul>
    
    </div>
  </div>
  )
}

export default Dairy
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dairy() {
  return (
    <div className="drawer drawer-mobile h-auto ">
    <input id="my_dairy" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content ">
    <p className=' text-3xl lg:text-4xl ml-5 lg:m-3 capitalize'>your virtual diary</p>
  <Outlet/>
    
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay "></label> 
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li><Link to="/dairy" className='capitalize'>add your memories</Link></li>
        <li><Link to="/dairy/seeMemory" className='capitalize'>see your memories</Link></li>
      </ul>
    
    </div>
  </div>
  )
}

export default Dairy
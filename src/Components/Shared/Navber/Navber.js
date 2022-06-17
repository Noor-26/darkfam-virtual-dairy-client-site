import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenuUnfold, AiOutlineMenuFold} from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Button from '../Button/Button';
import { signOut } from 'firebase/auth';
function Navber() {
    const [open, setOpen] = useState(true)
    const [user] = useAuthState(auth)
   const logOut = () => {
    signOut(auth)
   }
  return (
    <div className="navbar text-neutral-content ">
  <div className="navbar-start">   
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round"  strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/dairy">Diary</Link></li>
      {user ? <>
        <p className=' mx-auto my-2' > Hi, {user.displayName}</p>
      <button className='btn btn-primary' onClick={logOut}>Sign out</button>
      </>
      :<li><Link to="/login">Login</Link></li>
      }
     
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl nav-head">Darkfam-Virtual-Diary</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0 pr-5 gap-x-5">
    <li><Link to="/">Home</Link></li>
      <li><Link to="/dairy">Diary</Link></li>
      {user ? <>
      <p className='my-auto' >{user.displayName}</p>
      <button className='btn btn-primary' onClick={logOut}>Sign out</button>
      </>
      :<li><Link to="/login">Login</Link></li>
      }
     
    </ul>
  </div>
  <div className="ml-auto">
  <label tabIndex="1" htmlFor="my_dairy" className="btn btn-ghost bg-base-100 lg:hidden text-[24px]" onClick={() => setOpen(!open)}>
        {open ?<AiOutlineMenuUnfold/> :<AiOutlineMenuFold/>  } 
      </label>
  </div>
</div>
  )
}

export default Navber
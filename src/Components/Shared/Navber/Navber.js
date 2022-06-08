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
    <div class="navbar text-neutral-content ">
  <div class="navbar-start">   
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round"  stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/dairy">Diary</Link></li>
      {user ? <>
      <p className='btn btn-ghost' onClick={logOut}>{user.displayName}</p>
      <button className='btn btn-primary' onClick={logOut}>Sign out</button>
      </>
      :<li><Link to="/login">Login</Link></li>
      }
     
      </ul>
    </div>
    <Link to="/" class="btn btn-ghost normal-case text-xl nav-head">Darkfam-Virtual-Diary</Link>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0 pr-5 gap-x-5">
    <li><Link to="/">Home</Link></li>
      <li><Link to="/dairy">Diary</Link></li>
      {user ? <>
      <p className='btn btn-ghost' onClick={logOut}>{user.displayName}</p>
      <button className='btn btn-primary' onClick={logOut}>Sign out</button>
      </>
      :<li><Link to="/login">Login</Link></li>
      }
     
    </ul>
  </div>
  <div className="ml-auto">
  <label tabIndex="1" for="my_dairy" className="btn btn-ghost bg-base-100 lg:hidden text-[24px]" onClick={() => setOpen(!open)}>
        {open ?<AiOutlineMenuUnfold/> :<AiOutlineMenuFold/>  } 
      </label>
  </div>
</div>
  )
}

export default Navber
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../../firebase.init'
import Loading from '../Loading/Loading'
import { useAuthState } from 'react-firebase-hooks/auth'

function RequireAuth({children}) {
    const [user,loading] = useAuthState(auth)
    const location = useLocation()
   
    if(loading){
      return <Loading/>
    }
    if(!user){
        return <Navigate to="/login"  state={{from:location}} replace  />
    }
  return children;
}

export default RequireAuth
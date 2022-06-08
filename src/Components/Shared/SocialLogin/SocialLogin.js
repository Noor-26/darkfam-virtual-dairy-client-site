import React, { useEffect } from 'react'
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

function SocialLogin() {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
const navigate = useNavigate()

  useEffect(() => {
    if( googleError){
        toast.error(googleError.message)
    }
}, [googleError])
if(googleUser){
    navigate('/')
}
if(googleLoading){
    return <Loading/>
}
  return (
    <div>
    <div className='divider'>OR</div>
    <div className='text-center'>

          <button
              className="btn btn-primary mx-auto"
              onClick={() => signInWithGoogle()}
          >Continue with google</button>
    </div>
</div>
  )
}

export default SocialLogin
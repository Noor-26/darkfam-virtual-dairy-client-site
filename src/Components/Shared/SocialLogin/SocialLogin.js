import React, { useEffect } from 'react'
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

function SocialLogin() {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  useEffect(() => {
    if( googleError){
        toast.error(googleError.message)
    }
}, [googleError])
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
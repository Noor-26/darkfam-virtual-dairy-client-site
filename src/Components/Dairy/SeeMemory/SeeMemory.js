import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import SeeMemoryCard from './SeeMemoryCard'

function SeeMemory() {
  const [user,loading] = useAuthState(auth)
  const [memorys, setmemory] = useState([])
  const [open, setOpen] = useState(false)
  useEffect(() => {
    
    if(user){
      
      fetch(`http://localhost:5000/memory?email=${user.email}`,{
        method:'GET',
                  headers:{
                  'content-type': "application/json",
                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  },
      })
      .then(res => res.json())
      .then(data=>{
        setmemory(data)
      })
    }
    
  }, [user,memorys])
  return (
    <div className='my-5'>
      <p className='text-3xl heading'>Read your precious Memorys</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 mt-5 gap-5  px-4 '>
        {
          
           memorys.map(memory=><SeeMemoryCard memoryContent={memory} />)
        }
      </div>
    </div>
  )
}

export default SeeMemory
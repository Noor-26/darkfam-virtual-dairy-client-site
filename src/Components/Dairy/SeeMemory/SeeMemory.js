import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import Loading from '../../Shared/Loading/Loading'
import SeeMemoryCard from './SeeMemoryCard'
import axios from "axios";
function SeeMemory() {
  const [user,loading] = useAuthState(auth)
 const [memorys, setmemorys] = useState([])
  useEffect(() => {
    
    if(user){
      axios.get(`http://localhost:5000/memory?email=${user.email}`).then(memory => setmemorys(memory.data))
    }
  }, [user,memorys])
  
  
  if(loading  ){
    return <Loading/>
  }
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
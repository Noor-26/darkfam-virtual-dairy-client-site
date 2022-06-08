import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import Loading from '../../Shared/Loading/Loading'
import SeeMemoryCard from './SeeMemoryCard'
import axios from "axios";
import RemoveMemory from './RemoveMemory'
import { toast } from 'react-toastify'
function SeeMemory() {
  const [user,loading] = useAuthState(auth)
 const [memorys, setmemorys] = useState([])
 const [open, setOpen] = useState(false)
 const [memoryId,setMemoryId] = useState('')
 const [dataLoading, setLoading] = useState(false)

  useEffect(() => {
    
    if(user){
      axios.get(`http://localhost:5000/memory?email=${user.email}`).then(memory => setmemorys(memory.data))
    }
  }, [user,memorys])
  
  
  const removeMemory = () => {
    setLoading(true)
          axios.delete(`http://localhost:5000/memory/${memoryId}`).then(data => {
            setLoading(false)
               toast.success('successfully removed the memory')
              })
          setOpen(false)
        }
  if(loading | dataLoading  ){
    return <Loading/>
  }
  return (
    <div className='my-5'>
      <p className='text-3xl heading'>Read your precious Memorys</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 mt-5 gap-5  px-4 '>
        {
          
           memorys.map(memory=><SeeMemoryCard memoryContent={memory} setOpen={setOpen} setMemoryId={setMemoryId} />)
        }
      </div>
      {open && <RemoveMemory removeMemory={removeMemory}/> }

    </div>
  )
}

export default SeeMemory
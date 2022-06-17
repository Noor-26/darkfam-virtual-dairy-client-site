import React from 'react'
import Button from '../../Shared/Button/Button'
import {Link} from 'react-router-dom'
import './SeeMemory.css'

function SeeMemoryCard({memoryContent,setOpen,setMemoryId}) {
  const {current_time,memory,title,_id} = memoryContent
  const sendId = () => {
    setOpen(true)
    setMemoryId(_id)
  }
  let memoryText;
  if(memory.length > 25){
    memoryText = <p className=' mt-2'>{memory.slice(0,25)}...</p>
  }
  else{
    memoryText = <p className=' mt-2'>{memory}</p>

  }
  return (
    <div className="memory_card w-80  lg:w-96 mx-auto">
  <div className="memory_card2 w-80 lg:w-96 p-5">
      <p className='text-[13px] '>Date : {current_time}</p>
      <p>Title : {title}</p>
      <div className='text-center'>
      <p className=' mt-2'>{memoryText}</p>
      <div className='flex gap-4 justify-center my-4'>
      <label htmlFor="remove_memory" className=" btn pt-4  modal-button customBtn"  onClick={sendId} >Delete</label> 
     <Link to={`/dairy/memory/${_id}`}> <Button className='btn mt-3 btn-sm'>Read</Button></Link>
      </div>

      </div>
  </div>
</div>
  )
}

export default SeeMemoryCard
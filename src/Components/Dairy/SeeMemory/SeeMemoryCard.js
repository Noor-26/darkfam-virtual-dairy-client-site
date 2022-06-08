import React from 'react'
import Button from '../../Shared/Button/Button'
import {Link} from 'react-router-dom'
import './SeeMemory.css'

function SeeMemoryCard({memoryContent}) {
  const {current_time,memory,title,_id} = memoryContent
  
  return (
    <div class="memory_card w-80  lg:w-96 mx-auto">
  <div class="memory_card2 w-80 lg:w-96 p-5">
      <p className='text-[13px] '>Date : {current_time}</p>
      <p>Title : {title}</p>
      <div className='text-center'>
      <p className=' mt-2'>{memory}</p>
      <div className='flex gap-4 justify-center my-4'>
      <label for="remove_memory" class=" btn modal-button customBtn" >Delete</label>
     <Link to={`/dairy/memory/${_id}`}> <Button className='btn mt-3 btn-sm'>Read</Button></Link>
      </div>

      </div>
  </div>
</div>
  )
}

export default SeeMemoryCard
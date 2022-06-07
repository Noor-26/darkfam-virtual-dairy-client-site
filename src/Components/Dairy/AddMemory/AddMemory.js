import React from 'react'
import AddMemoryCard from './AddMemoryCard'

function AddMemory() {
  return (
    <div >
    <p className='heading text-3xl'>Add Memorys</p>
    <div className=' h-auto form flex  items-center justify-center '>
<AddMemoryCard/>
    </div>
</div>
  )
}

export default AddMemory
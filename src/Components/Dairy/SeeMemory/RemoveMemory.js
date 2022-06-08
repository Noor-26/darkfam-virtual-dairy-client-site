import React from 'react'

function RemoveMemory({removeMemory}) {
  return (
    <div>  
       
    <input type="checkbox" id="remove_memory" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label for="remove_memory" class="btn btn-sm btn-circle absolute right-2 top-2 btn-primary">✕</label>
        <h3 class="text-lg font-bold">Want to delete the memory?</h3>
        <p class="py-4">Note: This Memory will be removed permanently</p>
        <button onClick={removeMemory} className="btn customBtn">Delete </button>
      </div>
    </div>
        </div>
  )
}

export default RemoveMemory
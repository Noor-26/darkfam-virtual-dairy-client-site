import React from 'react'

function RemoveMemory({removeMemory}) {
  return (
    <div>  
       
    <input type="checkbox" id="remove_memory" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative">
        <label htmlFor="remove_memory" className="btn btn-sm btn-circle absolute right-2 top-2 btn-primary">✕</label>
        <h3 className="text-lg font-bold">Want to delete the memory?</h3>
        <p className="py-4">Note: This Memory will be removed permanently</p>
        <button onClick={removeMemory} className="btn customBtn">Delete </button>
      </div>
    </div>
        </div>
  )
}

export default RemoveMemory
import React from 'react'
import { useForm } from "react-hook-form"

function AddMemoryCard() {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = data => {
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' h-auto mt-10'>
    <div className="form-control w-full min-w-xs">
 <input type="text" placeholder="Date" className="input input-bordered mb-4 w-full max-w-xs "  />
 </div>
    <div className="form-control w-full min-w-xs">
   <label className="label">
     <span className="label-text">Enter title</span>
   </label>
 <input type="text" placeholder="Title" className="input input-bordered mb-4 w-full max-w-xs "  {...register("title", { required: true })}/>
 {errors.title && <span>This field is required</span>}
 </div>
    <div className="form-control w-full min-w-xs">
   <label className="label">
     <span className="label-text">Enter Your memory</span> 
   </label>
 <textarea placeholder="Your precious memory" className="input input-bordered mb-4 text_area w-full max-w-xs "  {...register("memory", { required: true })}/>
 
 {errors.memory && <span>This field is required</span>}   
 </div>
 
 <button  type='submit' className='btn btn-primary'>Add Memory</button>
     </form>
  )
}

export default AddMemoryCard
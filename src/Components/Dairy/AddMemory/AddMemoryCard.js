import React from 'react'
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import Button from '../../Shared/Button/Button';
import './AddMemory.css'
import moment  from 'moment';
import { useAuthState } from 'react-firebase-hooks/auth';

function AddMemoryCard() {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a'); 
    const currentDay = moment().format('MMM Do YY'); 
    const [user] = useAuthState(auth)
    const onSubmit = data => {
      const {title,memory} = data
      const sendData = {
        userName:user.displayName,
        email:user.email,
        current_time:currentTime,
        title:title,
        memory:memory
      }
      
      // sending data to server
      console.log(sendData)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' h-auto mt-10'>
    <div className="form-control w-full min-w-xs">
 <input type="text" placeholder="Date" className="input input-bordered mb-4 w-full max-w-xs "  defaultValue={currentDay} disabled />
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
 
 <Button  type='submit'>Add Memory</Button>
     </form>
  )
}

export default AddMemoryCard
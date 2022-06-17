import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosPrivate from '../../hooks/axiosPrivate'
import Loading from '../../Shared/Loading/Loading'

function ReadMemory() {
    const {id} = useParams()
    const [showMemory, setshowMemory] = useState([])
 const [dataLoading, setLoading] = useState(false)
    const {current_time,memory,title,userName} = showMemory
    useEffect(() => {
        setLoading(true)
      axiosPrivate.get(`https://stormy-brook-75292.herokuapp.com/memory/${id}`).then(data => setshowMemory(data.data))
      setLoading(false)
    }, [])
    if(dataLoading){
        return <Loading/>
    }
    
  return (
    <div>
    <p className='text-3xl heading'>Read Peacefully</p>

    <div className='p-5  '>
        <p>Hi, {userName}</p>
        <p className='text-[13px] my-1 '>Date : {current_time}</p>
        <p>Title : {title}</p>
        <p className='break-words memory'>{memory}</p>
       
    </div>
     </div>
  )
}

export default ReadMemory
import React from 'react'
import { useNavigate } from 'react-router'

function LinkCard({service}) {

  const navigate = useNavigate()
 

  return (

    <div onClick={()=>navigate(`${service.id}`)} className='w-full cursor-pointer relative z-10 h-[300px] text-white group rounded-xl shadow-md shadow-[#757575] hover:shadow-[#444444] overflow-hidden'>
      <div className='absolute top-0 left-0 h-full w-full'>
        <img alt='service' src={service.bgImage} className="object-cover h-full w-full z-20 brightness-50 group-hover:brightness-[.25] transition-all duration-300" />
      </div>
      <div className='absolute z-30 bottom-0 p-6'>
        <h2 className='uppercase text-3xl font-bold border-b-2 border-transparent group-hover:border-white transition-all duration-150 inline-block'>{service.title}</h2>
        <p className='mt-8 line-clamp-4 w-full'>{service.content}</p>
      </div>
    </div>
  )
}

export default LinkCard
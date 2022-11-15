import React from 'react'

function Article({data}) {

  return (
    <div className='mt-[65px] font-customFont mx-auto max-w-[1440px]'>
      <div className='grid grid-cols-1 gap-6 laptop:grid-cols-2 px-6 py-4'>
        <div className='laptop:ml-16 flex flex-col justify-between'>
          <div>
            <span className='text-logoBlue'>LATEST NEWS</span>
            <h1 className='text-6xl pb-3'>{data.title}</h1>
          </div>
          <div className='border-t-2 pt-3 text-gray'>
            <span className='block'>By: {data.author}</span>
            <span className='block'>{data.dateCreated}</span>
          </div>
        </div>
        <div className=''>
            <img src={data.image} className="object-cover max-h-[350px]" alt="article" />
        </div>
        <div className='laptop:ml-16 col-span-2 text-justify'>
            <p className='whitespace-pre-wrap'>{data.content}</p>
        </div>        
      </div>
    </div>
  )
}


export default Article
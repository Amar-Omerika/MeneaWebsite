import React from 'react'

function NewsCard() {
  return (
    <div className='relative font-customfont h-[400px] w-full max-w-[400px] bg-sky-300 text-white z-[1] shadow-md shadow-black'>
      <div className='absolute top-0 left-0 z-[2] h-full'>
        <img alt='grinding' className='object-cover h-full' src='https://images.unsplash.com/photo-1598302936625-6075fbd98dd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFudWZhY3R1cmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60'/>
      </div>
      <div className='absolute bottom-0 left-0 z-[3] mt-auto px-6 pt-1 pb-6 backdrop-brightness-[0.15] w-full'>
        <p className='mb-1 py-2 font-bold'>1/1/2022</p>
        <a className='block cursor-pointer bg-lightBlue text-3xl p-1 my-2 truncate'>News News News News News News News</a>
        
        <p className='line-clamp-4 my-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere quos culpa, veritatis voluptas porro voluptatem ullam quod itaque impedit nostrum assumenda, ad aperiam alias quidem tempore, dolores ipsam ab.
        </p>
        <a href='#' className='cursor-pointer border-transparent border-4 inline-block bg-sky-500 p-2 font-bold hover:border-white transition-color duration-300'>
          Click to read more!
        </a>
      </div>

    </div>
  )
}

export default NewsCard
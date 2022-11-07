import React from 'react'

let fullData = require("../../assets/data/sublinksData.json")


function SublinkPage({id}) {

  const data = fullData.data;
  console.log(data);

   data.map((item) => {
    if(item.id === id) {
      return (
        <div className='font-customFont mt-[65px] w-full h-full'>
          <div className=' relative h-[300px] bg-black'>
            <img className='object-cover h-full w-full shadow-2xl' src='https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' alt='mechanical engineering' />
            <div className='absolute top-0 left-0 right-0 flex flex-col gap-9 justify-center items-center text-white z-50 h-full text-6xl font-bold'>
              {id.split('-').map(((text, id) => {
                return <h1 key={id}>{text.toUpperCase()}</h1>
              }))}
            </div>
          </div>
          <div className='h-full flex flex-col-reverse items-center w-full mt-6 p-6 space-y-6 laptop:flex-row '>
          <img className='object-cover w-3/4 mt-16 laptop:w-1/2 laptop:px-6' src='https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' alt='mechanical engineering' />
              <p className='laptop:w-1/2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro voluptatem necessitatibus commodi alias non recusandae repellendus ea maxime adipisci sapiente molestiae neque nemo amet repellat culpa vero ullam suscipit, ipsa provident ab, ut tempora officia similique? Soluta at tempore, porro deleniti totam magnam debitis dolor dolorem facere quaerat accusantium sapiente</p>
          </div>
        </div>
      )
    }
    
    }
  )
}
  

export default SublinkPage
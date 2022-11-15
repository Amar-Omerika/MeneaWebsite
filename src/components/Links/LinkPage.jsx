import React from 'react'
import LinkCard from './LinkCard'

let fullData = require("../../assets/data/sublinksData.json")


function LinkPage({link}) {

  const links = fullData.data.find((item => item[link]))

  console.log(links)
  
  return (
    <div className='mt-[65px] min-h-screen py-8 px-4'>
      <h1 className='mb-2 font-customfont font-bold desktop:text-[100px] text-[50px] text-center text-gray animate-in fade-in-25'>{link.split("-").join(" ").toUpperCase()}</h1>
      <div className="max-w-[1440px] mx-auto grid tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-6">
        {links[link].map((service, id) => {
          return <LinkCard key={service + id} service={service} link={link} />
        })}
      </div>
    </div>
  )
}

export default LinkPage
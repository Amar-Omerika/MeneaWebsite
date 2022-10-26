import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavSubLinks({sublinks, open}) {
  
  const [hoverClasses] = useState('md:absolute md:w-max md:bg-orange-500 top-16 md:hidden md:group-hover:block md:hover:block')
 
  if(sublinks) {
    return (
      <ul className={`${open ? 'flex' : 'hidden'} flex-coljustify-around w-full px-3 py-4 h-max text-sm ${hoverClasses}`}>
      {sublinks.map((sublink, i) => {
        return (
          <li key={`sublink-${i}`}>
            <Link to={sublink.link}>{sublink.name}</Link>
          </li> 
        )
        })
      }
      </ul> 
    )    
  }

}

export default NavSubLinks
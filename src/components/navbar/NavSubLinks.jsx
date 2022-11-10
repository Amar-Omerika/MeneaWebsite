import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function NavSubLinks({sublinks, handleNav}) {
  
  const hoverClasses = 'desktop:absolute desktop:w-max desktop:bg-white top-16 desktop:hidden desktop:group-hover:block desktop:hover:block desktop:p-4 desktop:shadow-xl'

  


  if(sublinks) {
    return (
        <motion.ul layout className={`h-max flex flex-col justify-around w-full px-3 py-2 ${hoverClasses}` }>
        {sublinks.map((sublink, i) => {
          return (
            <li className='lg:p-2' key={`sublink-${i}`}>
              <Link onClick={()=>handleNav()} className='transition duration-150 border-b-2 border-b-transparent hover:border-b-lightBlue hover:text-lightBlue' to={sublink.link}>{sublink.name}</Link>
            </li> 
          )
          })
        }
        </motion.ul>       
    )    
  }

}

export default NavSubLinks
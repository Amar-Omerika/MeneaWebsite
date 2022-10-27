import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function NavSubLinks({sublinks}) {
  
  const hoverClasses = 'lg:absolute lg:w-max lg:bg-white top-16 lg:hidden lg:group-hover:block lg:hover:block lg:p-4'
  

  const variants = {
    initial: {
      x:-100,
      opacity: 0,
    },
    animate : {
      x:0,
      opacity:1,
    },
    exit : {
      x:-100,
      opacity:0,
    }
  }

  if(sublinks) {
    return (
        <motion.ul layout variants={variants} transition={{duration:0.5}} initial={variants.initial} animate={variants.animate} className={`h-max flex flex-col justify-around w-full px-3 py-2 ${hoverClasses}` }>
        {sublinks.map((sublink, i) => {
          return (
            <li className='lg:p-2' key={`sublink-${i}`}>
              <Link className='transition duration-150 border-b-2 border-b-transparent hover:border-b-lightBlue hover:text-lightBlue' to={sublink.link}>{sublink.name}</Link>
            </li> 
          )
          })
        }
        </motion.ul>       
    )    
  }

}

export default NavSubLinks
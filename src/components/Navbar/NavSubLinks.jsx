import React from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

function NavSubLinks({sublinks, handleNav}) {
  
  const hoverClasses = 'desktop:absolute desktop:w-max desktop:bg-white top-16 desktop:hidden desktop:group-hover:block desktop:hover:block desktop:p-4 desktop:shadow-xl'

  console.log(sublinks);


  if(sublinks) {
    return (
      <AnimatePresence>
        <motion.ul             
        layout
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration: 0.6, when: 'afterChildren', staggerChildren: .5}} 
        className={`flex flex-col justify-around w-full px-3 py-2 ${hoverClasses}` }>
        <AnimatePresence>
        {sublinks.map((sublink, i) => {
          return (
            <motion.li
            className='desktop:p-2' 
            key={`sublink-${i}`}
            layoutId={i}
            >
            
              <Link onClick={()=>handleNav()} className='transition duration-150 border-b-2 border-b-transparent hover:border-b-lightBlue hover:text-lightBlue' to={sublink.link}>{sublink.name}</Link>
            </motion.li> 
          )
          })
        }          
        </AnimatePresence>

        </motion.ul>  
      </AnimatePresence>
     
    )    
  }

}

export default NavSubLinks

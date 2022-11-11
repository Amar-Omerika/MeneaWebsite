import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavSubLinks from './NavSubLinks'
import { AnimatePresence, motion } from 'framer-motion';

function NavLinks({link, handleNav}) {

  const [open, setOpen] = useState(false);



  if(link) {
  return (
    <AnimatePresence>
        <li key='link' className='w-full'>
          <div className={`lg:py-5 relative group`}>
            <motion.div className='flex justify-between w-full desktop:w-max'>
              <Link onClick={()=>handleNav(!open)} className='hover:text-lightBlue text-lg border-b-2 desktop:border-none transition-[color] duration-100' to={link.link}>{link.name}</Link>
              {link.sublinks.length !==0 && <span onClick={()=>setOpen(!open)} className='cursor-pointer desktop:hidden'>{open ? '-' : '+'}</span>}
            </motion.div>

            <motion.div layout className="hidden desktop:block">

              {link.sublinks.length !==0 && 
              <NavSubLinks sublinks={link.sublinks} open={open} handleNav={handleNav} />
              }

            </motion.div>

            {/* Mobile view of sublinks */}
            <motion.div layout 
            transition={{staggerChildren: 1}}
            className="desktop:hidden" >

              {open && link.sublinks.length !==0 && 
                  <NavSubLinks sublinks={link.sublinks} open={open} setOpen={()=>setOpen} />
              }   

            </motion.div>
         
          </div>

        </li>  
    </AnimatePresence>

    )    
  }

}

export default NavLinks
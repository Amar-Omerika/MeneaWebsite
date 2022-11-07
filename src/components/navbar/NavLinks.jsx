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
            <motion.div className='flex justify-between w-full lg:w-max'>
              <Link onClick={()=>handleNav(!open)} className='hover:text-lightBlue' to={link.link}>{link.name}</Link>
              {link.sublinks.length !==0 && <span onClick={()=>setOpen(!open)} className='cursor-pointer lg:hidden'>{open ? '-' : '+'}</span>}
            </motion.div>

            <motion.div layout className="hidden lg:block">

              {link.sublinks.length !==0 && 
              <NavSubLinks sublinks={link.sublinks} open={open} handleNav={handleNav} />
              }

            </motion.div>

            {/* Mobile view of sublinks */}
            <motion.div layout className="lg:hidden" >

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
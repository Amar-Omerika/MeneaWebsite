import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';

function Navbar() {

  const [open, setOpen] = useState(false);
  const links = [
    {
      name:'Home',
      sublinks: [],
    },
    {
      name:'Company',
      sublinks: [
        {
          name: 'Modern Technology',
          link: '/',
        },
        {
          name: 'Career',
          link: '/',
        }
      ]
    },
    {
      name:'Mechanical Engineering',
      sublinks: [
        {
          name: 'Modern Technology',
          link: '/',
        },
        {
          name: 'Career',
          link: '/',
        }
      ]
    },
    {
      name:'BIM Services',
      sublinks: [
        {
          name: 'Modern Technology',
          link: '/',
        },
        {
          name: 'Career',
          link: '/',
        }
      ]
    },
  ]

  const handleNav = () => {
    setOpen(!open);
  }




  return (
<AnimatePresence>
    <motion.nav transition={{layout: {duration:0.5}}} layout className='h-max w-full font-semibold mx-auto fixed top-0 left-0 right-0 bg-white'>
      <motion.div layout className='bg-white px-6 flex flex-wrap items-center justify-between lg:mx-32'>
        <div className='w-full lg:w-1/4 flex justify-between' >
          <div className='flex items-center justify-center cursor-pointer'>
            <motion.span layout="position">Logo Goes Here</motion.span>
            <span className='sr-only' >Company Logo</span>
          </div>

          <motion.div layout='position' className='py-6 flex items-center lg:hidden'>
            {open ? <FontAwesomeIcon icon={faXmark} className='cursor-pointer' onClick={handleNav} /> : <FontAwesomeIcon icon={faBars} className='cursor-pointer' onClick={handleNav} /> }
          </motion.div>          
        </div>

        <motion.ul className='hidden bg-white text-black lg:flex justify-around uppercase items-center gap-4'>
          {links.map((link, i) => {
            return <NavLinks link={link} key={`link${i}`} />
            })
          }
        </motion.ul>

        {/* Mobile view */}

        {open && 
          <motion.ul initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className={`py-6 text-black h-max lg:hidden flex flex-col basis-full uppercase items-start gap-4 `}>

          {links.map((link, i) => {
            return <NavLinks link={link} key={`link${i}`} />
            })
          }
          </motion.ul>   
        }


      </motion.div>
    </motion.nav>  
</AnimatePresence>

  )
}

export default Navbar
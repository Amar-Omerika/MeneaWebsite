import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavSubLinks from './NavSubLinks';

function NavLinks({link}) {

  const [open, setOpen] = useState(false);


  if(link) {
  return (
        <li className='w-full'>
          <div className='md:py-5 relative group'>
            <div className='flex justify-between w-full md:w-max'>
              <Link to='/'>{link.name}</Link>
              {link.sublinks.length !==0 && <span onClick={()=>setOpen(!open)} className='cursor-pointer md:hidden'>+</span>}
            </div>

            { link.sublinks.length !==0 && 
                <NavSubLinks sublinks={link.sublinks} open={open} />
            }            
          </div>

        </li>
    )    
  }

}

export default NavLinks
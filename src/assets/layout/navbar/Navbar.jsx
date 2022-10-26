import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { Link } from 'react-router-dom';

function Navbar() {

  const [open, setOpen] = useState(true);
  const [links] = useState([
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
  ])

  const handleNav = () => {
    setOpen(!open);
  }


  return (
    <nav className='w-full h-auto px-6 mx-auto fixed top-0 left-0 right-0 bg-orange-400 '>
      <div className='flex flex-wrap items-center justify-between md:mx-24'>
        <div className='w-full md:w-auto flex justify-between' >
          <div >
            <img /* src='logo' */ className='cursor-pointer h-8' />
            <span className='sr-only' >Company Logo</span>
          </div>

          <div className='py-6 flex items-center md:hidden'>
            <span className='cursor-pointer' onClick={handleNav}>Hamburger Icon</span>
          </div>          
        </div>

        <ul className='hidden text-white md:flex uppercase items-center gap-4'>
          {links.map((link, i) => {
            return <NavLinks link={link} key={`link${i}`} />
            })
          }
        </ul>

        {/* Mobile view */}
        <ul className={`y-5 text-white h-max md:hidden flex-col basis-full uppercase items-start gap-4 ${open ? 'flex' : 'hidden'} `}>
          {links.map((link, i) => {
            return <NavLinks link={link} key={`link${i}`} />
            })
          }
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
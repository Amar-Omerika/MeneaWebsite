import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import Footer from '../Footer/Index'
import Navbar from '../Navbar/Navbar'
import LinkPage from './LinkPage'



function Links() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

  const { link } = useParams()
  return (
    <>
      <Navbar />
        <LinkPage link={link.toLowerCase()} />
      <Footer />
    </>
  )
}

export default Links
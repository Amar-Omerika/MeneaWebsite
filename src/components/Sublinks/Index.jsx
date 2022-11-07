import React from 'react'
import { useParams } from 'react-router'
import Footer from '../Footer/Index';
import Navbar from '../Navbar/Navbar';
import SublinkPage from './SublinkPage';

export default function Sublinks() {



  const {id, element} = useParams();

  return (
    <>
      <Navbar />
      <SublinkPage key={element+id} id={id} element={element}/>
      <Footer />
    </>

  )
}

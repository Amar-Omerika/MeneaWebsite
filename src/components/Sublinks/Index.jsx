import React from 'react'
import { useParams } from 'react-router'
import Footer from '../Footer/Index';
import Navbar from '../navbar/Navbar';
import SublinkPage from './SublinkPage';

export default function Sublinks() {



  const {id} = useParams();
  console.log(id)

  return (
    <>
      <Navbar />{/* 
      <SublinkPage id={id} /> */}
      <Footer />
    </>

  )
}

import React from 'react'
import { useParams } from 'react-router'
import Footer from '../Footer/Index'
import Navbar from '../Navbar/Navbar'
import Article from './Article'

function NewsPage() {

  const news = require("../../assets/data/newsData.json")
  const {article} = useParams()
  const [data] = news.data.filter((item) => item.id === parseInt(article))

  return (
    <>
      <Navbar />
      <Article data={data} />
      <Footer />
    </>
  )
}

export default NewsPage
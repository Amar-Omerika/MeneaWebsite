import React from 'react';
import { motion, whileInView } from 'framer-motion';

function NewsCard({article}) {

  const variants = {
    fadeIn : {
      outOfView: {
        opacity: 0,
        transform: 'translateY(150%)',
      },
      inView: {
        opacity: 1,
        transform: 'translateY(0%)',
        transition: {
          delay: .04,
          duration: .5,
        }
      }
    }
  }


  return (
    <div className='relative font-customfont h-[400px] w-full max-w-[400px] bg-sky-300 text-white z-[1] shadow-md shadow-black'>
      <div className='absolute top-0 left-0 z-[2] h-full'>
        <img alt='grinding' className='object-cover h-full' src={article.image} />
      </div>
      <div className='absolute bottom-0 left-0 z-[3] mt-auto px-6 pt-1 pb-6 backdrop-brightness-[0.15] w-full'>
        <motion.p variants={variants.fadeIn} initial="outOfView" whileInView="inView" viewport={{once: true}} className='mb-1 py-2 font-bold'>1/1/2022</motion.p>
        <motion.a variants={variants.fadeIn} initial="outOfView" whileInView="inView" viewport={{once: true}} className='block cursor-pointer bg-logoBlue text-3xl p-1 my-2 truncate'>
          {article.title}
        </motion.a>
        
        <motion.p variants={variants.fadeIn} initial="outOfView" whileInView="inView" viewport={{once: true}} className='line-clamp-4 my-4'>
          {article.content}
        </motion.p>
        <motion.a variants={variants.fadeIn} initial="outOfView" whileInView="inView" viewport={{once: true}} href={`/news/${article.id}`} className='cursor-pointer border-transparent border-4 inline-block bg-logoBlue p-2 font-bold hover:border-white transition-color duration-300'>
          Click to read more!
        </motion.a>
      </div>

    </div>
  )
}

export default NewsCard
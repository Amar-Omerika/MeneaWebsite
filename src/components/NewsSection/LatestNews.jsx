import React from 'react'
import NewsCard from './NewsCard'

const news = require("../../assets/data/newsData.json")

function LatestNews() {
  return (
    <div className='max-w-[1920px] mx-auto px-3 py-6'>
      <h1 className="font-customfont font-bold desktop:text-[100px] text-[50px] text-center text-gray animate-in fade-in-25">
				Latest News
			</h1>
      <div className='grid place-items-center grid-cols-1 gap-6 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4'>
        {news && news.data.map(article => <NewsCard key={`article - ${article.id}`} article={article} />  )}
      </div>

    </div>
  )
}

export default LatestNews
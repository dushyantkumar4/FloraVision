import React from 'react'
import OurBest from '../components/OurBest'
import Title from '../components/Title'

const OurBests = () => {
  return (
    <div className='flex flex-col items-center gap-20 pr-8 pl-10 py-10'>
      <Title title={"Our Best o2"}/>
        <OurBest/>
    </div>
  )
}

export default OurBests
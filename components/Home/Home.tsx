import React from 'react'
import Hero from './Hero/Hero'
import TeaProcess from './TeaProcess/TeaProcess'
import SignatureProducts from './SignatureProducts/SignatureProducts'
import OurStory from './OurStory/OurStory'

const Home = () => {
  return (
    <div className='overflow-hidden space-y-16 pb-16'>
      <Hero/>
      <OurStory/>
      <TeaProcess/>
      <SignatureProducts/>   
    </div>
  )
}

export default Home


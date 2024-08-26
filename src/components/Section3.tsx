import React from 'react'
import Image from 'next/image'


const Section3 = () => {
  return (
    <section className=" h-[300px] relative rounded-2xl overflow-hidden bg-my-banner bg-cover">

      <div className=' w-full h-full bg-gradient-to-r from-gray-700 to-transparent'>


      </div>

        <div className=' absolute z-30 max-w-md transform top-[50%] left-[5%] -translate-y-[50%] space-y-3 '>
          <h3 className=' text-3xl lg:text-4xl font-light text-white'>Lorem ipsum dolor sit amet.</h3>

          <p className=' text-white' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum esse dolore deleniti?</p>

          <button className=' bg-red-400 px-5 py-2.5 rounded-md text-white transform active:scale-95 animate-pu'>Know More</button>
        </div>

    </section>
  )
}

export default Section3
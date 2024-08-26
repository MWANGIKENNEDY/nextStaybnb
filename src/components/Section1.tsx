import React from 'react'
import Image from 'next/image';
import SectionTitle from './SectionTitle';

const Section1 = () => {
  return (

    <>
      <SectionTitle title='Exclusives'/>

    <section className=" grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5">

      
    <div className=" bg-red-400 h-[178px] relative rounded-2xl overflow-hidden">
      <Image
        alt=""
        className=" w-full h-full  object-fill bg-transparent"
        fill
        src="/image-1.png"
      />

      <div className=' text-center text-white absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
        <span className='block text-2xl font-semibold'>London</span>
        <span className=' font-light block text-sm text-gray-200'>Starts @ $250</span>
      </div>
    </div>

    <div className=" bg-red-400 h-[178px] relative rounded-2xl overflow-hidden">
      <Image
        alt=""
        className=" w-full h-full  object-fill bg-transparent"
        fill
        src="/image-2.png"
      />

<div className=' text-center text-white absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
        <span className='block text-2xl font-semibold'>New-York</span>
        <span className=' font-light block text-sm text-gray-200'>Starts @ $250</span>
      </div>
    </div>

    <div className=" bg-red-400 h-[178px] relative rounded-2xl overflow-hidden">
      <Image
        alt=""
        className=" w-full h-full  object-fill bg-transparent"
        fill
        src="/image-3.png"
      />

<div className=' text-center text-white absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
        <span className='block text-2xl font-semibold'>Mauritius</span>
        <span className=' font-light block text-sm text-gray-200'>Starts @ $250</span>
      </div>
    </div>

    <div className=" bg-red-400 h-[178px] relative rounded-2xl overflow-hidden">
      <Image
        alt=""
        className=" w-full h-full  object-fill bg-transparent"
        fill
        src="/image-4.png"
      />

<div className=' text-center text-white absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
        <span className='block text-2xl font-semibold'>Jamaica</span>
        <span className=' font-light block text-sm text-gray-200'>Starts @ $250</span>
      </div>
    </div>

    <div className=" bg-red-400 h-[178px] relative rounded-2xl overflow-hidden">
      <Image
        alt=""
        className=" w-full h-full  object-fill bg-transparent"
        fill
        src="/image-5.png"
      />

<div className=' text-center text-white absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
        <span className='block text-2xl font-semibold'>Russia</span>
        <span className=' font-light block text-sm text-gray-200'>Starts @ $250</span>
      </div>
    </div>
  </section>

  </>
  )
}

export default Section1
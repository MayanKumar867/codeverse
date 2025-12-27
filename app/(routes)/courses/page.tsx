import Image from 'next/image'
import React from 'react'

import ListCourses from './_components/ListCourses'

const Courses = () => {
  return (
    <div>
      <div className='relative'>
        <Image src={''} alt='courseBanner' width={1200} height={300} className='w-full h-[300px] object-cover'/>
        <div className='absolute top-0 h-full pt-24 px-10 md:px-24 lg:px-36 bg-linear-to-r from-black/60 to-transparent text-white'>
            <h2 className='font-game text-6xl'>Explore All Courses</h2>
            <p className='font-game text-3xl'>Explore all courses and enrolled your skill</p>
        </div>
      </div>

      <div className='mt-8 px-10 md:px-24 lg:px-36'>
        <h2 className='font-game text-4xl'>All Courses</h2>
        <ListCourses/>
      </div>
    </div>
  )
}

export default Courses
'use client';
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React, { use, useState } from 'react'

const Welcome = () => {
    const {user} = useUser();
  return (
    <div className='flex gap-3 items-center'>
      <Image src={'/machine.webp'} alt='robo' width={120} height={120}/>
      <h2 className='font-game text-2xl p-4 border bg-zinc-800 rounded-lg rounded-bl-none'><span className='text-yellow-600'>Welcome Back,</span> {user?.fullName}, Start Learning something new</h2>
    </div>
  )
}

export default Welcome

'use client'
import { Button } from '@/components/ui/button'
import { useAuth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UpgradeToPro = () => {
  const {has} =useAuth();
  const hasUnlimitedAccess = has && has({plan:'unlimited'})
  return !hasUnlimitedAccess && (
    <div className='flex items-center flex-col p-5 border-4 rounded-2xl mt-8'>
      <Image src={'/logo.png'} alt='logo' width={70} height={70}/>
      <h2 className='text-3xl font-game'>Upgrade to pro</h2>
      <p className='text-gray-500 text-xl font-game text-center'>Join pro membership and Get all course access</p>
      <Link href={'/pricing'}>
      <Button className='font-game text-2xl' variant={'pixelNeon'} size={'lg'}>Upgrade</Button>
      </Link>
    </div>
  )
}

export default UpgradeToPro

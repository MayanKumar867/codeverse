'use client'
import { UserDetailContext } from '@/context/userDetailContext'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useContext } from 'react'

const Status = () => {
    const { user} = useUser();
    const {userDetail, setUserDetail} = useContext(UserDetailContext);
  return (
    <div className='p-4 border-4 rounded-2xl'>
        <div className=''>
          <Image src={'/WalkingPixelArt.gif'} alt='gif' width={70} height={70}/>
          <h2>{user?.primaryEmailAddress?.emailAddress}</h2>
        </div>
        <div className='grid grid-cols-2 gap-5'>
            <div className='flex gap-3 items-center'>
                <Image src={'/star.png'} alt='star' width={35} height={35}/>
                <div>
                    <h2 className='font-3xl font-game'>{userDetail?.points}</h2>
                    <h2 className='font-game text-xl text-gray-500'>Total Rewards</h2>
                </div>
            </div>

            <div className='flex gap-3 items-center'>
                <Image src={'/badge.png'} alt='star' width={35} height={35}/>
                <div>
                    <h2 className='font-3xl font-game'>20</h2>
                    <h2 className='font-game text-xl text-gray-500'>Badges</h2>
                </div>
            </div>

            <div className='flex gap-3 items-center'>
                <Image src={'/fire.png'} alt='star' width={35} height={35}/>
                <div>
                    <h2 className='font-3xl font-game'>1</h2>
                    <h2 className='font-game text-xl text-gray-500'>Daily Strike</h2>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Status

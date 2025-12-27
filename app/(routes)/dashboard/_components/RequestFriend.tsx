import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

const RequestFriend = () => {
  return (
    <div className=' bg-zinc-800 flex flex-col items-center mt-8 p-4 border rounded-xl'>
      <Image src={'/mail.png'} alt='mail' width={80} height={80}/>
      <h2 className='font-game font-3xl'>Invite Friend</h2>
      <p className='font-game'>Having Fun? Share the love with a friend ! Enter an email and we will send them personal invite</p>
      <div className='flex gap-2 items-center mt-5'>
        <Input className='min-w-sm' placeholder='Enter Your Email'/>
        <Button className='font-game '  variant={'pixel'}>Send Invite</Button>
      </div>
    </div>
  )
}

export default RequestFriend

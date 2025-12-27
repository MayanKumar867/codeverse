import { Button } from '@/components/ui/button'
import React from 'react'

const Help = () => {
  return (
    <div className='font-game p-4 border-4 rounded-xl mt-7  items-center flex-col  '>
      <h2 className='text-3xl'>Need Community Help</h2>
      <p className='text-2xl'>Ask Question in our community</p>
      <Button variant={'pixelNeon'} className='text-2xl mt-3' size={'lg'}>Go To Community</Button>
    </div>
  )
}

export default Help

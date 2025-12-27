import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full relative h-screen overflow-hidden'>
      <Image src={'/Hero.gif'} alt='hero' width={1000} height={1000}
         className='w-full h-full object-cover absolute inset-0'
      />

      <div className="absolute w-full flex flex-col items-center mt-20 sm:mt-24 px-4 text-center">
  
  {/* Top line */}
  <h2 className="font-game font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide">
    Level Up Your
  </h2>

  {/* Main highlight line */}
  <h2
    className="font-press-start font-bold 
               text-5xl sm:text-6xl md:text-7xl lg:text-8xl
               text-cyan-400 mt-2 sm:mt-3
               tracking-tight"
    style={{
      textShadow:
        "3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000",
    }}
  >
    Coding Journey
  </h2>

  {/* Subtitle */}
  <h3 className="mt-4 sm:mt-5 font-game text-lg sm:text-xl md:text-2xl text-zinc-300 max-w-xl">
    Beginner-friendly courses and hands-on projects
  </h3>

  {/* CTA */}
  <Link href="/sign-in">
    <Button
      className="font-game text-lg sm:text-xl md:text-2xl px-6 sm:px-8 py-4 sm:py-5 mt-6 sm:mt-8"
      variant="pixelNeon"
    >
      GET STARTED
    </Button>
  </Link>

</div>

    </div>
  )
}

export default Hero

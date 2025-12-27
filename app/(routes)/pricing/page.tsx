import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-black via-zinc-900 to-black text-white">

      <div className="text-center max-w-2xl mb-12">
        <h1 className="font-game text-5xl md:text-6xl mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Pricing
        </h1>

        <p className="text-lg text-zinc-300">
          Upgrade for unlimited access to all courses and exclusive features
        </p>
      </div>

      <div className="w-full max-w-4xl rounded-2xl border border-zinc-700 bg-zinc-900/60 backdrop-blur-md shadow-[0_0_60px_rgba(168,85,247,0.2)] p-6">
        <PricingTable />
      </div>

      <p className="mt-8 text-sm text-zinc-400 text-center">
        Cancel anytime · Secure payment powered by Clerk
      </p>

    </div>
  )
}

export default page


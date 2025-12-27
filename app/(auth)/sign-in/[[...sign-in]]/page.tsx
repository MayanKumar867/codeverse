'use client'

import React from 'react'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Image from 'next/image';
import Link from 'next/link';

export default function SignInPage() {
  return (
  <div className="min-h-screen grid w-full items-center bg-zinc-100 px-4 sm:justify-center">
    <SignIn.Root>
      <SignIn.Step
        name="start"
        className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8"
      >
        <header className="text-center flex flex-col items-center">
          <Image src={'/logo.png'} alt='logo' width={40} height={40}/>
          <h1 className="mt-3 text-base font-bold tracking-wide text-black uppercase font-game">Sign in to CodeVerse</h1>
        </header>

        <Clerk.GlobalError className="block text-sm text-red-600" />

        <div className="space-y-3">

          {/* Google */}
          <Clerk.Connection
            name="google"
            className="flex w-full items-center justify-center gap-3 py-2 px-3 rounded-md bg-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none font-bold cursor-pointer"
          >
            <Clerk.Icon name="google" className="size-4 font-press-start" />
            Sign in with Google
          </Clerk.Connection>

          <div className="w-full flex items-center justify-center gap-[10px] text-gray-500 text-sm">
            <div className="w-[40%] h-[1px] bg-gray-400"></div> OR <div className="w-[40%] h-[1px] bg-gray-400"></div>
          </div>

          {/* Email */}
          <Clerk.Field name="identifier" className="space-y-2">
            <Clerk.Label className="text-black font-game">Email address</Clerk.Label>
            <Clerk.Input className="w-full px-3 py-2 border rounded bg-gray-200 text-black" />
            <Clerk.FieldError className="text-xs text-red-500" />
          </Clerk.Field>

          {/* ✅ Password Field Added */}
          <Clerk.Field name="password" className="space-y-2">
            <Clerk.Label className="text-black font-game">Password</Clerk.Label>
            <Clerk.Input
              type="password"
              className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
            />
            <Clerk.FieldError className="text-xs text-red-500" />
          </Clerk.Field>

          {/* Submit */}
          <Clerk.Submit className="font-game w-full py-2 rounded bg-black text-white font-semibold cursor-pointer active:opacity-80">
            Continue
          </Clerk.Submit>

        </div>

        <p className="text-xs text-center text-gray-700">
            Don't have account?{" "}
            <Link href={'/sign-up'} className="text-blue-600 hover:underline font-semibold">
              Sign-up
            </Link>
          </p>

          <p className="text-[10px] text-center text-gray-500 mt-2">
            By continuing you agree to our terms and privacy policy.
          </p>
      </SignIn.Step>
    </SignIn.Root>
  </div>
);

}



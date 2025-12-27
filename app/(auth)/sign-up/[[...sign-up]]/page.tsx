'use client'

import React, { useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

// Clerk Elements – Correct imports for Next.js
import {
  Root as SignUpRoot,
  Step as SignUpStep
} from "@clerk/elements/sign-up";

import {
  Field,
  Label,
  Input,
  FieldError,
  Submit,
  Connection,
  GlobalError
} from "@clerk/elements/common";
import Link from "next/link";

export default function SignUpPage() {

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [localError, setLocalError] = useState("");

  const handleSubmit = (e) => {
    if (password !== confirm) {
      e.preventDefault();
      setLocalError("Password and Confirm Password do not match.");
    } else {
      setLocalError("");
    }
  };

  return (
    <div className="min-h-screen grid w-full items-center bg-zinc-100 px-4 sm:justify-center">
      <SignUpRoot>
        <SignUpStep
          name="start"
          className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8"
        >
          {/* Header */}
          <header className="text-center flex flex-col items-center">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <h1 className="mt-3 text-base font-bold tracking-wide text-black uppercase">
              Create your Clover account
            </h1>
          </header>

          <GlobalError className="block text-sm text-red-600" />

          <div className="space-y-3">

            {/* Google */}
            <Connection
              name="google"
              className="flex w-full items-center justify-center gap-3 py-2 px-3 rounded-md bg-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none font-bold"
            >
              <FcGoogle className="size-4" />
              Sign up with Google
            </Connection>


            {/* Divider */}
            <div className="w-full flex items-center justify-center gap-[10px] text-gray-500 text-sm">
              <div className="w-[40%] h-[1px] bg-gray-400"></div> OR <div className="w-[40%] h-[1px] bg-gray-400"></div>
            </div>

            {/* Username */}
            <Field name="username" className="space-y-2">
              <Label className="text-black">Username</Label>
              <Input className="w-full px-3 py-2 border rounded bg-gray-200 text-black" />
              <FieldError className="text-xs text-red-500" />
            </Field>

            {/* Email */}
            <Field name="email" className="space-y-2">
              <Label className="text-black">Email</Label>
              <Input className="w-full px-3 py-2 border rounded bg-gray-200 text-black" />
              <FieldError className="text-xs text-red-500" />
            </Field>

            {/* Password */}
            <Field name="password" className="space-y-2">
              <Label className="text-black">Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
              />
              <FieldError className="text-xs text-red-500" />
            </Field>

            {/* Confirm Password */}
            <Field name="passwordConfirmation" className="space-y-2">
              <Label className="text-black">Confirm Password</Label>
              <Input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full px-3 py-2 border rounded bg-gray-200 text-black"
              />
              <FieldError className="text-xs text-red-500" />
            </Field>

            {/* Local custom validation error */}
            {localError && (
              <p className="text-xs text-red-500">{localError}</p>
            )}

            {/* Submit */}
            <Submit
              onClick={handleSubmit}
              className="w-full py-2 rounded bg-black text-white font-semibold"
            >
              Create Account
            </Submit>
          </div>

          {/* Bottom Link */}
          <p className="text-xs text-center text-gray-700">
            Already have an account?{" "}
            <Link href={'/sign-in'} className="text-blue-600 hover:underline font-semibold">
              Sign-in
            </Link>
          </p>

          <p className="text-[10px] text-center text-gray-500 mt-2">
            By continuing you agree to our terms and privacy policy.
          </p>

        </SignUpStep>
      </SignUpRoot>
    </div>
  );
}





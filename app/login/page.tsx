'use client'

import React from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from '@clerk/nextjs'

const LoginPage = () => {
  const { user } = useUser() // get user info for username

  return (
    <div className="min-h-screen w-full flex">
      {/* Left Side - Logo & Description */}
      <div className="w-3/5 bg-gradient-to-br from-[#3D405B] via-[#E07A5F] to-[#4b4e66] flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
          RecipeFlow
        </h1>
        <p className="text-white/90 text-lg sm:text-xl max-w-xl drop-shadow-md">
          Discover, create, and share your favorite recipes with the world. Join our
          community of chefs and food lovers!
        </p>
      </div>

      {/* Right Side - Login/Signup */}
      <div className="w-2/5 bg-[#FFEDE4]/80 flex flex-col justify-center items-center p-12">
        <div className="w-full max-w-md flex flex-col gap-6 bg-white/20 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl relative">

          <SignedOut>
            <h2 className="text-2xl font-bold text-[#3D405B] text-center mb-4">
              Welcome Back!
            </h2>

            {/* Sign In */}
            <SignInButton redirectUrl="/recipie/all">
              <button className="w-full bg-[#E07A5F] hover:bg-[#D96A4E] text-white font-semibold py-3 rounded-xl transition-all">
                Sign In
              </button>
            </SignInButton>

            {/* Sign Up */}
            <SignUpButton redirectUrl="/recipie/all">
              <button className="w-full bg-[#6c47ff] hover:bg-[#5938d6] text-white font-semibold py-3 rounded-xl transition-all">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <div className="mx-auto mt-4 flex items-center gap-4">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'w-16 h-16',
                  },
                }}
              />
              {user && (
                <p className="text-[#3D405B] font-semibold text-lg">
                  {user.username || user.firstName || 'User'}
                </p>
              )}
            </div>
          </SignedIn>

        </div>
      </div>
    </div>
  )
}

export default LoginPage

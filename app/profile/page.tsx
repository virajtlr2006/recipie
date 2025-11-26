'use client'

import { userallRecipiesAction } from '@/Action/RecipieAction'
import { RecipieInsert } from '@/db/Schema'
import { useCurrentUser } from '@/hook/hook'
import React, { useEffect, useState } from 'react'
import { Card } from '@/Components/ui/card'
import { HeartIcon, UserIcon, UsersIcon, ClipboardIcon } from 'lucide-react'

const Page = () => {
  const { email, username, fullName, imageUrl } = useCurrentUser()
  const [userRecipies, setUserRecipies] = useState<RecipieInsert[] | null>(null)

  useEffect(() => {
    if (email) fetchUserProfile(email)
  }, [email])

  const fetchUserProfile = async (email: string) => {
    const recipes = await userallRecipiesAction(email)
    setUserRecipies(recipes)
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#3D405B] via-[#4b4e66] to-[#E07A5F] p-8 flex flex-col items-center gap-8">

      {/* Profile Header */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center gap-6
                      bg-gradient-to-br from-[#FFEDE4] to-[#fbd9c7]
                      rounded-3xl p-6 border border-[#E07A5F]/30 shadow-[0_8px_24px_rgba(0,0,0,0.2)]
                      backdrop-blur-md hover:scale-[1.02] transition-all">
        
        {/* Chef Image */}
        <div className="flex-shrink-0 relative">
          <img
            src={ "https://cdn-icons-png.flaticon.com/128/3135/3135715.png"}
            alt={username || "Chef"}
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-[#E07A5F]/70 shadow-lg"
          />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
        </div>

        {/* User Info */}
        <div className="flex-1 flex flex-col sm:justify-center gap-2">
          <p className="text-3xl sm:text-4xl font-extrabold text-[#3D405B] drop-shadow-lg">{fullName || username}</p>
          <p className="text-sm text-[#3D405B]/80">{email}</p>

          {/* Stats */}
          <div className="flex gap-8 mt-4 text-[#3D405B] font-semibold">
            <div className="flex items-center gap-1"><ClipboardIcon className="w-5 h-5 text-[#E07A5F]" /> <span className="text-[#E07A5F]">{userRecipies?.length || 0}</span> Recipes</div>
            <div className="flex items-center gap-1"><UsersIcon className="w-5 h-5 text-[#E07A5F]" /> <span className="text-[#E07A5F]">{172}</span> Followers</div>
            <div className="flex items-center gap-1"><UserIcon className="w-5 h-5 text-[#E07A5F]" /> <span className="text-[#E07A5F]">{18}</span> Following</div>
          </div>
        </div>
      </div>

      {/* User Recipes Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userRecipies &&
          userRecipies.map((p) => (
            <Card
              key={p.id}
              className="relative rounded-2xl overflow-hidden
                         bg-gradient-to-br from-[#FFEDE4] to-[#fbd9c7]
                         shadow-[0_6px_20px_rgba(0,0,0,0.25)]
                         hover:scale-[1.05] hover:shadow-[0_8px_28px_rgba(0,0,0,0.3)]
                         transition-all duration-300 cursor-pointer"
            >
              <a href={`/recipie/single/${p.id}`} className="block w-full h-full">
                <img
                  src={p.image || ""}
                  alt={p.name}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-sm p-2 text-white font-semibold text-center text-lg">
                  {p.name}
                </div>
              </a>
              <div className="absolute top-4 right-4 p-2 bg-[#E07A5F]/50 rounded-full shadow-md">
                <HeartIcon className="w-5 h-5 text-white" />
              </div>
            </Card>
          ))}
      </div>
    </div>
  )
}

export default Page

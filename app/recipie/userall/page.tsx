'use client'

import { userallRecipiesAction } from '@/Action/RecipieAction'
import { RecipieInsert } from '@/db/Schema'
import { useCurrentUser } from '@/hook/hook'
import React, { useEffect, useState } from 'react'
import { HeartIcon } from 'lucide-react'

const Page = () => {
  const [userRecipies, setUserRecipies] = useState<RecipieInsert[] | null>(null)
  const { email } = useCurrentUser()

  useEffect(() => {
    if (email) userAll()
  }, [email])

  const userAll = async () => {
    if (!email) return
    const user = await userallRecipiesAction(email)
    setUserRecipies(user)
  }

  return (
    <div className="min-h-screen w-full p-8 bg-gradient-to-br from-[#3D405B] via-[#4b4e66] to-[#E07A5F]">
      <h1 className="text-4xl font-extrabold text-[#FFEDE4] mb-10 text-center drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
        My Recipes 🍴✨
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {userRecipies &&
          userRecipies.map((recipe) => (
            <a
              href={`/recipie/single/${recipe.id}`}
              key={recipe.id}
              className="relative rounded-2xl p-5
                bg-gradient-to-br from-[#FFEDE4]/80 to-[#fbd9c7]/80
                border border-[#E07A5F]/40 shadow-[0_4px_14px_rgba(0,0,0,0.15)]
                hover:shadow-[0_6px_18px_rgba(224,122,95,0.4)]
                hover:scale-[1.03] transition-all duration-300"
            >
              {/* Heart Icon */}
              <div className="absolute top-4 right-4 p-2 bg-[#E07A5F]/20 backdrop-blur-md rounded-full shadow-sm hover:bg-[#E07A5F]/35 transition">
                <HeartIcon className="text-[#E07A5F]" />
              </div>

              {/* Recipe Image */}
              <img
                src={recipe.image || ''}
                alt={recipe.name}
                className="w-full h-44 object-cover rounded-xl shadow-md"
              />

              {/* Recipe Info */}
              <div className="mt-4">
                <p className="text-sm text-[#3D405B] opacity-80">By {recipe.email}</p>
                <p className="text-2xl font-semibold mt-1 text-[#E07A5F] drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                  {recipe.name}
                </p>
              </div>
            </a>
          ))}
      </div>
    </div>
  )
}

export default Page

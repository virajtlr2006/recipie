'use client'

import { allRecipiesAction } from '@/Action/RecipieAction'
import { RecipieSingle } from '@/db/Schema'
import React, { useEffect, useState } from 'react'
import { HeartIcon } from 'lucide-react'

const page = () => {

    const [allRecipies, setallRecipies] = useState<RecipieSingle[] | null>(null)

    useEffect(() => {
        all()
    }, [])

    const all = async () => {
        const a = await allRecipiesAction()
        setallRecipies(a || [])
    }

    return (
        <div
            className="
                min-h-screen w-full
                bg-gradient-to-br 
                from-[#3D405B] via-[#4b4e66] to-[#E07A5F]
                p-8
            "
        >

            <h1
                className="
                    text-4xl font-extrabold 
                    text-[#FFEDE4]
                    mb-10 text-center
                    drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]
                "
            >
                Explore Delicious Recipes 🍲✨
            </h1>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {allRecipies &&
                    allRecipies.map((r: RecipieSingle) => (
                        <a
                            href={`/recipie/single/${r.id}`}
                            key={r.id}
                            className="
                                rounded-2xl p-6 relative
                                transition-all duration-300

                                bg-gradient-to-br 
                                from-[#FFEDE4] to-[#fbd9c7]

                                border border-[#E07A5F]/40
                                shadow-[0_4px_14px_rgba(0,0,0,0.15)]

                                hover:shadow-[0_6px_18px_rgba(224,122,95,0.4)]
                                hover:scale-[1.03]
                            "
                        >

                            {/* Heart Icon */}
                            <div
                                className="
                                    absolute top-4 right-4 p-2
                                    rounded-full
                                    bg-[#E07A5F]/20 border border-[#E07A5F]/40
                                    backdrop-blur-md
                                    shadow-sm
                                    hover:bg-[#E07A5F]/35 transition
                                "
                            >
                                <HeartIcon className="text-[#E07A5F]" />
                            </div>

                            {/* Image */}
                            <img
                                className="w-full h-44 object-cover rounded-xl shadow-md"
                                src={r.image || ""}
                                alt={r.name}
                            />

                            {/* Text */}
                            <div className="mt-4">

                                <p className="text-sm text-[#3D405B] opacity-80">
                                    By {r.email}
                                </p>
                                <p
                                    className="
                                        text-2xl font-semibold mt-1
                                        text-[#E07A5F]
                                        drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]
                                    "
                                >
                                    {r.name}
                                </p>

                            </div>
                        </a>
                    ))}
            </div>
        </div>
    )
}

export default page

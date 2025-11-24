'use client'

import { userallRecipiesAction } from '@/Action/RecipieAction'
import { RecipieInsert } from '@/db/Schema'
import { useCurrentUser } from '@/hook/hook'
import React, { useEffect, useState } from 'react'

const page = () => {
    const { email, username, fullName, imageUrl } = useCurrentUser()

    const [isrecipie, setIsrecipie] = useState<RecipieInsert[] | null>(null)

    useEffect(() => {
        if(email){
            userprofile(email)
        }
    }, [email])
    

    const userprofile = async (email:string) => {
        const a = await userallRecipiesAction(email || "")
        setIsrecipie(a)
    }

    return (
        <div>
            <p>{email}</p>
            <p>{username}</p>
            <p>{fullName}</p>
            <img className='rounded-full h-20 w-20' src={imageUrl ||"https://cdn-icons-png.flaticon.com/128/3135/3135715.png"} />

            {isrecipie && isrecipie.map((p)=> 
            <a className=' h-20 w-20' href={`/recipie/single/${p.id}`}>
                <img className='flex h-20 w-20'  src={p.image || ""}/>
            </a>
            )}

        </div>
    )
}

export default page

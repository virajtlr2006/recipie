'use client'

import { userallRecipiesAction } from '@/Action/RecipieAction'
import { RecipieInsert } from '@/db/Schema'
import { useCurrentUser } from '@/hook/hook'
import React, { useEffect, useState } from 'react'

const page = () => {

    // Store user all recipies in a userrecipies variable
    const [userrecipies, setuserrecipies] = useState<RecipieInsert[] | null>(null)

    // Get email from the hook
    const {email} = useCurrentUser()

    useEffect(() => {
        if(email){
            // console.log(email)
            userall()
        }
    }, [email])
    

    const userall = async () => {
        if(!email) return
        // Data sent to backend
        const user =await userallRecipiesAction(email || "") 
        // console.log(user)
        setuserrecipies(user)
    }


  return (
    <div>
      User all recipies
      {userrecipies && userrecipies.map((e)=>(
        <a href={`/recipie/single/${e.id}`}>
            <img src={e.image || ""}/>
            <p>{e.name}</p>
        </a>
    ))}
    </div>
  )
}

export default page

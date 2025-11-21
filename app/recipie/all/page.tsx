'use client'

import { allRecipiesAction } from '@/Action/RecipieAction'
import { RecipieInsert } from '@/db/Schema'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {

// Store all recipes in usestate(variable)
    const [allRecipies, setallRecipies] = useState<RecipieInsert[] | null >(null)

    useEffect(() => {
        all() //Call the function everytime
    }, [])

    const all = async () => {
        // Brings all recipies to frontend
        const a = await allRecipiesAction()
        // Set all the recipies in a state
        setallRecipies(a || [])
    }


    return (
        <div>
            {/* All recipies displayed to frontend */}
            {allRecipies && allRecipies.map((r)=>
            <div>
                <img className='h-20 w-20' src={r.image || ""} alt={r.name}/>
                <p>{r.name}</p>
            </div>
            )}
            
        </div>
    )
}

export default page

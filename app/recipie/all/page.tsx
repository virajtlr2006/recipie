'use client'

import { allRecipiesAction } from '@/Action/RecipieAction'
import { RecipieInsert } from '@/db/Schema'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [allRecipies, setallRecipies] = useState<RecipieInsert | null >(null)

    useEffect(() => {
        all()
    }, [])

    const all = async () => {
        const a = await allRecipiesAction()
        setallRecipies(a || [])
    }


    return (
        <div>
            All recipies here
            
        </div>
    )
}

export default page

'use client'

import { allRecipiesAction } from '@/Action/RecipieAction'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [allRecipies, setallRecipies] = useState(null)

    useEffect(() => {
        all()
    }, [])

    const all = async () => {
        const a = await allRecipiesAction()
        console.log(a)
    }


    return (
        <div>
            All recipies here
            {}
        </div>
    )
}

export default page

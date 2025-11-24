'use client'

import { singleRecipieAction } from '@/Action/RecipieAction'
import { RecipieInsert } from '@/db/Schema'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
    //Retrive id from params
    const { id } = useParams()

    const [singlerecipie, setSinglerecipie] = useState<RecipieInsert[] | null>(null)

    useEffect(() => {
        if (id) {
            Single(id)
        }
    }, [id])

    const Single = async (id: string) => {
        //   console.log(id)
        //request a single recipie to backend
        const recipe = await singleRecipieAction(id) 
        // console.log(recipe)
        setSinglerecipie(recipe)
    }

    return (
        <div>
            {/* Single recipie displayed to frontend */}
            {singlerecipie && singlerecipie.map((s: RecipieInsert) =>
                <div>
                    <img src={s.image || ""} />
                    <p>By : {s.email}</p>
                    <p>{s.name}</p>
                    <p>{s.ingrediants}</p>
                    <p>{s.nutritions}</p>
                    <p>{s.type}</p>
                    <a href={s.video || ""}>{s.video}</a>
                </div>
            )}
        </div>
    )
}

export default Page
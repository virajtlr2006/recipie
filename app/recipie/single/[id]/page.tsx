'use client'

import { singleRecipieAction } from '@/Action/RecipieAction'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      Single(id)
    }
  }, [id])

  const Single = async (id) => {
    const recipe = await singleRecipieAction(id)
    console.log(recipe)
    // Do something with the recipe here
  }

  return (
    <div>
      Single Recipe
    </div>
  )
}

export default Page
'use server'

import { RecipieInsert, RecipieTable } from "@/db/Schema"
import { db } from ".."

// New Recipie
export const NewRecipieAction = async (data:RecipieInsert) => {
    // console.log(data);
    
    const newrecipie = await db.insert(RecipieTable).values(data)

    return true
}

// All recipies
export const allRecipiesAction = async () => {
    // Get all recipies from database
    const allrecipies = await db.select().from(RecipieTable)
    // console.log(allrecipies)
    return allrecipies
}

export const singleRecipieAction = async (id:RecipieInsert) => {
    console.log(id)
}
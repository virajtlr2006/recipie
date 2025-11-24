'use server'

import { RecipieInsert, RecipieTable } from "@/db/Schema"
import { db } from ".."
import { eq } from "drizzle-orm"

// New Recipie
export const NewRecipieAction = async (data: RecipieInsert) => {
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

// Single Recipie
export const singleRecipieAction = async (id: string) => {
    // console.log(id)
    const single = await db.select().from(RecipieTable).where(eq(RecipieTable.id, id))
    // console.log(single);
    return single
}

// User all Recipies
export const userallRecipiesAction = async (email:string) => {
    // console.log(email ||"")
    const userallrecipie = await db.select().from(RecipieTable).where(eq(RecipieTable.email,email))
    // console.log(userallrecipie)
    return userallrecipie
}
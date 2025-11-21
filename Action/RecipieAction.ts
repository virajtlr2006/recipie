'use server'

import { RecipieInsert, RecipieTable } from "@/db/Schema"
import { db } from ".."

export const NewRecipieAction = async (data:RecipieInsert) => {
    // console.log(data);
    
    const newrecipie = await db.insert(RecipieTable).values(data)

    return true
}
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const RecipieTable = pgTable("recipie", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email:varchar().notNull(),
  name:varchar().notNull(),
  ingrediants:varchar(),
  nutritions:varchar(),
  image: varchar(),
  video:varchar(),
  type:varchar().default("Veg")
});

export type RecipieInsert = typeof RecipieTable.$inferInsert
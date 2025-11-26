import { integer, pgTable, varchar } from "drizzle-orm/pg-core";


export const RecipieTable = pgTable("recipie", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  email: varchar("email").notNull(),
  name: varchar("name").notNull(),
  ingrediants: varchar("ingrediants"),
  nutritions: varchar("nutritions"),
  image: varchar("image"),
  video: varchar("video"),
  type: varchar("type").default("Veg"),
});

export type RecipieInsert = typeof RecipieTable.$inferInsert;
export type RecipieSingle = typeof RecipieTable.$inferSelect;
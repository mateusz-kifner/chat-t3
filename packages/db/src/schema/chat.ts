import { relations } from "drizzle-orm";
import { jsonb, serial, timestamp, varchar } from "drizzle-orm/pg-core";

import { pgTable } from "./_table";
import { users } from "./auth";

export const chat = pgTable("chat", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const chatRelations = relations(chat, ({ many, one }) => ({
  participants: many(users),
  last_chat_fragment: one(chat_fragment),
}));

export const chat_fragment = pgTable("chat_fragment", {
  id: serial("id").primaryKey(),
  data: jsonb("data").notNull(),
});

export const chatFragmentRelations = relations(chat_fragment, ({ one }) => ({
  previous_chat_fragment: one(chat_fragment),
}));

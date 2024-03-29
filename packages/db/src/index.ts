import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as auth from "./schema/auth";
import * as chat from "./schema/chat";
import * as post from "./schema/post";

export const schema = { ...auth, ...post, ...chat };

export { pgTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

const queryClient = postgres(process.env.DATABASE_URL!);

export const db = drizzle(queryClient, { schema });

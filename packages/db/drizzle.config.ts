import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema",
  driver: "pg",
  dbCredentials: { connectionString: process.env.DATABASE_URL! },
  tablesFilter: ["chatT3_*"],
} satisfies Config;

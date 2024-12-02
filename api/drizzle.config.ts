import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: './drizzle',
    schema: './src/config/model/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
      url: process.env.DATABASE_URL!,
    },
})
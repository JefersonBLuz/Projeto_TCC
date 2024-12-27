import { drizzle } from "drizzle-orm/postgres-js";
import { eq, gte, lt, ne, or, ilike } from "drizzle-orm";
import dotenv from 'dotenv';

dotenv.config();
const url: string = process.env.DATABASE_URL as string

const db = drizzle(url);

export { db, eq, lt, gte, ne, or, ilike} 
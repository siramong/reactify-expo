import { createClient } from "@supabase/supabase-js";

/**
 * Coin type definition for the database schema
 */
export type Coin = {
  id: string;
  userId: string;
  username: string;
  amount: number;
  curso: string;
  created_at?: string;
};

/**
 * Database schema type definition for better type safety
 */
export type Database = {
  public: {
    Tables: {
      coins: {
        Row: Coin;
        Insert: Omit<Coin, "id" | "created_at">;
        Update: Partial<Omit<Coin, "id">>;
      };
    };
  };
};

// Initialize Supabase client with environment variables
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.EXPO_PUBLIC_SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error(
    "Missing Supabase environment variables. Please check your .env file."
  );
}

/**
 * Supabase client instance for database operations
 * Includes realtime subscriptions and authentication
 */
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

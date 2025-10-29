import { createClient } from "@supabase/supabase-js";

export type Coin = {
  id: string;
  userId: string;
  username: string;
  amount: number;
  curso: string;
  created_at?: string;
};

// Usar la Secret API Key (Service Role Key) desde variables de entorno
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const SUPABASE_SECRET_KEY = process.env.EXPO_PUBLIC_SUPABASE_SECRET_KEY!; // <-- tu secret key

export const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY);

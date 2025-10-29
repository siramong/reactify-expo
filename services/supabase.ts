import { createClient } from '@supabase/supabase-js';

export type Coin = {
  id: string;
  userId: string;
  username: string;
  amount: number;
  curso: string;
  created_at?: string;
};

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

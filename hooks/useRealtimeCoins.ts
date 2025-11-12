import { useEffect, useState } from "react";
import { supabase, Coin } from "@/services/supabase";

interface UseRealtimeCoinsReturn {
  coins: Coin[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

/**
 * Custom hook for fetching coins data from Supabase
 * Provides realtime updates and manual refresh capability
 */
export const useRealtimeCoins = (): UseRealtimeCoinsReturn => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = async () => {
    try {
      setError(null);
      const { data, error: fetchError } = await supabase
        .from("coins")
        .select("*")
        .order("amount", { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setCoins(data || []);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Error fetching coins";
      console.error("Error fetching coins:", err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const refresh = async () => {
    setLoading(true);
    await fetchCoins();
  };

  return { coins, loading, error, refresh };
};

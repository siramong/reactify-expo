import { useEffect, useState } from "react";
import { supabase } from "@/services/supabase";

export const useRealtimeCoins = () => {
  const [coins, setCoins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCoins();
    const channel = supabase
      .channel("public:coins")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "coins" },
        () => fetchCoins()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchCoins = async () => {
    try {
      const { data } = await supabase
        .from("coins")
        .select("*")
        .order("amount", { ascending: false });
      setCoins(data || []);
    } catch (error) {
      console.error("Error fetching coins:", error);
    } finally {
      setLoading(false);
    }
  };

  const refresh = async () => {
    await fetchCoins();
  };

  return { coins, loading, refresh };
};

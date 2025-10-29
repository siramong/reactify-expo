import { useEffect, useState } from 'react';
import { supabase } from '@/services/supabase';


export const useRealtimeCoins = () => {
const [coins, setCoins] = useState<any[]>([]);


useEffect(() => {
fetchCoins();
const channel = supabase
.channel('public:coins')
.on('postgres_changes', { event: '*', schema: 'public', table: 'coins' }, () => fetchCoins())
.subscribe();


return () => {
supabase.removeChannel(channel);
};
}, []);


const fetchCoins = async () => {
const { data } = await supabase.from('coins').select('*');
setCoins(data || []);
};


return { coins };
};
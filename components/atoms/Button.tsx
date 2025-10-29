import { TouchableOpacity, Text } from 'react-native';


export default function Button({ title, onPress }: { title: string; onPress: () => void }) {
return (
<TouchableOpacity onPress={onPress} className="bg-[#61DAFB] p-3 rounded-xl mt-3">
<Text className="text-black font-semibold text-center">{title}</Text>
</TouchableOpacity>
);
}
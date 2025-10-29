import { TextInput } from 'react-native';


export default function Input({ placeholder, value, onChangeText }: any) {
return (
<TextInput
placeholder={placeholder}
value={value}
onChangeText={onChangeText}
className="bg-[#161B22] text-white p-3 rounded-xl mt-2"
placeholderTextColor="#888"
/>
);
}
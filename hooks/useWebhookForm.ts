import { useState } from 'react';


export const useWebhookForm = (fieldsCount: number = 10) => {
const [fields, setFields] = useState(Array(fieldsCount).fill(''));


const updateField = (index: number, value: string) => {
const copy = [...fields];
copy[index] = value;
setFields(copy);
};


return { fields, updateField };
};
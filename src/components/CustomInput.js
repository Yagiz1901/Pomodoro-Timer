import React from 'react';
import { TextInput } from 'react-native';

export default function CustomInput({ placeholder }) {
  return (
    <TextInput 
      style={{ borderWidth: 1, width: 200, margin: 10, padding: 5 }} 
      placeholder={placeholder} 
    />
  );
}
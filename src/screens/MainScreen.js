import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function MainScreen() {
  const [sure, setSure] = useState(1500); 
  const [calisiyor, setCalisiyor] = useState(false);

  useEffect(() => {
    let zamanlayici = null;

    if (calisiyor === true) {
      zamanlayici = setInterval(() => {
        setSure(sure - 1);
      }, 1000);
    }

    return () => clearInterval(zamanlayici);
  }, [calisiyor, sure]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40, marginBottom: 30 }}>{sure} Saniye</Text>
      
      <CustomButton title="Başlat" onPress={() => setCalisiyor(true)} />
      <CustomButton title="Durdur" onPress={() => setCalisiyor(false)} />
      <CustomButton title="Sıfırla" onPress={() => { setCalisiyor(false); setSure(1500); }} />
    </View>
  );
}
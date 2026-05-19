import React from 'react';
import { View, Text } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>GİRİŞ YAPIN</Text>
      <CustomInput placeholder="Kullanıcı Adı" />
      <CustomInput placeholder="Şifre" />
      <CustomButton title="Giriş Yap" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}
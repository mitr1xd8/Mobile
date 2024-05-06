import React from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import Input from '../../components/Input/Input';

const Profile = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
    },
    title: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: 'grey',
    },
    bottomInputs: {
      marginTop: 40,
    },
    button: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 10,
      backgroundColor: '#0076FF',
      marginVertical: 20,
    },
    buttonText: {
      color: '#fff',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>
      <Input label="Електронна пошта" />
      <Input label="Пароль" />
      <Input label="Пароль (ще раз)" />
      <View style={styles.bottomInputs}>
        <Input label="Прізвище" />
        <Input label="Ім'я" />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Profile;

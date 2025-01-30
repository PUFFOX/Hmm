// screens/ProfileScreen.js
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserContext } from '../UserContext';

export default function ProfileScreen() {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Сторінка профілю</Text>
      {user ? (
        <>
          <Text style={styles.info}>Email: {user.email}</Text>
          <Text style={styles.info}>UID: {user.uid}</Text>
          <Text style={styles.info}>Ім'я: {user.firstName || 'Не вказано'}</Text>
          <Text style={styles.info}>По-батькові: {user.middleName || 'Не вказано'}</Text>
          <Text style={styles.info}>Прізвище: {user.surname || 'Не вказано'}</Text>
          <Text style={styles.info}>Дата народження: {user.birthDate || 'Не вказано'}</Text>
          <Text style={styles.info}>Група: {user.group || 'Не вказано'}</Text>
          <Text style={styles.info}>Ранг: {user.rank || 'Не вказано'}</Text>
        </>
      ) : (
        <Text style={styles.info}>Немає даних користувача</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
});

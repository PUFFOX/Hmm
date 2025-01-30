// screens/HomeScreen.js
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserContext } from '../UserContext';

export default function HomeScreen() {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Це домашня сторінка</Text>
      {user && <Text style={styles.text}>Вітаємо, {user.email}!</Text>}
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
  text: {
    fontSize: 18,
    color: '#333',
  },
});

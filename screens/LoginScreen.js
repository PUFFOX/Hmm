// screens/LoginScreen.js
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, TouchableOpacity } from 'react-native';
import { auth, signInWithEmailAndPassword, db, doc, getDoc } from '../firebaseConfig';
import { UserContext } from '../UserContext';

export default function LoginScreen({ navigation }) {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Отримання додаткової інформації про користувача
      const userDoc = await getDoc(doc(db, 'users', user.uid));

      setUser({ ...user, ...userDoc.data() });
      navigation.navigate('DrawerNavigator');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Ласкаво просимо назад!</Text>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder="Пароль"
        onChangeText={setPassword}
        value={password}
        style={styles.input}
        secureTextEntry
      />
      <Button title="Вхід" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Ще не зареєстровані? Реєстрація</Text>
      </TouchableOpacity>
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
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  registerText: {
    marginTop: 20,
    color: '#007BFF',
  },
});

// screens/AddInfoScreen.js
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { UserContext } from '../UserContext';

export default function AddInfoScreen({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [middleName, setMiddleName] = useState(user?.middleName || '');
  const [surname, setSurname] = useState(user?.surname || '');
  const [birthDate, setBirthDate] = useState(user?.birthDate || '');
  const [group, setGroup] = useState(user?.group || '');
  const [rank, setRank] = useState(user?.rank || '');

  const handleSave = () => {
    // Збереження нової інформації у стані контексту
    setUser({ ...user, firstName, middleName, surname, birthDate, group, rank });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Додати інформацію</Text>
      <TextInput
        placeholder="Ім'я"
        onChangeText={setFirstName}
        value={firstName}
        style={styles.input}
      />
      <TextInput
        placeholder="По-батькові"
        onChangeText={setMiddleName}
        value={middleName}
        style={styles.input}
      />
      <TextInput
        placeholder="Прізвище"
        onChangeText={setSurname}
        value={surname}
        style={styles.input}
      />
      <TextInput
        placeholder="Дата народження (дд.мм.рррр)"
        onChangeText={setBirthDate}
        value={birthDate}
        style={styles.input}
      />
      <TextInput
        placeholder="Група"
        onChangeText={setGroup}
        value={group}
        style={styles.input}
      />
      <TextInput
        placeholder="Ранг"
        onChangeText={setRank}
        value={rank}
        style={styles.input}
      />
      <Button title="Зберегти" onPress={handleSave} />
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
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

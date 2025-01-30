// screens/ProfileScreen.js
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { UserContext } from '../UserContext';

export default function ProfileScreen({ navigation }) {
  const { user } = useContext(UserContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profileImage} source={{ uri: 'https://via.placeholder.com/100' }} />
        <Text style={styles.title}>Моя сторінка</Text>
      </View>
      {user ? (
        <View style={styles.infoContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Контактна інформація</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Email:</Text>
              <Text style={styles.infoValue}>{user.email}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Ім'я:</Text>
              <Text style={styles.infoValue}>{user.firstName || 'Не вказано'}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>По-батькові:</Text>
              <Text style={styles.infoValue}>{user.middleName || 'Не вказано'}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Прізвище:</Text>
              <Text style={styles.infoValue}>{user.surname || 'Не вказано'}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Дата народження:</Text>
              <Text style={styles.infoValue}>{user.birthDate || 'Не вказано'}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Група:</Text>
              <Text style={styles.infoValue}>{user.group || 'Не вказано'}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Ранг:</Text>
              <Text style={styles.infoValue}>{user.rank || 'Не вказано'}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddInfo')}>
            <Text style={styles.buttonText}>Додаткова інформація</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.info}>Немає даних користувача</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginTop: 10,
  },
  infoContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    width: 150,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

// Імпортуємо необхідні модулі та компоненти з React і бібліотеки навігації.
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './UserContext'; // Імпортуємо провайдера контексту для управління станом користувача.
import LoginScreen from './screens/LoginScreen'; // Імпортуємо екран входу.
import RegisterScreen from './screens/RegisterScreen'; // Імпортуємо екран реєстрації.
import DrawerNavigator from './DrawerNavigator'; // Імпортуємо навігатор бокового меню.

// Створюємо стек навігації (stack navigator).
const Stack = createStackNavigator();

export default function App() {
  return (
    // Обгортаємо додаток у провайдер користувача, щоб він був доступний у всіх компонентах.
    <UserProvider>
      {/* Контейнер навігації, який керує станом навігації додатку. */}
      <NavigationContainer>
        {/* Налаштовуємо стек навігації з екраном входу та боковим меню. */}
        <Stack.Navigator initialRouteName="Login">
          {/* Екран входу, який буде відображатись першим. */}
          <Stack.Screen name="Login" component={LoginScreen} />
          {/* Екран реєстрації */}
          <Stack.Screen name="Register" component={RegisterScreen} />
          {/* Бокове меню, яке буде доступне після входу. */}
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

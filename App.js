import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <TailwindProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen 
            name="Home" component={HomeScreen}
            />
            <Stack.Screen 
            name="Restaurant" component={RestaurantScreen}
            />
            <Stack.Screen 
            name="Basket" component={BasketScreen}
            options={{
              presentation:'modal',
              headerShown: false,
            }}
            />
            <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen}
            options={{
              presentation:'fullScreenModal',
              headerShown: false,
            }}
            />
            <Stack.Screen name="Delivery" component={DeliveryScreen}
            options={{
              presentation:'fullScreenModal',
              headerShown: false,
            }}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </TailwindProvider>
  );
}

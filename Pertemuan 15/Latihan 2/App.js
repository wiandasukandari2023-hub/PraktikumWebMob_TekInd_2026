import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import TambahScreen from './screens/TambahScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Gudang Ind. v1.0' }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title:
              route.params?.itemData.nama ||
              'Detail'
          })}
        />

        <Stack.Screen
          name="Tambah"
          component={TambahScreen}
          options={{
            title: 'Tambah Barang'
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
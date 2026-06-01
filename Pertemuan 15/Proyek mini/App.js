import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [items, setItems] = useState([
  {
    id: '1',
    nama: 'Body Motor',
    standar: 'Tidak ada goresan, retak, atau penyok',
    gambar: require('./assets/body_motor.jpg'),
    status: 'Belum Dicek',
  },
  {
    id: '2',
    nama: 'Ban Depan',
    standar: 'Tekanan sesuai standar dan tidak aus',
    gambar: require('./assets/ban_depan.jpg'),
    status: 'Belum Dicek',
  },
  {
    id: '3',
    nama: 'Lampu Utama',
    standar: 'Lampu menyala normal dan tidak pecah',
    gambar: require('./assets/lampu_utama.jpg'),
    status: 'Belum Dicek',
  },
]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              items={items}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Detail">
          {(props) => (
            <DetailScreen
              {...props}
              items={items}
              setItems={setItems}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
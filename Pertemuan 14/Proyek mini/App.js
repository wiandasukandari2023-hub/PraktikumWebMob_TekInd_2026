import { StatusBar } from 'expo-status-bar';
import {StyleSheet,Text,View,SafeAreaView,Platform,Image,ScrollView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>PT. YAMAHA</Text>
          <Text style={styles.headerSubtitle}>Profil Mesin Mobile</Text>
           <Text style={styles.headerSubtitle}>Wianda Sukandari (23051430002)</Text>
        </View>

        {/* Konten */}
        <View style={styles.content}>

          {/* Mesin 1 */}
          <View style={styles.card}>
            <Image
              source={require('./assets/mesin1.jpg')}
              style={styles.machineImage}
            />

            <View style={styles.infoContainer}>
              <Text style={styles.machineName}>Mesin CNC</Text>
              <Text style={styles.machineText}>Tahun: 2020</Text>
              <Text style={styles.machineStatus}>Status: Aktif</Text>
            </View>
          </View>

          {/* Mesin 2 */}
          <View style={styles.card}>
            <Image
              source={require('./assets/mesin2.jpg')}
              style={styles.machineImage}
            />

            <View style={styles.infoContainer}>
              <Text style={styles.machineName}>Mesin Bubut</Text>
              <Text style={styles.machineText}>Tahun: 2019</Text>
              <Text style={styles.machineStatus}>Status: Perawatan</Text>
            </View>
          </View>

          {/* Mesin 3 */}
          <View style={styles.card}>
            <Image
              source={require('./assets/mesin3.jpg')}
              style={styles.machineImage}
            />

            <View style={styles.infoContainer}>
              <Text style={styles.machineName}>Mesin Las</Text>
              <Text style={styles.machineText}>Tahun: 2021</Text>
              <Text style={styles.machineStatus}>Status: Aktif</Text>
            </View>
          </View>

          {/* Mesin 4 */}
          <View style={styles.card}>
            <Image
              source={require('./assets/mesin4.jpg')}
              style={styles.machineImage}
            />

            <View style={styles.infoContainer}>
              <Text style={styles.machineName}>Mesin Press</Text>
              <Text style={styles.machineText}>Tahun: 2018</Text>
              <Text style={styles.machineStatus}>Status: Aktif</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },

  header: {
    backgroundColor: '#2c3e50',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },

  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  headerSubtitle: {
    color: '#bdc3c7',
    fontSize: 14,
  },

  content: {
    padding: 20,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,

    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  machineImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },

  infoContainer: {
    justifyContent: 'center',
  },

  machineName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  machineText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 3,
  },

  machineStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#27ae60',
  },
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView>
        {/* Bagian Header */}
        <View style={styles.header}>
          <Image source={require('./assets/logo.jpg')} style={styles.logo} />
          <Text style={styles.headerTitle}>PT. YAMAHA</Text>
          <Text style={styles.headerSubtitle}>Aplikasi Monitoring Gudang</Text>
          <Text style={styles.headerSubtitle}>Wianda Sukandari (23051430002)</Text>
        </View>

        {/* Bagian Konten Utama */}
        <View style={styles.content}>
          <Text style={styles.welcomeText}>Selamat Datang, Wianda!</Text>

          <TouchableOpacity
            style={styles.card}
            onPress={() => Alert.alert("Info", "Membuka Detail Stok Gudang A...")}
          >
            <Text style={styles.cardTitle}>Gudang Sparepart</Text>
            <Text style={styles.cardValue}>Kapasitas: 85%</Text>
            <Text style={styles.cardStatus}>TEKAN UNTUK DETAIL</Text>
          </TouchableOpacity>

          <View style={[styles.card, styles.cardWarning]}>
            <Text style={styles.cardTitle}>Gudang Helm</Text>
            <Text style={styles.cardValue}>Kapasitas: 95%</Text>
            <Text style={styles.cardStatus}>PENUH</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Gudang Oli Mesin</Text>
            <Text style={styles.cardValue}>Kapasitas: 70%</Text>
            <Text style={styles.cardStatus}>AMAN</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Gudang Ban Motor</Text>
            <Text style={styles.cardValue}>Kapasitas: 60%</Text>
            <Text style={styles.cardStatus}>STOK TERSEDIA</Text>
          </View>

          <View style={[styles.card, styles.cardWarning]}>
            <Text style={styles.cardTitle}>Gudang Aksesoris</Text>
            <Text style={styles.cardValue}>Kapasitas: 98%</Text>
            <Text style={styles.cardStatus}>HAMPIR PENUH</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Gudang Mesin Motor</Text>
            <Text style={styles.cardValue}>Kapasitas: 55%</Text>
            <Text style={styles.cardStatus}>NORMAL</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Gudang Body Motor</Text>
            <Text style={styles.cardValue}>Kapasitas: 75%</Text>
            <Text style={styles.cardStatus}>STABIL</Text>
          </View>

          <View style={[styles.card, styles.cardWarning]}>
            <Text style={styles.cardTitle}>Gudang Cat Motor</Text>
            <Text style={styles.cardValue}>Kapasitas: 92%</Text>
            <Text style={styles.cardStatus}>PERLU DIKOSONGKAN</Text>
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
    elevation: 5,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: 'contain',
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
  welcomeText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardWarning: {
    borderLeftWidth: 5,
    borderLeftColor: '#e74c3c',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  cardStatus: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#27ae60',
    marginTop: 5,
    textAlign: 'right'
  }
});
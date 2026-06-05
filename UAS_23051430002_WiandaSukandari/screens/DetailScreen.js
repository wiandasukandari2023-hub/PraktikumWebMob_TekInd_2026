import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params;

  const [stok, setStok] = useState(item.stok);

  const tambahStok = () => {
    setStok(stok + 1);
  };

  const kurangStok = () => {
    if (stok > 0) {
      setStok(stok - 1);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <Text style={styles.headerTitle}>Detail Informasi Barang</Text>

        <View style={styles.detailCard}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Nama Barang</Text>
            <Text style={styles.value}>{item.namaBarang}</Text> 
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Kategori</Text>
            <Text style={styles.value}>{item.kategori}</Text> 
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Lokasi Rak</Text>
            <Text style={styles.badgeRak}>{item.lokasiRak}</Text> 
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Stok Saat Ini</Text>
            <Text style={styles.stokValue}>{stok}</Text> 
          </View>
        </View>

        {stok < 5 && (
          <View style={styles.alertBanner}>
            <Text style={styles.alertText}>⚠️ PERINGATAN KRITIS: Stok hampir habis! Segera lakukan restock barang.</Text>
          </View>
        )}

        <View style={styles.actionContainer}>
          <TouchableOpacity style={[styles.btnAction, styles.btnMinus]} onPress={kurangStok}>
            <Text style={styles.btnText}>- Kurang</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btnAction, styles.btnPlus]} onPress={tambahStok}>
            <Text style={styles.btnText}>+ Tambah</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
          <Text style={styles.btnBackText}>Kembali ke Beranda</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#f8fafc',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 16,
  },
  infoRow: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    paddingBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    marginTop: 4,
  },
  badgeRak: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0284c7',
    backgroundColor: '#e0f2fe',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 4,
    overflow: 'hidden',
  },
  stokValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 4,
  },
  alertBanner: {
    backgroundColor: '#ef4444',
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
  },
  alertText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  btnAction: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  btnMinus: {
    backgroundColor: '#ea580c',
  },
  btnPlus: {
    backgroundColor: '#059669',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  btnBack: {
    borderWidth: 2,
    borderColor: '#64748b',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto', 
  },
  btnBackText: {
    color: '#64748b',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
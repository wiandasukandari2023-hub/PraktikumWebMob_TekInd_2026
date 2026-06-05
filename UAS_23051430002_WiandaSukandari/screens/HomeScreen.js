import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, TextInput, FlatList, TouchableOpacity } from 'react-native';

const DATA_GUDANG = [
    { id: '1', namaBarang: 'Kardus Besar', kategori: 'Packaging', stok: 50, lokasiRak: 'A1' },
    { id: '2', namaBarang: 'Lakban Bening', kategori: 'Packaging', stok: 120, lokasiRak: 'A2' },
    { id: '3', namaBarang: 'Bubble Wrap', kategori: 'Packaging', stok: 15, lokasiRak: 'A3' },
    { id: '4', namaBarang: 'Palet Kayu', kategori: 'Logistik', stok: 5, lokasiRak: 'B1' },
    { id: '5', namaBarang: 'Hand Pallet', kategori: 'Alat', stok: 2, lokasiRak: 'B2' },
    { id: '6', namaBarang: 'Helm Safety', kategori: 'K3', stok: 25, lokasiRak: 'C1' },
    { id: '7', namaBarang: 'Rompi Safety', kategori: 'K3', stok: 30, lokasiRak: 'C2' },
    { id: '8', namaBarang: 'Sepatu Boots', kategori: 'K3', stok: 10, lokasiRak: 'C3' },
    { id: '9', namaBarang: 'Cutter', kategori: 'Alat', stok: 45, lokasiRak: 'D1' },
    { id: '10', namaBarang: 'Spidol Marker', kategori: 'Alat', stok: 60, lokasiRak: 'D2' },
];

export default function HomeScreen({ navigation }) {
    const [search, setSearch] = useState('');

    const [isSorted, setIsSorted] = useState(false);

    let displayedData = DATA_GUDANG.filter((item) =>
        item.namaBarang.toLowerCase().includes(search.toLowerCase())
    );

    if (isSorted) {
        displayedData = [...displayedData].sort((a, b) =>
            a.namaBarang.localeCompare(b.namaBarang)
        );
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { item })}
        >
            <View>
                <Text style={styles.itemTitle}>{item.namaBarang}</Text>
                <Text style={styles.itemSubtitle}>{item.kategori} • Rak: {item.lokasiRak}</Text>
            </View>
            <Text style={styles.itemStok}>Stok: {item.stok}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.headerTitle}>Warehouse Locator</Text>

                <TextInput
                    style={styles.searchBar}
                    placeholder="Cari nama barang gres..."
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                />

                <TouchableOpacity
                    style={[styles.btnSort, isSorted && styles.btnSortActive]}
                    onPress={() => setIsSorted(!isSorted)}
                >
                    <Text style={styles.btnSortText}>
                        {isSorted ? '✓ Urutan: A-Z (Aktif)' : '⇅ Urutkan Alfabet (A-Z)'}
                    </Text>
                </TouchableOpacity>

                <FlatList
                    data={displayedData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListPadding}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#f5f5f5',
    },
    container: {
        flex: 1,
        padding: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    searchBar: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 12,
        fontSize: 16,
    },
    btnSort: {
        backgroundColor: '#e2e8f0',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 6,
        marginBottom: 16,
        alignSelf: 'flex-start',
    },
    btnSortActive: {
        backgroundColor: '#0284c7',
    },
    btnSortText: {
        color: '#334155',
        fontWeight: '600',
        fontSize: 14,
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
    },
    itemSubtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    itemStok: {
        fontSize: 14,
        fontWeight: '600',
        color: '#0284c7',
    },
    flatListPadding: {
        paddingBottom: 20,
    }
});
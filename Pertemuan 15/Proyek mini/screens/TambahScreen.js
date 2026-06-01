import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

function TambahScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Form Tambah Barang</Text>

            <TextInput
                style={styles.input}
                placeholder="Nama Barang"
            />

            <TextInput
                style={styles.input}
                placeholder="Jumlah Stok"
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="Lokasi Penyimpanan"
            />

            <Button
                title="Simpan"
                onPress={() => alert('Data berhasil disimpan')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
    },
});

export default TambahScreen;
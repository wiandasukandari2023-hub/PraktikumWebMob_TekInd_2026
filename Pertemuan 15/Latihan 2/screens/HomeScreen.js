import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Button
} from 'react-native';

const DATA_INVENTORI = [
    { id: '1', nama: 'Baut M10', stok: 500, lokasi: 'Rak A-1' },
    { id: '2', nama: 'Oli Mesin 20L', stok: 12, lokasi: 'Rak B-3' },
    { id: '3', nama: 'Packing Kayu', stok: 100, lokasi: 'Gudang Luar' },
    { id: '4', nama: 'Mur Ring 12', stok: 0, lokasi: 'Rak A-2' },
];

function HomeScreen({ navigation }) {

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() =>
                navigation.navigate('Detail', {
                    itemData: item
                })
            }
        >
            <Text style={styles.itemTitle}>{item.nama}</Text>

            <View style={styles.itemInfo}>
                <Text style={styles.itemSub}>
                    Stok: {item.stok}
                </Text>

                <Text style={styles.itemSub}>
                    {item.lokasi}
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Daftar Inventori Gudang
            </Text>

            <FlatList
                data={DATA_INVENTORI}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            <View style={styles.buttonContainer}>
                <Button
                    title="Tambah Barang"
                    onPress={() =>
                        navigation.navigate('Tambah')
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        paddingHorizontal: 15,
    },
    itemContainer: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    itemInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    itemSub: {
        color: '#666',
    },
    buttonContainer: {
        margin: 15,
    },
});

export default HomeScreen;
import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

function HomeScreen({ navigation, items }) {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() =>
                navigation.navigate('Detail', {
                    itemId: item.id,
                })
            }
        >
            <Text
                style={[
                    styles.nama,
                    item.status === 'Gagal' && styles.gagal,
                ]}
            >
                {item.nama}
            </Text>

            <Text>Status: {item.status}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Daftar Item QC
            </Text>

            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },

    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    card: {
        backgroundColor: '#f4f4f4',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
    },

    nama: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    gagal: {
        color: 'red',
    },
});

export default HomeScreen;
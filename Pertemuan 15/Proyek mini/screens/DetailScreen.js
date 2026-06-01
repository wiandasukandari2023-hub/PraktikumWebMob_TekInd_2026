import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

function DetailScreen({
    route,
    navigation,
    items,
    setItems,
}) {
    const { itemId } = route.params;

    const item = items.find(
        (i) => i.id === itemId
    );

    const [status, setStatus] = useState(
        item.status
    );

    const simpanStatus = () => {
        const dataBaru = items.map((x) =>
            x.id === itemId
                ? { ...x, status: status }
                : x
        );

        setItems(dataBaru);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>

            <Image
                source={item.gambar}
                style={styles.image}
            />

            <Text style={styles.label}>
                Nama Item
            </Text>

            <Text style={styles.value}>
                {item.nama}
            </Text>

            <Text style={styles.label}>
                Standar Kualitas
            </Text>

            <Text style={styles.value}>
                {item.standar}
            </Text>

            <Text style={styles.label}>
                Status Inspeksi
            </Text>

            <Picker
                selectedValue={status}
                onValueChange={(value) =>
                    setStatus(value)
                }
            >
                <Picker.Item
                    label="Lolos"
                    value="Lolos"
                />

                <Picker.Item
                    label="Gagal"
                    value="Gagal"
                />
            </Picker>

            <Button
                title="Simpan"
                onPress={simpanStatus}
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

    image: {
        width: 300,
        height: 200,
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 10,
        resizeMode: 'contain',
    },

    label: {
        fontWeight: 'bold',
        marginTop: 15,
        fontSize: 16,
    },

    value: {
        fontSize: 18,
        color: '#333',
    },
});

export default DetailScreen;
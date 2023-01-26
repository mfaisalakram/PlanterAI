import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';


import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const ARScanner = () => {

    const navigation = useNavigation();

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const [value, setValue] = useState(null)

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = async ({ type, data }) => {
        if (data) {
            setValue(data);
            setScanned(true);
        } else {
            return null;
        }


    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {value !== null && <Text style={{ marginTop: 100, color: '#fff', fontSize: 60, color: '#2197f4', width: '90%', textAlign: 'center' }}>{value}</Text>}
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => { setScanned(false); setValue(null); }} />}
        </View>
    );
};
export default ARScanner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 80,
        justifyContent: 'space-between'
    },

});

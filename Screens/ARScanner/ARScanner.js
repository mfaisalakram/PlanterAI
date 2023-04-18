import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity
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
        return <View style={{ flex: 1, justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
            <Text>Requesting for camera permission</Text>

            <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.goBack()}>
                <Text style={{ color: '#3366CC', fontSize: 14 }}>Go Back Home</Text></TouchableOpacity>
        </View >;
    }
    if (hasPermission === false) {
        return <View style={{ flex: 1, justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
            <Text>No access to camera</Text>

            <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.goBack()}>
                <Text style={{ color: '#3366CC', fontSize: 14 }}>Go Back Home</Text></TouchableOpacity>
        </View >;
    }
    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {value !== null && <Text style={{ marginTop: 100, color: '#fff', fontSize: 60, color: '#2197f4', width: '90%', textAlign: 'center' }}>{value}</Text>}
            {scanned ? <View>
                <Button title={'Tap to Scan Again'} onPress={() => { setScanned(false); setValue(null); }} />
                <View><Text></Text></View>
                <Button title={'go to Home'} onPress={() => { navigation.goBack(); }} style={styles.backButton} />
            </View> : <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Button title={'Cancel'} onPress={() => { navigation.goBack(); }} style={styles.backButton} />
            </View>}
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
    backButton: {
        margin: 10,
    }

});

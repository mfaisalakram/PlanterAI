import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Main = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.ButtonNft} onPress={() => { navigation.navigate('QRScanner') }}><Text style={styles.ScanNftText}>Scan QR for NFT's</Text></TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.ButtonNft} onPress={() => { navigation.navigate('ARScanner') }}><Text style={styles.ScanNftText}>Scan Oled</Text></TouchableOpacity>
            </View>
        </View>
    );
};
export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 50,
        justifyContent: 'center'

    },
    logo: {
        width: 250,
        height: 100,
        marginBottom: 50
    },
    buttonView: {
        marginVertical: 30,
    },
    ButtonNft: {
        backgroundColor: '#A6A6A6',
        padding: 15,
        borderRadius: 20,
        width: 200,
    },
    ButtonOled: {
        backgroundColor: '#A6A6A6',
        padding: 15,
        borderRadius: 20,
        width: 'auto',
        marginTop: 50,
        textAlign: 'center'
    },
    ScanNftText: { color: '#000', fontWeight: 'bold', textAlign: 'center', fontSize: 19 },
    ScanOledText: { color: '#000', fontWeight: 'bold', fontSize: 19 },

});

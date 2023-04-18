import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


const Main = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style>
                <Image
                    style={styles.mainLogo}
                    source={require('../../assets/images/planterailogo.png')}
                />
            </View>
            <View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.ButtonNft} onPress={() => { navigation.navigate('QRScanner') }}><Text style={styles.ScanNftText}>Scan QR for NFT's</Text></TouchableOpacity>
                </View>
                {/* <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.ButtonNft} onPress={() => { navigation.navigate('ARScanner') }}><Text style={styles.ScanNftText}>Scan Oled</Text></TouchableOpacity>
                </View> */}
            </View>
            <View style={styles.PriviciesPolicyView}>
                <TouchableOpacity style={styles.PriviciesPolicyTouch} onPress={() => { navigation.navigate('PrivacyPolicies') }}>
                    <Text style={styles.PriviciesPolicyText}> <MaterialIcons name="privacy-tip" style={{ marginTop: 10 }} /></Text>

                    <Text style={styles.PriviciesPolicyText}> Privacy Policies</Text>

                </TouchableOpacity>
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
        justifyContent: 'center',
        position: 'relative',
    },
    mainLogo: {
        width: 250,
        height: 150,
        marginBottom: 100,
        resizeMode: 'contain'
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
    ScanNftText: { color: '#91f860', fontWeight: 'bold', textAlign: 'center', fontSize: 19 },
    ScanOledText: { color: '#000', fontWeight: 'bold', fontSize: 19 },
    PriviciesPolicyTouch: { flexDirection: 'row', justifyContent: 'center', alignContent: 'center', textAlign: 'center', alignItems: 'center' },
    PriviciesPolicyView: { position: 'absolute', bottom: 25 },
    PriviciesPolicyText: { color: '#3366CC', fontSize: 14 }

});

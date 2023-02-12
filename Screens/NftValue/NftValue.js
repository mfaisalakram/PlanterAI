import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    ToastAndroid
} from 'react-native';

import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';

import { dummyArray } from './res';

import { Entypo } from '@expo/vector-icons';



const NftValue = () => {

    const route = useRoute()
    const authToken = route?.params?.state?.token;
    const navigation = useNavigation();
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false);
    const [auth, setAuth] = useState(true)

    const handelApiCall = async () => {
        try {
            setLoader(true);
            const response = await axios.get("http://www.planterai.com:4000/channels/mychannel/chaincodes/token_erc721?fcn=ClientMintedNFTs&args='[]'", {
                headers: {
                    "Authorization": `Bearer ${authToken}`
                }
            })
            if (response?.data && response.status === 200) {
                let filteredArray = response?.data.result.map((item) => {
                    return JSON.parse(item?.Record?.tokenURI?.replace(/\\/g, ""))
                })
                setData(filteredArray)
                setLoader(false);
            }

        } catch (error) {
            setAuth(false)
            setLoader(false);
            console.log(error)
        }

    }







    useEffect(() => {
        handelApiCall();
    }, [authToken])






    return (

        <>
            {auth ? (<>
                {loader ? (
                    <ActivityIndicator
                        size={'large'}
                        color={'black'}
                        style={{ marginTop: '100%' }}
                    />
                ) : (
                    <ScrollView style={styles.container}
                        stickyHeaderIndices={[0]}
                        showsVerticalScrollIndicator={false}
                    >
                        <TouchableOpacity style={styles.homeLogoView} onPress={() => { navigation.navigate('Main') }}>
                            <Entypo name="home" size={30} style={styles.homeLogo} />
                        </TouchableOpacity>
                        <View style={styles.innercontainer}>
                            <Text style={styles.nftHeadingText} >Your NFT's</Text>
                            {data?.map((item, index) => (
                                <View key={index}>
                                    <View style={styles.headingView}>
                                        <Text style={styles.nftHeadingDateText}>{moment(item?.time).format('YYYY-MM-DD h:mm:ss')}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', alignContent: 'center', marginBottom: 20, }}>
                                        <Text style={styles.textGlobal}>Moisture: {item?.moisture}%</Text>
                                        <Text style={styles.textGlobal}>Temperature: {Math.trunc(item?.temperature)}C</Text>
                                        <Text style={styles.textGlobal}>Humidity: {Math.trunc(item?.humidity)}%</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', alignContent: 'center', marginBottom: 20 }}>
                                        <Text style={styles.textGlobal}>Air pressure: {item?.pressure}</Text>
                                        <Text style={styles.textGlobal}>Acceleration: {item?.acceleration}</Text>
                                    </View>

                                    <View style={{ alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                                        <Text style={styles.textGlobal}>Light Level: {item?.light}</Text>
                                        <Text style={styles.textGlobal}>Sound Value: {item?.sound}</Text>
                                    </View>
                                    <View style={{ borderWidth: 6, borderRadius: 20, width: 300, marginVertical: 20 }}>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                )}
            </>) : (<View style={styles.innercontainernotauthorized}>
                <Text style={styles.innercontainernotauthorizedText}>Not authorized</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Main') }} style={styles.goToHomeView}><Text style={styles.goToHomeText}>go to Home</Text></TouchableOpacity>
            </View>)}
        </>

    );
};
export default NftValue;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
    },
    homeLogoView: { position: 'absolute', left: 30, top: 60 },
    homeLogo: {},
    innercontainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 80,
        justifyContent: 'space-between',
    },
    innercontainernotauthorized: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    innercontainernotauthorizedText: {

    },
    goToHomeView: { marginTop: 30 },
    goToHomeText: { color: '#8C53F7' },
    headingView: {
        alignItems: 'center',
        marginBottom: 40,
    },
    nftHeadingText: {
        fontWeight: 'bold',
        marginBottom: 40,
        fontSize: 25
    },
    nftHeadingDateText: {
        fontWeight: '600',
        fontSize: 18,
        alignContent: 'center',
        color: '#8C53F7'
    },
    textGlobal: {
        fontWeight: '600',
        fontSize: 18
    }
});

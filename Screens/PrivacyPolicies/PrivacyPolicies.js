import React from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    SafeAreaView,
    Button
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const PrivacyPolicies = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.containerInner}>

                <View style={styles.mainHeadingView}><Text style={styles.mainHeading}>Privacy Policy</Text></View>

                <Text style={{ fontWeight: 'bold' }}>Privacy Policy 2023</Text>

                <Text>WOLFBERRY LLC / D-U-N-S Number 102917686</Text>




                <View style={styles.singleParaView}>
                    <Text style={styles.subHeading}>Privacy Policy for Family and Under 18:</Text>

                    <Text style={styles.singlePara}>
                        At Wolfberryllc, we take privacy seriously, especially when it comes to children and families. We are
                        committed to protecting the privacy and safety of all users, especially those under 18 years of age.{"\n"}
                        This Privacy Policy outlines how we collect, use, and disclose information when you use our app.
                    </Text>
                </View>

                <View style={styles.singleParaView}>
                    <Text style={styles.subHeading}>What information do we collect ?</Text>

                    <Text style={styles.singlePara}>
                        We may collect information that you provide to us directly or indirectly through the use of our app.

                    </Text>
                </View>

                <View style={styles.singleParaView}>
                    <Text style={styles.subHeading}>
                        This information may only includes:

                    </Text>

                    <Text style={styles.singlePara}>
                        Personal information, such as name, email address.
                    </Text>
                </View>

                <View style={styles.singleParaView}>

                    <Text style={styles.subHeading}>How do we use the information ?</Text>
                    <Text style={styles.singlePara}>
                        We use the information we collect to provide and improve our services, as well as to communicate
                        with you. Specifically, we use your information for the following purposes:
                        {"\n"}
                        To provide and personalize our services, including to customize content and advertisements.

                        To analyze app usage and improve our products and services.

                        To communicate with you about our app and related services.

                        To respond to user inquiries and support requests.
                    </Text>

                </View>

                <View style={styles.singleParaView}>
                    <Text style={styles.subHeading}>How do we protect the information ?</Text>
                    <Text style={styles.singlePara}>
                        We take reasonable measures to protect the information we collect from unauthorized access,
                        disclosure, alteration, and destruction. We use physical, technical, and administrative safeguards to
                        help protect your information from unauthorized access, use, and disclosure.
                    </Text>

                </View>

                <View style={styles.singleParaView}>
                    <Text style={styles.subHeading}>How do we share the information ?</Text>

                    <Text style={styles.singlePara}>
                        We may share your information with third parties in the following circumstances:
                        With your consent, we may share your information with third parties for their marketing purposes.
                        With our service providers, such as cloud storage providers, data analytics providers, and customer
                        support providers, to help us deliver and improve our services.
                        As required by law or to comply with legal process.
                        In connection with a merger, acquisition, or sale of assets, as well as in the unlikely event of
                        bankruptcy.
                    </Text>
                </View>

                <View style={styles.singleParaView}>
                    <Text style={styles.subHeading}>How do we handle children’s information ?</Text>

                    <Text style={styles.singlePara}>
                        Our app is designed for a general audience and does not knowingly collect personal information
                        from children under 13 years of age. If we learn that we have collected personal information from a
                        child under 13 years of age, we will take steps to delete the information as soon as possible.
                        For children under 18 years of age, we recommend that parents and guardians review this Privacy
                        Policy with their child and monitor their use of our app. We also recommend that parents and
                        guardians take an active role in their child’s use of our app and any other digital services.
                    </Text>
                </View>
                <View style={styles.singleParaView}>
                    <Text style={styles.subHeading}>How can you contact us ?</Text>
                    <Text style={styles.singlePara}>
                        If you have any questions or concerns about this Privacy Policy, or if you would like to exercise your
                        rights under applicable privacy laws, you may contact us at {"\n"}[support@wolfberryllc.com].
                    </Text>
                </View>
                <View style={styles.singleParaViewLast}>
                    <Text style={styles.subHeading}>Changes to the Privacy Policy:</Text>
                    <Text style={styles.singleParaLst}>
                        We may update this Privacy Policy from time to time. If we make significant changes to the Privacy
                        Policy, we will notify you by email or through our app. We encourage you to review the Privacy
                        Policy periodically to stay informed about our privacy practices.
                    </Text>
                </View>

                <View style={{ marginBottom: 100 }}>
                    <Button title={'Go Back Home'} onPress={() => { navigation.goBack(); }} />
                </View>



            </ScrollView>
        </SafeAreaView >
    )
}

export default PrivacyPolicies;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    containerInner: {
        paddingHorizontal: 24,
        paddingTop: 50,
    },
    mainHeadingView: {
        alignItems: 'center',
    },
    mainHeading: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 20
    },
    singleParaView: { marginVertical: 10 },
    subHeading: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    singlePara: {
        textAlign: 'justify',
    },
    singleParaViewLast: { marginTop: 10 },
    singleParaLst: {
        textAlign: 'justify',
        marginBottom: 30
    }

});
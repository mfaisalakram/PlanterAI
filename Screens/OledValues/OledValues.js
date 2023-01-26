import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';


const OledValues = () => {

  const route = useRoute();
  const data = route?.params?.state?.data;

  return (
    <View style={styles.container}>

    </View>
  );
};
export default OledValues;

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

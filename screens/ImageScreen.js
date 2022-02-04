/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';

import MyCustomComponent from '../CustomFastImage';
const ImageScreen: () => Node = () => {
  const imgPlaceholder = require('../assets/images/placeholder.png');
  const [url, setUrl] = useState('');
  const [url2, setUrl2] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setUrl('https://unsplash.it/400/400?image=1');
    }, 5000);

    setTimeout(() => {
      setUrl2('https://unsplash.it/400/400?image=2');
    }, 10000);
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />

      <View style={styles.containerOne}>
        <MyCustomComponent
          source={url ? { uri: url } : imgPlaceholder}
          priority="high"
          resizeMode="stretch"
        />
      </View>
      <View style={styles.containerTwo}>
        <MyCustomComponent
          source={url2 ? { uri: url2 } : imgPlaceholder}
          priority="high"
          resizeMode="stretch"
          style={styles.eightyPercent}
        />
      </View>
    </SafeAreaView>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  containerOne: {
    height: 200,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  containerTwo: {
    marginTop: 20,
    height: 200,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  eightyPercent: { height: '80%', width: '80%' },
});

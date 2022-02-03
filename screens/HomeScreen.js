import React from 'react';
import { SafeAreaView, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        title="Go to Image Gallery"
        onPress={() => navigation.navigate('ImageGallery')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

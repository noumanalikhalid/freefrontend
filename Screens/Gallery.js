import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Galleryapp from '../Components/Galleryapp';
import LinearGradient from 'react-native-linear-gradient';

const Gallery = () => {
  return (
    <>
      <LinearGradient
        colors={['rgba(22,48,32,1)', 'rgba(48,77,48,1)', 'rgba(48,77,48,1)','rgba(45, 75, 45, 1)' ,'rgba(144, 164, 144, 1)']}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={[tw`flex-1`]}>
          <Galleryapp />
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Gallery;

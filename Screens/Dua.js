import React from 'react';
import {SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Dualist from '../Components/Dualist';
import tw from 'tailwind-react-native-classnames';

const Dua = () => {
  return (
    <>
      <LinearGradient
        colors={[
          'rgba(22,48,32,1)',
          'rgba(48,77,48,1)',
          'rgba(48,77,48,1)',
          'rgba(45, 75, 45, 1)',
          'rgba(144, 164, 144, 1)',
        ]}
        style={tw`flex-1`}>
        <SafeAreaView style={tw`flex-1`}>
          <Dualist />
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Dua;

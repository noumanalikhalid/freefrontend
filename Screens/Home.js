import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import SwitchComponent from '../Components/SwitchComponent'; // Assuming SwitchComponent is in the same directory
import tw from 'tailwind-react-native-classnames';
import {Text} from 'react-native-elements';
import Buttons from '../Components/Buttons';
import Footer from '../Components/Footer';
import LinearGradient from 'react-native-linear-gradient';
import Search from './Search';

const Home = () => {
  return (
    <>
      <ScrollView>
        <LinearGradient
          colors={[
            'rgba(22,48,32,1)',
            'rgba(48,77,48,1)',
            'rgba(48,77,48,1)',
            'rgba(45, 75, 45, 1)',
            'rgba(144, 164, 144, 1)',
          ]}
          // start={{ x: 0, y: 0 }}
          // end={{ x: 1, y: 1 }}
          // locations={[0.3127, 2.2614]}
          style={tw`flex-1`}>
          <SafeAreaView>
            <View style={[tw`w-full  h-80`]}>
              <ImageBackground
                source={require('../Assets/bg.png')}
                style={{
                  flex: 1,
                  resizeMode: 'cover',
                  justifyContent: 'center',
                  position: 'relative',
                }}>
                <View
                  style={[
                    tw`flex justify-center items-center  mt-3  `,
                    {marginBottom: 130, padding: 20},
                  ]}>
                  <SwitchComponent />
                </View>
              </ImageBackground>
            </View>
            <Buttons />
            <Footer />
          </SafeAreaView>
        </LinearGradient>
      </ScrollView>
    </>
  );
};

export default Home;

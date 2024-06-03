import React from 'react'
import { SafeAreaView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MasDua from '../Components/MasDua';
import tw from 'tailwind-react-native-classnames';

const MasnonDua = ({ route }) => {
  const { item } = route.params;
  return (
   <>
 <LinearGradient
      colors={['rgba(22,48,32,1)', 'rgba(48,77,48,1)', 'rgba(48,77,48,1)','rgba(45, 75, 45, 1)' ,'rgba(144, 164, 144, 1)']}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[tw``, { marginTop: 50 }]}>
         <MasDua item ={item} />
         {console.log("this is ",item)}
        </View>
      </SafeAreaView>
    </LinearGradient>
   </>
  )
}

export default MasnonDua

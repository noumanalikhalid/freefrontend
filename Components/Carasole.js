import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import tw from 'tailwind-react-native-classnames';

const Carasole = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.166:5000/namesAllah');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({ item, index }) => (
    <View key={index} style={tw`flex justify-center items-center bg-gray-200 p-5 rounded-lg h-96 shadow-md`}>
      <Text style={tw`text-lg text-black font-bold mb-2`}>{item.NameEng}</Text>
      <Text style={tw`text-xl text-black p-2 `}>{item.NameArabic}</Text>
      <Text style={tw`text-sm text-black p-2 font-semibold`}> The Beneficent One</Text>
      <Text style={tw`text-base text-black mb-4`}>{item.Description}</Text>
    </View>
  );

  return (
    <View style={[tw`flex items-center justify-center h-full p-24`, {marginTop:120 }]}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        loop
        autoplay
        autoplayInterval={2000}
      />
    </View>
  );
};

export default Carasole;

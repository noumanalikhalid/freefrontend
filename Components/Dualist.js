import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios'; // Import axios

const Dualist = () => {
  const navigation = useNavigation();
  const [duas, setDuas] = useState([]);
  const [selectedDua, setSelectedDua] = useState(null); // New state for selected dua

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.166:5000/get-Duas');
        setDuas(response.data);
      } catch (error) {
        console.error('Failed to fetch duas:', error);
      }
    };

    fetchData();
  }, []);

  const navigateToMasDua = item => {
    setSelectedDua(item); // Update the selected dua state
    // console.log("item", item);
    // console.warn(item)
    navigation.navigate('MasnonDua', {item});
  };

  return (
    <>
      <SafeAreaView
        style={[tw`flex-1 justify-center items-center`, {marginTop: 50}]}>
        <View style={[tw`bg-white rounded-lg`, {width: 300, height: 500}]}>
          <FlatList
            data={duas}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigateToMasDua(item)}>
                <View style={styles.item}>
                  <Text style={styles.text}>{item.name}</Text>
                  <View style={styles.line} />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    paddingVertical: 15, // Vertical padding
    paddingHorizontal: 15, // Horizontal padding
    fontSize: 18,
    height: 56,
  },
  text: {
    marginBottom: 8,
    color: 'black', // Space between text and line
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '90%',
  },
});

export default Dualist;

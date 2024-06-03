import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GoogleGenerativeAI } from "@google/generative-ai";
import LinearGradient from 'react-native-linear-gradient';

const Know = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const flatListRef = useRef(null);
  const API_KEY = 'AIzaSyDI0zPU1s5-1WeaKCspjOe0tkeHjpbCem8';

  const handleSend = () => {
    if (input.trim()) {
      setChat(prevChat => [...prevChat, { type: 'user', text: input }]);
      setIsLoading(true);
      generateResponse(input);
      setInput('');
    }
  };

  const generateResponse = async (prompt) => {
    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      setChat(prevChat => [...prevChat, { type: 'bot', text }]);
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [chat]);

  const renderItem = ({ item }) => (
    <View style={tw`mb-2 border border-black`}>
      <Text style={tw`${item.type === 'user' ? 'text-black bg-gray-300 p-3 rounded-md' : 'text-white bg-gray-500 p-3 rounded-md'}`}>
        {item.type === 'user' ? 'You: ' : 'Bot: '}
        {item.text}
      </Text>
    </View>
  );

  return (
    <LinearGradient
      colors={[
        'rgba(22,48,32,1)',
        'rgba(48,77,48,1)',
        'rgba(48,77,48,1)',
        'rgba(45, 75, 45, 1)',
        'rgba(144, 164, 144, 1)',
      ]}
      style={{ flex: 1 }}
    >
      <View style={tw`flex-1 p-8 pt-16 `}>
        <FlatList
          ref={flatListRef}
          data={chat}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={tw`flex-1 mb-4`}
          onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
        />
        <View style={tw`flex-row items-center justify-between`}>
          <TextInput
            style={tw`flex-1  p-2 rounded`}
            placeholder="Type a message"
            value={input}
            onChangeText={setInput}
          />
          <Button title="Send" onPress={handleSend} disabled={isLoading || !input.trim()} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Know;

import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { usePostSearchByNameMutation } from '../store/services/tvmazeApi';

export function InputSearch() {
  const [postSearch] = usePostSearchByNameMutation();
  const [input, setInput] = useState<string>('');

  const handleInputChange = (text: string) => {
    setInput(text);
  };

  const handleSearch = async () => {
    await postSearch(input).then(resp => {
      try {
        console.log(resp);
        if (resp.data) {
          console.log('Works');
        } else {
          console.log('fail');
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#FFF"
        onChangeText={handleInputChange}
        value={input}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '65%',
  },
  input: {
    height: 35,
    paddingHorizontal: 15,
    marginTop: 10,
    borderRadius: 20,
    color: '#FFF',
    backgroundColor: '#73A7B6',
  },
});

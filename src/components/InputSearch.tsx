import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { RootState } from '../store';
import { usePostSearchByNameMutation } from '../store/services/tvmazeApi';
import { setDataSearch } from '../store/slices/detailsSlice';
import { useDispatch, useSelector } from 'react-redux';

export function InputSearch() {
  const dispatch = useDispatch();
  const [postSearch] = usePostSearchByNameMutation();
  const dataSearched = useSelector((state: RootState) => state.details.search);
  const [input, setInput] = useState<string>('');

  const handleInputChange = (text: string) => {
    setInput(text);
  };

  const handleSearch = async () => {
    await postSearch(input).then(resp => {
      try {
        if (resp.data) {
          const { data } = resp;
          dispatch(setDataSearch(data));
        } else console.log(resp);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const handlerClearSearch = () => {
    dispatch(setDataSearch([]));
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
      {dataSearched?.length > 0 ? (
        <TouchableOpacity
          style={styles.clear}
          onPress={() => handlerClearSearch()}>
          <Text style={{ color: '#FFF', fontWeight: '800' }}>X</Text>
        </TouchableOpacity>
      ) : null}
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
    posiiton: 'relative',
  },
  clear: {
    position: 'absolute',
    top: 16,
    right: 15,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 20,
  },
});

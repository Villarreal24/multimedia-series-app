import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  // Puedes añadir propiedades adicionales que necesites aquí
}

const InputSearch: React.FC<InputProps> = props => {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      placeholder="Search"
      placeholderTextColor="#FFF"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    width: '65%',
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 25,
    color: '#FFF',
    backgroundColor: '#73C9E0',
  },
});

export default InputSearch;

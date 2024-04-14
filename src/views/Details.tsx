import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { ShowDetails } from '../components/ShowDetails';

export function Details() {
  const data = useSelector((state: RootState) => state.details.data);

  return (
    <View style={styles.container}>
      <ShowDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A3E44',
  },
});

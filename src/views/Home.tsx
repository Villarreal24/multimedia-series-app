import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import React, { Component } from 'react';
import { Serie } from '../types/types';
import { useGetAllSeriesQuery } from '../store/services/tvmazeApi';
import InputSearch from '../components/InputSearch';

export function Home() {
  const { data, isLoading } = useGetAllSeriesQuery();

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.title}>Hello, what do you want to search?</Text>
        <InputSearch />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.columnContainer}>
          {isLoading !== true ? (
            data?.map((data: Serie, index: number) => (
              <View key={index} style={styles.itemContainer}>
                <Text style={styles.name}>{data.name}</Text>
                <Image
                  source={{ uri: data.image.medium }}
                  style={styles.image}
                />
              </View>
            ))
          ) : (
            <Text>Cargando...</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    height: '20%',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
    width: '60%',
    paddingTop: 20,
  },
  scrollView: {
    flex: 1,
    paddingTop: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#2A3E44',
  },
  columnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  itemContainer: {
    width: '48%',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 15,
  },
  name: {
    color: '#FFF',
    paddingBottom: 5,
  },
  image: {
    width: 130,
    height: 180,
    borderRadius: 20,
  },
});

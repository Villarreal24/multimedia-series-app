import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Serie } from '../types/types';
import { useGetAllSeriesQuery } from '../store/services/tvmazeApi';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import InputSearch from '../components/InputSearch';
import { setDetails } from '../store/slices/detailsSlice';

export function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllSeriesQuery();

  const onPressHandler = payload => {
    dispatch(setDetails(payload));
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.title}>Hello, what do you want to search?</Text>
        <InputSearch />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.columnContainer}>
          {isLoading !== true ? (
            data?.map((item: Serie, index: number) => (
              <TouchableOpacity
                key={index}
                style={styles.itemContainer}
                onPress={() => onPressHandler(item)}>
                <Text style={styles.name}>{item.name}</Text>
                <Image
                  source={{ uri: item.image.medium }}
                  style={styles.image}
                />
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>Loading...</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#468EA2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    marginTop: 30,
    height: '20%',
    width: '100%',
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
  loadingContainer: {
    width: '100%',
    alignItems: 'center',
  },
  loadingText: {
    justifyContent: 'center',
    fontSize: 26,
    fontWeight: '600',
    color: '#FFF',
  },
});

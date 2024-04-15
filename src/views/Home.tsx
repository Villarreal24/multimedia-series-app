import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useGetAllSeriesQuery } from '../store/services/tvmazeApi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigation } from '@react-navigation/native';
import { InputSearch } from '../components/InputSearch';
import { setDetails } from '../store/slices/detailsSlice';
import { TvShow } from '../types/types';

export function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllSeriesQuery();
  const [allShows, setAllShows] = useState<TvShow[]>([]);
  const dataSearched = useSelector((state: RootState) => state.details.search);

  // ==== USE EFFECT TO DETECT SEARCH AND SWITCH BETWEEN DATA ====
  useEffect(() => {
    if (dataSearched.length > 0) {
      let newArray = [];
      dataSearched.forEach(element => {
        newArray.push(element.show);
      });
      setAllShows(newArray);
    } else {
      setAllShows(data);
    }
  }, [dataSearched, data]);

  // ==== FUNCTION TO MOVE TO SCREEN DETAILS OF SHOW PRESSED ====
  const onPressShow = payload => {
    dispatch(setDetails(payload));
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.title}>Hello, what do you want to search?</Text>
        <InputSearch />
      </View>
      {!isLoading && allShows ? (
        <ScrollView style={styles.scrollView}>
          <View style={styles.columnContainer}>
            {allShows.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.itemContainer}
                onPress={() => onPressShow(item)}>
                {/* <Text style={styles.name}>{item.name}</Text> */}
                <Image
                  source={{ uri: item.image?.medium }}
                  style={styles.image}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
          <ActivityIndicator size="large" color="#FFF" />
        </View>
      )}
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
  scrollView: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#2A3E44',
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
    paddingTop: 50,
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

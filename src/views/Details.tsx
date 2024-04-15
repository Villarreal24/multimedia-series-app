import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { ShowDetails } from '../components/ShowDetails';
import { ListSeasons } from '../components/ListSeasons';
import { useGetEpisodesByIdQuery } from '../store/services/tvmazeApi';

export function Details() {
  const dataDetails = useSelector((state: RootState) => state.details.data);
  const id = dataDetails.id;
  const { data: dataEpisodes, isLoading } = useGetEpisodesByIdQuery(id);

  return (
    <ScrollView style={styles.container}>
      {!isLoading && dataEpisodes ? (
        <View>
          <ShowDetails data={dataDetails} />
          <ListSeasons data={dataEpisodes} />
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="xl" color="#FFF" />
          <Text style={styles.loadingText}>Loading</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#2A3E44',
  },
  loadingContainer: {
    marginTop: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 26,
    color: '#FFF',
    fontWeight: '600',
  },
});

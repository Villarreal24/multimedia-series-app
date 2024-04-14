import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { ShowDetails } from '../components/ShowDetails';
import { ListSeasons } from '../components/ListSeasons';
import { useGetEpisodesByIdQuery } from '../store/services/tvmazeApi';

export function Details() {
  const dataDetails = useSelector((state: RootState) => state.details.data);
  const id = dataDetails.id;
  console.log(id);
  const { data: dataEpisodes, isLoading } = useGetEpisodesByIdQuery(id);
  // console.log('DATA: ', data);

  return (
    <ScrollView style={styles.container}>
      {dataDetails && dataEpisodes ? (
        <View>
          <ShowDetails data={dataDetails} />
          <ListSeasons data={dataEpisodes} />
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
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
    marginTop: '50%', // Eliminar al cambiar por un Spinner
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 26,
    color: '#FFF',
    fontWeight: '600',
  },
});

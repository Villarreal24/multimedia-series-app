import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { RootState } from '../store';
import { EpisodeDetails } from '../components/EpisodeDetails';
import { useSelector } from 'react-redux';

export function Episode() {
  const dataEpisode = useSelector((state: RootState) => state.seasons.data);

  return (
    <ScrollView style={styles.container}>
      <EpisodeDetails data={dataEpisode} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A3E44',
  },
});

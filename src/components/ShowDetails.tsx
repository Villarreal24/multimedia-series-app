import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { RootState } from '../store';
import { useSelector } from 'react-redux';

export function ShowDetails() {
  const data = useSelector((state: RootState) => state.details.data);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: data.image.original }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.description}>{data.summary}</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.genreText}>Genero</Text>
          {data.genres.map((item, idx) => (
            <Text key={idx} style={styles.itemGenre}>
              {item}
            </Text>
          ))}
        </View>
        {data.schedule.time !== '' ? (
          <View style={styles.rowContainer}>
            <Text style={styles.genreText}>Schedule</Text>
            <Text style={styles.itemGenre}>
              {data.schedule.days} at {data.schedule.time}
            </Text>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 450,
    borderRadius: 20,
  },
  infoContainer: {
    padding: 20,
    paddingHorizontal: 25,
  },
  title: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: '800',
  },
  description: {
    marginTop: 10,
    color: '#9C9C9C',
    fontSize: 16,
    marginBottom: 15,
  },
  genreText: {
    color: '#FFF',
    paddingRight: 20,
  },
  rowContainer: {
    marginTop: 8,
    flexDirection: 'row',
  },
  itemGenre: {
    paddingHorizontal: 5,
    color: '#9C9C9C',
  },
});

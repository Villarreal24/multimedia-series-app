import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import HTML from 'react-native-render-html';
import { TvShow } from '../types/types';

export function ShowDetails({ data }: { data: TvShow }) {
  const { width } = useWindowDimensions();

  const tagStyles = {
    p: styles.description,
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image.original }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{data.name}</Text>
        <HTML
          tagsStyles={tagStyles}
          source={{ html: data.summary }}
          contentWidth={width}
        />

        <View style={styles.rowContainer}>
          <Text style={styles.genreText}>Rating</Text>
          <Text style={styles.itemGenre}>{data.rating.average}</Text>
        </View>

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
    </View>
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

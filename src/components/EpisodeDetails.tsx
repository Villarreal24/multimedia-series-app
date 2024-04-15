import {
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import HTML from 'react-native-render-html';
import { Episode } from '../types/types';

export function EpisodeDetails({ data }: { data: Episode }) {
  const { width } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const tagStyles = {
    p: styles.description,
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator style={styles.loader} size="large" color="#FFF" />
      )}
      <Image
        source={{ uri: data.image.original }}
        style={styles.image}
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          {data.season} x {data.number} - {data.name}
        </Text>
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
          <Text style={styles.genreText}>Duration</Text>
          <Text style={styles.itemGenre}>{data.runtime} minutes</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 0,
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
    width: 90,
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
  loader: {
    position: 'absolute',
    left: '45%',
    top: '20%',
    zIndex: 1,
  },
});

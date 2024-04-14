import {
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import HTML from 'react-native-render-html';
import { Episode } from '../types/types';

export function ListSeasons({ data }: { data: Episode }) {
  const { width } = useWindowDimensions();
  const [seasons, setSeasons] = useState(1);
  const [seasonSelected, setSeasonSelected] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    data.forEach((element, idx) => {
      if (element.season > seasons) {
        setSeasons(element.season);
      }
    });
  }, [data]);

  const tagStyles = {
    p: styles.description,
  };

  //   const toggleDescription = () => {};

  return (
    <View style={styles.container}>
      <Text>Numero de temporadas: {seasons}</Text>
      {/* <Picker
        selectedValue={seasonSelected}
        style={{ height: 50, width: 150 }}
        onValueChange={(item, idx) => setSeasonSelected(item)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker> */}

      {data.map((item, idx) => (
        <View key={idx} style={styles.episodeContainer}>
          <Image source={{ uri: item.image.medium }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{item.name}</Text>
            {/* <View style={styles.descriptionContainer}> */}
            <HTML
              tagsStyles={tagStyles}
              //   source={{ html: item.summary }}
              source={{
                html: `${item.summary.substring(0, 145)} ...`,
              }}
              contentWidth={width}
            />
            {/* {item.summary.length > 140 && (
                <TouchableOpacity onPress={toggleDescription}>
                  <Text style={styles.readMore}>
                    {showFullDescription ? 'Ver menos...' : 'Ver más...'}
                  </Text>
                </TouchableOpacity>
              )} */}
            {/* </View> */}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  episodeContainer: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  image: {
    height: 100,
    width: 160,
    borderRadius: 5,
  },
  infoContainer: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 17,
    color: '#9C9C9C',
    fontWeight: '600',
  },
  //   descriptionContainer: {
  //     flexDirection: 'row',
  //   },
  description: {
    marginTop: 0,
    width: '74%',
    color: '#9C9C9C',
    fontSize: 11,
  },
  //   readMore: {
  //     color: 'blue',
  //     fontWeight: '700',
  //   },
});

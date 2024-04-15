import {
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import HTML from 'react-native-render-html';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Episode } from '../types/types';
import { setEpisode } from '../store/slices/seasonsSlice';

export function ListSeasons({ data }: { data: Episode }) {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [numSeasons, setNumSeasons] = useState(0);
  const [seasonSelected, setSeasonSelected] = useState(1);
  const seasons = Array(numSeasons)
    .fill(0)
    .map((_, index) => index + 1);

  useEffect(() => {
    data.forEach(element => {
      if (element.season > numSeasons) {
        setNumSeasons(element.season);
      }
    });
  }, [data]);

  const onPressHandler = payload => {
    dispatch(setEpisode(payload));
    navigation.navigate('Episode');
  };

  const tagStyles = {
    p: styles.description,
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={seasonSelected}
        style={{ height: 50, width: 200, color: '#FFF' }}
        onValueChange={(item, idx) => setSeasonSelected(item)}>
        {seasons.map((item, idx) => (
          <Picker.Item key={idx} label={`Temporada ${item}`} value={item} />
        ))}
      </Picker>

      {data.map((item, idx) => (
        <View key={idx}>
          {item.season === seasonSelected ? (
            <TouchableOpacity
              style={styles.episodeContainer}
              onPress={() => onPressHandler(item)}>
              <Image
                source={{ uri: item.image?.medium }}
                style={styles.image}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.title}>
                  {item.number} - {item.name}
                </Text>
                <HTML
                  tagsStyles={tagStyles}
                  source={{
                    html: item.summary
                      ? `${item.summary?.substring(0, 145)} ...`
                      : 'None',
                  }}
                  contentWidth={width}
                />
              </View>
            </TouchableOpacity>
          ) : null}
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
    width: '75%',
    fontSize: 17,
    color: '#FFF',
    fontWeight: '600',
  },
  description: {
    marginTop: 0,
    width: '74%',
    color: '#9C9C9C',
    fontSize: 11,
  },
});

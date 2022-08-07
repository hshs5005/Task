import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Image from 'react-native-fast-image';
import {FilmType} from '../utils/typings';

type FilmCardProps = {
  film: FilmType;
  onPress: Function;
};

export const FilmCard = ({film, onPress}: FilmCardProps) => {
  const handleOnPress = () => {
    onPress(film.id, film.title);
  };
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.container}>
        <Image source={{uri: film.image}} style={styles.image} />
        <View style={styles.box}>
          <Text numberOfLines={1} style={styles.title}>
            {film.title}
          </Text>
          <Text numberOfLines={2} style={styles.detail}>
            {film.description}
          </Text>
          <View style={styles.duration}>
            <Text style={styles.detail}>Duration : </Text>
            <Text style={styles.detail}>{film.running_time} mins</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.dir}>
              <Text style={styles.detail}>Director :</Text>
              <Text style={styles.detail}>{film.director}</Text>
            </View>
            <View style={styles.producer}>
              <Text style={styles.detail}>Producer :</Text>
              <Text numberOfLines={1} style={styles.detail}>
                {film.producer}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222222',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.29,
    width: '100%',
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 12,
    marginBottom: 14,
    padding: 12,
    flexDirection: 'row',
  },
  image: {width: 75, height: 113, borderRadius: 6},
  box: {paddingLeft: 8, flex: 1},
  title: {color: '#fefefe', fontSize: 15, fontWeight: '500'},
  duration: {
    flexDirection: 'row',
    paddingVertical: 4,
    borderTopWidth: 0.5,
    borderColor: '#010101',
    marginTop: 4,
  },
  info: {
    flexDirection: 'row',
    paddingTop: 6,
    borderTopWidth: 0.5,
    borderColor: '#010101',
    justifyContent: 'space-between',
  },
  detail: {fontSize: 12, color: '#cacaca'},
  dir: {flex: 1},
  producer: {flex: 1, marginLeft: 6},
});

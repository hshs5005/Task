import {useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import Image from 'react-native-fast-image';
import {api} from '../utils/api';
import {DEVICE_WIDTH} from '../utils/constants';
import {FilmType} from '../utils/typings';

export const Anime = () => {
  const {
    params: {id, title},
  } = useRoute();
  const [info, setInfo] = useState<FilmType>();

  const getInfo = useCallback(async () => {
    try {
      const {data} = await api.get(`/${id}`);
      setInfo(data);
    } catch (e) {}
  }, [id]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>{title}</Text>
      </View>
      {!info && (
        <ActivityIndicator color="red" size="large" style={styles.indicator} />
      )}
      {info && (
        <View>
          <Image
            source={{uri: info.movie_banner}}
            style={{width: DEVICE_WIDTH, height: DEVICE_WIDTH * 0.56}}
          />

          <View style={styles.box}>
            <Text
              style={
                styles.name
              }>{`${info.original_title_romanised}(${info.original_title})`}</Text>
            <Text style={styles.detail}>{info.description}</Text>
            <View style={styles.divider} />
            <View style={styles.duration}>
              <Text style={styles.detail}>Duration : </Text>
              <Text style={styles.detail}>{info.running_time} mins</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.info}>
              <View>
                <Text style={styles.detail}>Director :</Text>
                <Text style={styles.detail}>{info.director}</Text>
              </View>
              <View>
                <Text style={styles.detail}>Producer :</Text>
                <Text style={styles.detail}>{info.producer}</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.row}>
              <View>
                <Text style={styles.detail}>Rotten Tomatoes</Text>
                <Text style={styles.detail}>{info.rt_score}/100</Text>
              </View>
              <View>
                <Text style={styles.detail}>Release Date</Text>
                <Text style={styles.detail}>{info.release_date}</Text>
              </View>
            </View>
            <View style={styles.divider} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#121212',
  },
  heading: {fontSize: 24, fontWeight: '500', color: 'white'},
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222',
    paddingVertical: 14,
  },
  box: {padding: 12},
  indicator: {marginTop: 100},
  detail: {fontSize: 13, color: '#cacaca'},
  name: {
    fontSize: 15,
    color: '#ffcaca',
    marginBottom: 6,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  duration: {
    flexDirection: 'row',
    paddingVertical: 4,
    borderTopWidth: 0.5,
    borderColor: '#010101',
  },
  divider: {
    backgroundColor: '#565656',
    height: 0.5,
    width: '100%',
    marginVertical: 8,
  },
  info: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderColor: '#010101',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

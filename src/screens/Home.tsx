import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FilmCard} from '../components/FilmCard';
import {api} from '../utils/api';
import {FilmType} from '../utils/typings';

export const Home = () => {
  const {navigate} = useNavigation();
  const [films, setFilms] = useState<FilmType[]>();

  const getFilms = useCallback(async () => {
    try {
      const {data} = await api.get('/');
      setFilms(data);
    } catch (e) {}
  }, []);

  const handleOnPress = (id: string, title: string) => {
    navigate('Anime', {id, title});
  };

  useEffect(() => {
    getFilms();
  }, [getFilms]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Films</Text>
      </View>
      {!films && (
        <ActivityIndicator color="red" size="large" style={styles.indicator} />
      )}
      {films && films.length > 0 && (
        <FlatList
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          data={films}
          renderItem={({item}) => {
            return <FilmCard film={item} onPress={handleOnPress} />;
          }}
        />
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
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222',
  },
  list: {padding: 12},
  indicator: {marginTop: 100},
});

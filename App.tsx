import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Main} from './src/navigation/navigation';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={style.saw}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  saw: {flex: 1},
});

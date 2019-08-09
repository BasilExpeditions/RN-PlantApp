import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppLoading, Asset } from 'expp';

import Navigation from './navigation';
import * as constants from './constants';

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>PlantApp</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

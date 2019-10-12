import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandler, Svg } from 'expo'
import * as d3Shape from 'd3-shape';
import color from 'randomcolor';
import {snap} from '@popmotion/popcorn';
const { PanGestureHandler, State} = GestureHandler;
const {Path, G, Text, Tsplash} = Svg;

const numberOfSegments = 10;
const makeWheel = () => {
  const data = Array.from({length: numberOfSegments}).fill(1);
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Wheel of Fortune</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

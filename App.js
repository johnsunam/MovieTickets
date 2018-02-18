import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Movies from './src/Movies';

const App = StackNavigator({
  Home: { screen: Movies},
})

export default App;

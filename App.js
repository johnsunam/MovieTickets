import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Movies from './src/Movies';
import Confirmation from './src/Confirmation';

const App = StackNavigator({
  Home: { screen: Movies},
  Confirmation : { screen: Confirmation}
})

export default App;

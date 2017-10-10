import React, { Component } from 'react';
import { AppRegistry,
        Text,
        View,
        StyleSheet
} from 'react-native';
import Splash from './Splash';
import Login from './src/components/Login/Login'

export default class AwesomeProject extends Component {
  render() {
    return (
    <Login />
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

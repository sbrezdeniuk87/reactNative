import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'

import * as firebase from "firebase";
firebase.initializeApp({apiKey: "AIzaSyCfT_IM5P4Fj1D1RfLxhR860CJi6i3wUdg",
                        authDomain: "black-jack-5d7d7.firebaseapp.com",
                        databaseURL: "https://black-jack-5d7d7.firebaseio.com/",
                        storageBucket: "gs://black-jack-5d7d7.appspot.com"});

import PlayTable from './containers/PlayTable'
import Begin from './containers/Begin'
import Login from './containers/Login'
import Registration from './containers/Registration'
import Profil from './containers/Profil'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const MainNavigator = createStackNavigator(
    {
      BEGIN: {screen: Begin},
      PLAY_TABLE: {screen: PlayTable},
      LOGIN: {screen: Login},
      REGISTRATION: {screen: Registration},
      PROFIL: {screen: Profil}
    },
    {
        headerMode: 'none'
    }
)

const AppContainer = createAppContainer(MainNavigator)

//export default App

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <AppContainer />
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
});

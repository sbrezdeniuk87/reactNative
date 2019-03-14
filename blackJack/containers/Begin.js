import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground, Image, Button } from 'react-native';
import {  widthPercentageToDP as wp } from 'react-native-responsive-screen';

import * as firebase from "firebase";

export default class Begin extends Component {

   constructor(props) {
          super(props);
   }


  render() {
    const w = wp(100)
    return (
        <ImageBackground  source={require('../images/tableFon.png')} style={styles.backgroundImage}>
          <View style={[styles.container, {width: w}]}>
            <Image source={require('../images/logo.jpg')} style={styles.login}/>
            <View style={{marginBottom: 10}}><Button title='Вход' color='#E9C85F' onPress={() => this.props.navigation.navigate('LOGIN')}/></View>
            <View style={{marginBottom: 10}}><Button title='Зарегистрироваться' color='#E9C85F' onPress={() => this.props.navigation.navigate('REGISTRATION')}/></View>
          </View>
        </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#000',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10
  },
  login:{
    marginBottom: 10,
    width: undefined,
    resizeMode: "stretch"
  },
  backgroundImage: {
     flex: 1,
     width: '100%',
     height: '100%',
     resizeMode: 'cover'
  }
});


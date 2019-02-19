import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const Card = props => {
   return(
        <Image source={props.card.link} style={(props.width > props.height) ? styles.containerRotate : styles.container}/>
   )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 100,
  },
  containerRotate: {
      width: 45,
      height: 70,
  }
});

export default Card
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window')

const Rate = props => (
    <View style={[styles.container, {top: (props.width > props.height)? 80 : 160}]}>
        <Text style={{color: '#000'}}>Сделайте ставку</Text>
        <Text style={{color: '#000'}}>{props.name}</Text>
        <Text style={{color: '#000'}}> Bank: <Text style={{fontWeight: 'bold'}}>{props.cash}</Text></Text>
        <Text style={{color: '#000'}}>Bet:      <Text style={{fontWeight: 'bold'}}>{props.bet}</Text></Text>
    </View>

)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E9C85F',
    borderRadius: 5,
    left: 5,
//    top: 160,
    padding: 5,
    fontSize: 14
  }
});

export default Rate
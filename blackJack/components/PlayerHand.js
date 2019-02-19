import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Card from './Card'

const PlayerHand = props => (
    <View style={[styles.container,{bottom: (props.width > props.height) ? 85 : 155}]}>
        {
            props.playerHandSum === 0 ? null : <Text style={styles.sum}>{props.playerHandSum}</Text>
        }
        {
            props.playerHand.map((card, index)=>{
                return(
                    <Card
                        key={index}
                        card={card}
                        width={props.width}
                        height={props.height}
                    />
                )
            })
        }
    </View>

)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center'
  },
  sum:{
    width: 20,
  	height: 20,
    color: '#000',
    backgroundColor: '#fff',
    marginRight: 5,
    textAlign: 'center'
  }
});

export default PlayerHand
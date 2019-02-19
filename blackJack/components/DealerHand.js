import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Card from './Card'

const DealerHand = props => (
    <View style={[styles.container,{top: (props.width > props.height) ? 10 : 50}]}>
        {
            props.dealerHandSum === 0 ? null : <Text style={styles.sum}>{props.dealerHandSum}</Text>
        }
        {
            props.dealerHand.map((card, index)=>{
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

export default DealerHand
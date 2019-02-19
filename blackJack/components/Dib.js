import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Dib = (props) =>{
    return (
        <ImageBackground source={props.img} style={styles.container} >
           <TouchableOpacity onPress={()=> props.createDib(props.value)}>
            <Text style={styles.money}>{props.value}</Text>
           </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 40,
    height: 40,
    marginBottom: 5
  },
  money:{
    lineHeight: 40,
    fontSize: 12,
    textAlign: 'center'
  }
});

export default Dib
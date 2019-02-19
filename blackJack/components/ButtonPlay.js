import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const ButtonPlay = (props) =>{
    return (
        <View style={styles.container}>
            <View style={styles.btn}><Button title='Играть' color='#E9C85F' disabled={props.disabledPlay} onPress={()=> props.onPlay()}/></View>
            <View style={styles.btn}><Button title='Хватит' color='#E9C85F' disabled={props.disabledEnough} onPress={()=> props.onEnough()}/></View>
            <View style={styles.btn}><Button title='Еще' color='#E9C85F' disabled={props.disabledMore} onPress={()=> props.onMore()}/></View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center'
  },
  btn:{
    marginRight: 10
  }
});

export default ButtonPlay
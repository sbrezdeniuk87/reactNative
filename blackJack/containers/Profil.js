import React, {Component} from 'react';
import {StyleSheet,
        View,
        Text,
        ImageBackground,
        Image,
        Button,
        YellowBox,
        ActivityIndicator} from 'react-native';
import {  widthPercentageToDP as wp } from 'react-native-responsive-screen';
import * as firebase from "firebase";

export default class Profil extends Component {
    _isMounted = false;
   constructor(props) {
          super(props);
          YellowBox.ignoreWarnings(['Setting a timer']);
          this.state={
            activity: true,
            name: '',
            email: '',
            cash: 0,
            uid: ''
          }
   }

   async componentDidMount(){
        this._isMounted = true;
        const that = this
        const userId = firebase.auth().currentUser.uid

        await firebase.database().ref('/users/'+userId).once('value').then(snapshot => {
            that.setState({
                name: snapshot.val().name,
                email: snapshot.val().email,
                cash: snapshot.val().cash,
                uid: userId
           })
        })
        this.setState({activity: false})
   }

   async componentDidUpdate(){
           this._isMounted = true;
           const that = this
           await firebase.database().ref('/users/'+this.state.uid).once('value').then(snapshot => {
               if (that._isMounted){
                    that.setState({
                       cash: snapshot.val().cash
                  })
               }
           })
      }

   singOut(){
        const that = this;
        firebase.auth().signOut()
            .then(() => that.props.navigation.goBack())
            .catch((error) => alert('Произошла ошибка. Попробуйте еще'))
   }

   componentWillUnmount() {
       this._isMounted = false;
     }

  render() {
    const w = wp(100)
    return (
        <ImageBackground  source={require('../images/tableFon.png')} style={styles.backgroundImage}>
          <View style={[styles.container, {width: w}]}>
            {
                this.state.activity ? <View style={styles.loading}><ActivityIndicator size="large" color="#E9C85F" /></View> : null
            }
            <Image source={require('../images/logo.jpg')} style={styles.login}/>
            <Text style={styles.name}>{this.state.name}</Text>
            <View style={{borderBottomWidth: 2, borderColor: '#fff', marginBottom: 10, marginTop: 10}}></View>
            <Text style={styles.data}>Почта: {this.state.email}</Text>
            <Text style={styles.data}>Кошелек: {this.state.cash}</Text>
            <View style={{borderBottomWidth: 2, borderColor: '#fff', marginBottom: 10, marginTop: 10}}></View>
            <View style={{marginBottom: 10}}><Button title='Выход' color='#E9C85F' onPress={() => this.singOut()}/></View>
            <View><Button title='ИГРАТЬ' color='#E9C85F' onPress={() => this.props.navigation.navigate('PLAY_TABLE')}/></View>
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
  },
  name:{
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center'
  },
  data:{
    color: '#fff',
    alignSelf: 'center'
  },
  loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 170,
      bottom: 0,
      alignItems: 'center'
    }
});


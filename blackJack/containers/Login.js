import React, {Component} from 'react';
import {StyleSheet,
        Text,
        View,
        ImageBackground,
        Image,
        Button,
        TextInput,
        ActivityIndicator,
        YellowBox } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import * as firebase from "firebase";

export default class Login extends Component {

   constructor(props) {
      super(props);
      YellowBox.ignoreWarnings(['Setting a timer']);
      this.state = {
        isLogin: true,
        isFormValid: false,
        activity: false,
        email:{
            value: '',
            errorMessage: '',
            valid: false
        },
        password:{
            value: '',
            errorMessage: '',
            valid: false
        }
      };
   }

   validateEmail(email){
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   		if (reg.test(email) === true) {
            this.setState({
                email:{
                    value: email,
                    errorMessage: '',
                    valid: true
                }
            });
            if(this.state.password.valid === true){
                this.setState({isFormValid: true});
            }
        } else {
            this.setState({
                email:{
                    value: '',
                    errorMessage: '*Введите коректно почту',
                    valid: false
                }
             });
        }
   	}

   	validatePassword(password){
       		if (password.length >= 6) {
                this.setState({
                    password:{
                        value: password,
                        errorMessage: '',
                        valid: true
                    }
                });
                if(this.state.email.valid === true){
                    this.setState({isFormValid: true});
                }

            } else {
                this.setState({
                    password:{
                        value: '',
                        errorMessage: '*Пароль должен быть не менше 6 символов',
                        valid: false
                    }
                 });
            }

       	}


   loginHandler = ()=>{

        const that = this;

       this.setState({
           activity: true
       })


      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email.value, this.state.password.value)
        .then(function (firebaseUser) {
            that.setState({
               isLogin: true,
               activity: false
            })

          that.props.navigation.navigate('PROFIL');
        })
        .catch(function (error) {
          alert("Failed To Login");
          that.setState({
             activity: false
          })
        });
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
            <TextInput
                placeholder="Email"
                placeholderTextColor='#fff'
                keyboardType='email-address'
                minLength = {3}
                style={styles.input}
                onChangeText={(email) => this.validateEmail(email)}
            />
            {
                this.state.email.errorMessage === '' ? null : <Text style={styles.error}>{this.state.email.errorMessage}</Text>
            }
            <TextInput
                placeholder="Password"
                placeholderTextColor='#fff'
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(password) => this.validatePassword(password)}
            />
             {
                this.state.password.errorMessage === '' ? null : <Text style={styles.error}>{this.state.password.errorMessage}</Text>
            }
            <View style={{marginBottom: 10}}>
                <Button
                    title='Вход'
                    color='#E9C85F'
                    disabled={!this.state.isFormValid}
                    onPress={() =>this.loginHandler()}/>
            </View>
            <View><Button title='Зарегистрироваться' color='#E9C85F' onPress={() => this.props.navigation.navigate('REGISTRATION')}/></View>
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
  input:{
    marginBottom: 10,
    borderColor: '#E9C85F',
    borderRadius: 5,
    borderWidth: 1
  },
  error:{
    marginBottom: 10,
    color: 'red'
  },
  backgroundImage: {
     flex: 1,
     width: '100%',
     height: '100%',
     resizeMode: 'cover'
  },
  loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


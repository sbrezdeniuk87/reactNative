import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Button, TextInput, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import axios from 'axios';
import * as firebase from "firebase";

export default class Registration extends Component {

   constructor(props) {
      super(props);
      this.state = {
        isLogin: false,
        isFormValid: false,
        activity: false,
        email:{
            value: '',
            errorMessage: '',
            valid: false
        },
        name:{
            value: '',
            errorMessage: '',
            valid: false
        },
        password:{
            value: '',
            errorMessage: '',
            valid: false
        },
        passwordAgain:{
            value: '',
            errorMessage: '',
            valid: false
        }
      };
   }

   validateName(name){
           if (name.length >= 3) {
               this.setState({
                   name:{
                       value: name,
                       errorMessage: '',
                       valid: true
                   }
               });
               if(this.state.email.valid === true){
                   this.setState({isFormValid: true});
               }

           } else {
               this.setState({
                   name:{
                       value: '',
                       errorMessage: '*Имя должено быть не менше 3 символов',
                       valid: false
                   }
                });
           }
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
                if(this.state.passwordAgain.valid === true){
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

    validatePasswordAgain(passwordAgain){
        if (passwordAgain === this.state.password.value) {
            this.setState({
                passwordAgain:{
                    value: passwordAgain,
                    errorMessage: '',
                    valid: true
                }
            });
            if(this.state.password.valid === true){
                this.setState({isFormValid: true});
            }

        } else {
            this.setState({
                passwordAgain:{
                    value: '',
                    errorMessage: '*Пароль должен совпадать',
                    valid: false
                }
             });
        }

    }


   onChangeHandler = async ()=>{

            const that = this;

            this.setState({
                activity: true
            })

            const dataUser = await {
                name: this.state.name.value,
                email: this.state.email.value,
                cash: 1500
            }



             await firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.state.email.value, this.state.password.value)
                    .then(function (firebaseUser) {
                        axios.put('https://black-jack-5d7d7.firebaseio.com/users/'+firebaseUser.user.uid+'.json', dataUser)
                               .then(respons => {
                                   if(respons.status === 200){
                                        that.setState({
                                           isLogin: true,
                                           activity: false
                                        })
                                       that.props.navigation.navigate('BEGIN');
                                   }


                               })
                               .catch(error => alert('Сервер не отвечает'))
                    })
                    .catch(function (error) {
                      alert("Failed To Login");
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
                placeholder="Name"
                placeholderTextColor='#fff'
                style={styles.input}
                onChangeText={(name) => this.validateName(name)}
            />
            {
                this.state.name.errorMessage === '' ? null : <Text style={styles.error}>{this.state.name.errorMessage}</Text>
            }
            <TextInput
                placeholder="Email"
                placeholderTextColor='#fff'
                keyboardType='email-address'
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
            <TextInput
                placeholder="Password Again"
                placeholderTextColor='#fff'
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(passwordAgain) => this.validatePasswordAgain(passwordAgain)}
            />
             {
                this.state.passwordAgain.errorMessage === '' ? null : <Text style={styles.error}>{this.state.passwordAgain.errorMessage}</Text>
            }
            <View style={{marginBottom: 10}}>
                <Button
                    title='Зарегистрироваться'
                    color='#E9C85F'
                    disabled={!this.state.isFormValid}
                    onPress={() =>this.onChangeHandler()}
                />
            </View>
            <View>
                <Button
                    title='Вход'
                    color='#E9C85F'
                    onPress={() => this.props.navigation.navigate('LOGIN')}
                />

            </View>
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


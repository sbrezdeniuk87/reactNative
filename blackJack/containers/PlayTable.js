import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import Rate from '../components/Rate'
import Dib from '../components/Dib'
import ButtonPlay from '../components/ButtonPlay'
import PlayerHand from '../components/PlayerHand'
import DealerHand from '../components/DealerHand'


export default class PlayTable extends Component {
   constructor(props) {
       super(props);
       this.state = {
          dibs:[
                  {
                      id: 1,
                      value: '1',
                      img: require('../images/fishkablue.png')
                  },
                  {
                      id: 2,
                      value: '5',
                      img: require('../images/fishkablue.png')
                  },
                  {
                      id: 3,
                      value: '25',
                      img: require('../images/fishkayellow.png')
                  },
                  {
                      id: 4,
                      value: '50',
                      img: require('../images/fishkayellow.png')
                  },
                  {
                      id: 5,
                      value: '100',
                      img: require('../images/fishka1.png')
                  },
                  {
                      id: 6,
                      value: '200',
                      img: require('../images/fishka1.png')
                  }
              ],
          deck: [
                  {
                      name: 'Ace',
                      suit: 'Hearts',
                      link: require('../images/cards/Hearts/Ace.jpg'),
                      value: 11
                  },
                  {
                      name: 'Two',
                      suit: 'Hearts',
                      link: require('../images/cards/Hearts/Two.jpg'),
                      value: 2
                  },
                  {
                      name: 'Three',
                      suit: 'Hearts',
                      link: require('../images/cards/Hearts/Three.jpg'),
                      value: 3
                  },
                  {
                      name: 'Four',
                      suit: 'Hearts',
                      link: require('../images/cards/Hearts/Four.jpg'),
                      value: 4
                  },
                  {
                      name: 'Five',
                      suit: 'Hearts',
                      link: require('../images/cards/Hearts/Five.jpg'),
                      value: 5
                  },
                  {
                      name: 'Six',
                      suit: 'Hearts',
                      link: require('../images/cards/Hearts/Six.jpg'),
                      value: 6
                  },
                  {
                      name: 'Seven',
                      suit: 'Hearts',
                      link: require('../images/cards/Hearts/Seven.jpg'),
                      value: 7
                  },
                  {
                      name: 'Eight',
                      suit: 'Hearts',
                      link: require('../images/cards/Hearts/Eight.jpg'),
                      value: 8
                  },
                  {
                      name: 'Nine',
                      suit: 'Hearts',
                      link: require('../images/cards/Hearts/Nine.jpg'),
                      value: 9
                  },
                  {
                      name: 'Ten',
                      suit: 'Hearts',
                      link: require('../images/cards/Hearts/Ten.jpg'),
                      value: 10
                  },
                  {
                      name: 'Jack',
                      suit: 'Hearts',
                      link: require('../images/cards/Hearts/Jack.jpg'),
                      value: 10
                  },
                  {
                      name: 'Queen',
                      suit: 'Hearts',
                      link: require('../images/cards/Hearts/Queen.jpg'),
                      value: 10
                  },
                  {
                      name: 'King',
                      suit: 'Hearts',
                      link: require('../images/cards/Hearts/King.jpg'),
                      value: 10
                  },
                  {
                      name: 'Ace',
                      suit: 'Diamonds',
                      link: require('../images/cards/Diamonds/Ace.jpg'),
                      value: 11
                  },
                  {
                      name: 'Two',
                      suit: 'Diamonds',
                      link: require('../images/cards/Diamonds/Two.jpg'),
                      value: 2
                  },
                  {
                      name: 'Three',
                      suit: 'Diamonds',
                      link: require('../images/cards/Diamonds/Three.jpg'),
                      value: 3
                  },
                  {
                      name: 'Four',
                      suit: 'Diamonds',
                      link: require('../images/cards/Diamonds/Four.jpg'),
                      value: 4
                  },
                  {
                      name: 'Five',
                      suit: 'Diamonds',
                      link: require('../images/cards/Diamonds/Five.jpg'),
                      value: 5
                  },
                  {
                      name: 'Six',
                      suit: 'Diamonds',
                      link: require('../images/cards/Diamonds/Six.jpg'),
                      value: 6
                  },
                  {
                      name: 'Seven',
                      suit: 'Diamonds',
                      link: require('../images/cards/Diamonds/Seven.jpg'),
                      value: 7
                  },
                  {
                      name: 'Eight',
                      suit: 'Diamonds',
                      link: require('../images/cards/Diamonds/Eight.jpg'),
                      value: 8
                  },
                  {
                      name: 'Nine',
                      suit: 'Diamonds',
                      link: require('../images/cards/Diamonds/Nine.jpg'),
                      value: 9
                  },
                  {
                      name: 'Ten',
                      suit: 'Diamonds',
                      link: require('../images/cards/Diamonds/Ten.jpg'),
                      value: 10
                  },
                  {
                      name: 'Jack',
                      suit: 'Diamonds',
                      link: require('../images/cards/Diamonds/Jack.jpg'),
                      value: 10
                  },
                  {
                      name: 'Queen',
                      suit: 'Diamonds',
                      link: require('../images/cards/Diamonds/Queen.jpg'),
                      value: 10
                  },
                  {
                      name: 'King',
                      suit: 'Diamonds',
                      link: require('../images/cards/Diamonds/King.jpg'),
                      value: 10
                  },
                  {
                      name: 'Ace',
                      suit: 'Clubs',
                      link: require('../images/cards/Clubs/Ace.jpg'),
                      value: 11
                  },
                  {
                      name: 'Two',
                      suit: 'Clubs',
                      link: require('../images/cards/Clubs/Two.jpg'),
                      value: 2
                  },
                  {
                      name: 'Three',
                      suit: 'Clubs',
                      link: require('../images/cards/Clubs/Three.jpg'),
                      value: 3
                  },
                  {
                      name: 'Four',
                      suit: 'Clubs',
                      link: require('../images/cards/Clubs/Four.jpg'),
                      value: 4
                  },
                  {
                      name: 'Five',
                      suit: 'Clubs',
                      link: require('../images/cards/Clubs/Five.jpg'),
                      value: 5
                  },
                  {
                      name: 'Six',
                      suit: 'Clubs',
                      link: require('../images/cards/Clubs/Six.jpg'),
                      value: 6
                  },
                  {
                      name: 'Seven',
                      suit: 'Clubs',
                      link: require('../images/cards/Clubs/Seven.jpg'),
                      value: 7
                  },
                  {
                      name: 'Eight',
                      suit: 'Clubs',
                      link: require('../images/cards/Clubs/Eight.jpg'),
                      value: 8
                  },
                  {
                      name: 'Nine',
                      suit: 'Clubs',
                      link: require('../images/cards/Clubs/Nine.jpg'),
                      value: 9
                  },
                  {
                      name: 'Ten',
                      suit: 'Clubs',
                      link: require('../images/cards/Clubs/Ten.jpg'),
                      value: 10
                  },
                  {
                      name: 'Jack',
                      suit: 'Clubs',
                      link: require('../images/cards/Clubs/Jack.jpg'),
                      value: 10
                  },
                  {
                      name: 'Queen',
                      suit: 'Clubs',
                      link: require('../images/cards/Clubs/Queen.jpg'),
                      value: 10
                  },
                  {
                      name: 'King',
                      suit: 'Clubs',
                      link: require('../images/cards/Clubs/King.jpg'),
                      value: 10
                  },
                  {
                      name: 'Ace',
                      suit: 'Spades',
                      link: require('../images/cards/Spades/Ace.jpg'),
                      value: 11
                  },
                  {
                      name: 'Two',
                      suit: 'Spades',
                      link: require('../images/cards/Spades/Two.jpg'),
                      value: 2
                  },
                  {
                      name: 'Three',
                      suit: 'Spades',
                      link: require('../images/cards/Spades/Three.jpg'),
                      value: 3
                  },
                  {
                      name: 'Four',
                      suit: 'Spades',
                      link: require('../images/cards/Spades/Four.jpg'),
                      value: 4
                  },
                  {
                      name: 'Five',
                      suit: 'Spades',
                      link: require('../images/cards/Spades/Five.jpg'),
                      value: 5
                  },
                  {
                      name: 'Six',
                      suit: 'Spades',
                      link: require('../images/cards/Spades/Six.jpg'),
                      value: 6
                  },
                  {
                      name: 'Seven',
                      suit: 'Spades',
                      link: require('../images/cards/Spades/Seven.jpg'),
                      value: 7
                  },
                  {
                      name: 'Eight',
                      suit: 'Spades',
                      link: require('../images/cards/Spades/Eight.jpg'),
                      value: 8
                  },
                  {
                      name: 'Nine',
                      suit: 'Spades',
                      link: require('../images/cards/Spades/Nine.jpg'),
                      value: 9
                  },
                  {
                      name: 'Ten',
                      suit: 'Spades',
                      link: require('../images/cards/Spades/Ten.jpg'),
                      value: 10
                  },
                  {
                      name: 'Jack',
                      suit: 'Spades',
                      link: require('../images/cards/Spades/Jack.jpg'),
                      value: 10
                  },
                  {
                      name: 'Queen',
                      suit: 'Spades',
                      link: require('../images/cards/Spades/Queen.jpg'),
                      value: 10
                  },
                  {
                      name: 'King',
                      suit: 'Spades',
                      link: require('../images/cards/Spades/King.jpg'),
                      value: 10
                  }
              ],
          bet: 0,
          cash: 1500,
          playerHand: [],
          playerHandSum: 0,
          dealerHand: [],
          dealerHandSum: 0,
          isPlay: false,
          isEnough: false,
          isMore: false
       };
    }

    onCreateDibHandler = (value) =>{
        if(this.state.bet === 0 && this.state.cash >= 0 && this.state.playerHandSum === 0){
            let bet = parseInt(this.state.bet) + parseInt(value)
            let cash = parseInt(this.state.cash) - parseInt(value)
            this.setState({
                bet,
                cash,
                isPlay: true
            })
        }
    }

    onPlayHandler= ()=>{
        let playerHand = [getCard(this.state.deck), getCard(this.state.deck)];
        let dealerHand = [getCard(this.state.deck)];
        let playerHandSum =  getSum(playerHand);
        let dealerHandSum = getSum(dealerHand);

        this.setState({
            playerHand,
            playerHandSum,
            dealerHand,
            dealerHandSum,
            isPlay: false,
            isEnough: true,
            isMore: true
        });

        if(playerHandSum === 21){
            setTimeout(()=>{
                let cash = this.state.cash + this.state.bet*3;
                this.setState({
                    playerHandSum: 0,
                    dealerHandSum: 0,
                    bet: 0,
                    cash,
                    playerHand:[],
                    dealerHand:[],
                     isEnough: false,
                     isMore: false
                });

                alert('У Вас BlackJack!!!!!!!!!!!!!');
            }, 1000);

        }else if(playerHandSum > 21){
            setTimeout(()=>{
                let cash = this.state.cash;

                this.setState({
                    playerHandSum: 0,
                    bet: 0,
                    dealerHandSum: 0,
                    playerHand:[],
                    dealerHand:[],
                    isEnough: false,
                    isMore: false
                });
                alert('Вы проиграли!!!!!!!');
            }, 1000);

        }

    }

    onMoreHandler=()=>{
        let playerHand = this.state.playerHand;
        playerHand.push(getCard(this.state.deck));
        let playerHandSum = getSum(playerHand);
        this.setState({
            playerHand,
            playerHandSum
        })

        if(playerHandSum === 21){
            setTimeout(()=>{
                let cash = this.state.cash + this.state.bet*2;
                this.setState({
                    playerHandSum: 0,
                    dealerHandSum: 0,
                    bet: 0,
                    cash,
                    playerHand:[],
                    dealerHand:[],
                    isEnough: false,
                    isMore: false
                });

                alert('У Вас BlackJack!!!!!!!!!!!!!');
            }, 1000);

        }else if(playerHandSum > 21){
            setTimeout(()=>{
                let cash = this.state.cash

                this.setState({
                    playerHandSum: 0,
                    bet: 0,
                    dealerHandSum: 0,
                    playerHand:[],
                    dealerHand:[],
                    isEnough: false,
                    isMore: false
                });
                alert('Вы проиграли!!!!!!!');
            }, 1000);

        }

    }

    onEnoughHandler=()=>{
        let dealerHand = this.state.dealerHand;
        dealerHand.push(getCard(this.state.deck));
        let dealerHandSum = getSum(dealerHand);
        this.setState({
            dealerHand,
            dealerHandSum
        });

        while(dealerHandSum < 17){
            dealerHand.push(getCard(this.state.deck));
            dealerHandSum = getSum(dealerHand);
            this.setState({
                dealerHand,
                dealerHandSum
            })
        }

        if(dealerHandSum === 21){
            setTimeout(()=>{
               let cash = this.state.cash;
               this.setState({
                    playerHandSum: 0,
                    bet: 0,
                    dealerHandSum: 0,
                    playerHand:[],
                    dealerHand:[],
                    isEnough: false,
                    isMore: false
                });

                alert('У дилера BlackJack! Вы проиграли(((((');
            }, 1000);
        }else if(dealerHandSum > 21 || this.state.playerHandSum > dealerHandSum){
            setTimeout(()=>{
                let cash = this.state.cash + this.state.bet*2;
                this.setState({
                    playerHandSum: 0,
                    dealerHandSum: 0,
                    bet: 0,
                    cash,
                    playerHand:[],
                    dealerHand:[],
                    isEnough: false,
                    isMore: false
                });

                alert('Вы выграли!!!!!!!!!!!!!');
            }, 1000);
        }else if(dealerHandSum === this.state.playerHandSum){
            setTimeout(()=>{
                let cash = this.state.cash + this.state.bet;
                this.setState({
                    playerHandSum: 0,
                    dealerHandSum: 0,
                    bet: 0,
                    cash,
                    playerHand:[],
                    dealerHand:[],
                    isEnough: false,
                    isMore: false
                });
                alert('Победила дружба!!!!!!!!!!!!!');
            }, 1000);
        }else{
            setTimeout(()=>{
                let cash = this.state.cash;

                this.setState({
                    playerHandSum: 0,
                    bet: 0,
                    dealerHandSum: 0,
                    playerHand:[],
                    dealerHand:[],
                    isEnough: false,
                    isMore: false
                });
                alert('Вы проиграли!!!!!!!');
            }, 1000);
        }
    }


    componentDidMount() {
        loc(this);
      }

      componentWillUnMount() {
        rol();
      }


  render() {
    const widthScreen = wp(100)
    const heightScreen = hp(100)
    return (
        <ImageBackground  source={require('../images/table.png')} style={styles.backgroundImage}>
          <View style={styles.container}>
            <DealerHand
                dealerHandSum={this.state.dealerHandSum}
                dealerHand={this.state.dealerHand}
                width={widthScreen}
                height={heightScreen}
            />
            <Rate cash={this.state.cash} bet={this.state.bet} width={widthScreen} height={heightScreen}/>
            <View style={(widthScreen > heightScreen) ? styles.dibsRight : styles.dibsLeft}>
                {
                    this.state.dibs.map((dib, index) =>
                        <Dib
                            value={dib.value}
                            img={dib.img}
                            createDib={this.onCreateDibHandler}
                            key={index}
                         />)
                }
            </View>
            <ButtonPlay
                onPlay={this.onPlayHandler}
                onEnough={this.onEnoughHandler}
                onMore={this.onMoreHandler}
                disabledPlay={!this.state.isPlay}
                disabledEnough={!this.state.isEnough}
                disabledMore={!this.state.isMore}
            />
            <PlayerHand
                playerHandSum={this.state.playerHandSum}
                playerHand={this.state.playerHand}
                width={widthScreen}
                height={heightScreen}
            />
          </View>
        </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#000'
  },
  backgroundImage: {
     flex: 1,
     width: '100%',
     height: '100%',
     resizeMode: 'cover'
  },
  dibsLeft: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    height: '50%',
    flexDirection: 'column'

  },
  dibsRight: {
      position: 'absolute',
      bottom: 5,
      right: 5
    }
});

function getRandomInt(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

function getCard(state){
    return state[getRandomInt(0, state.length - 1)];
}

function getSum (hand){
    let sum = 0;

    for( let i=0; i<hand.length; i++){
        let card = hand[i];
        if(card.name !== 'Ace'){
            sum += card.value;
        }
    }

    for(let i=0; i<hand.length; i++){
        let card = hand[i];
        if(card.name === 'Ace'){
            if(sum > 10){
                sum ++;
            }else{
                sum += card.value;
            }
        }
    }

    return sum;
}

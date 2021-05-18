import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default class App extends Component {
  
  componentDidMount(){
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <LottieView
          ref={animation=>{
            this.animation=animation;
          }}

          style={{
            width:400,
            height:400,
            backgroundColor:'black'
          }}
          source={require('../../assets/Loading/Loading.json')}
        />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
      backgroundColor:'#0B1B25',
      alignItems:'center',
      justifyContent:'center',
      flex:1
  }
})
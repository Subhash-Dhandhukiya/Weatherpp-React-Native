import React, { Component } from 'react';
import { View, Text ,StyleSheet,StatusBar} from 'react-native';
import GetWeatherData from '../API/GetWeatherDataByLocation'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black"/>
        <GetWeatherData/>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})
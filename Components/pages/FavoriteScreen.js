import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Favorite from '../src/FavoriteList'


export default class App extends React.Component{
  render(){
      return(
          <View>
              <StatusBar backgroundColor="black"/>
              <Favorite/>
          </View>
      );
  }
}
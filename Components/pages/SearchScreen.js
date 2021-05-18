import React, { Component } from 'react';
import { View, Text,StyleSheet,StatusBar } from 'react-native';
import {Searchbar} from 'react-native-paper'
import GetWeatherData from '../API/GetWeatherData'
import AsyncStorage from '@react-native-community/async-storage';

export default class SearchScreen extends Component {
  arr=[]
  id=0
  state = {
    search: '',
    city:'',
    item:[
      {id:0,data:'loading'}
    ]
  };

  storedata=async()=>{
    this.setState({city:this.state.search})
    this.arr.push({id:this.id,data:this.state.search})
    this.id++; 
    await AsyncStorage.setItem('mylist',JSON.stringify(this.arr))

    this.setState({
      item:JSON.parse(await AsyncStorage.getItem('mylist'))
    })
  }

  render() {
    return(
      <View style={styles.container}>
          <StatusBar backgroundColor="black" />
          <Searchbar
            placeholder="Type Here..."
            value={this.state.search}
            onChangeText={search=>this.setState({search})}
            onSubmitEditing={this.storedata}
          />
          <GetWeatherData city={this.state.city}/>
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
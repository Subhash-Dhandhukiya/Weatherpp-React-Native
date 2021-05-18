import React, { Component } from 'react';
import {Text,View,StyleSheet,Button} from 'react-native'
import Show from '../src/ShowWeather'

export default class App extends Component{
    state={
        isLoading:true,
        cityName:'',
        temperature:0,
        weatherCondition:null,
        error:null,
        humidity:0,
        country:'',
        windSpeed:0,
        pressure:0,
    
      }; 

      fetchWeather(){
        const data=this.props.city;
        const API='8d0948931cd69f3f350db3a194869abf';
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${API}&units=metric`)
        .then(res=>res.json())
        .then(data=>{
          //console.log(data);
          
          this.setState({
            isLoading:false,
            temperature:Math.ceil(data.main.temp),
            cityName:data.name,
            humidity:data.main.humidity,
            windSpeed:data.wind.speed,
            weatherCondition:data.weather[0].main,
            country:data.sys.country,
            pressure:data.main.pressure
          })
        });
      }

      render(){
        const {isLoading}=this.state;
    
        return(
          <View style={styles.container}>
            {isLoading?(<View style={styles.center}><Text style={styles.text}>No Result</Text></View>):(<Show data={this.state}/>)}
            {this.fetchWeather()}
          </View>
        )
      }
}

const styles=StyleSheet.create({
    container:{
      flex:1,
    },
    text:{
      alignItems:'center',
      fontSize:45,
      color:'grey',
      fontFamily:'serif'
    },
    center:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
  })
  
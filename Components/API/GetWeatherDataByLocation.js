import React, { Component, StrictMode } from 'react';
import {View,StyleSheet} from 'react-native'
import Front from '../src/FrontPageWeather'
import Animation from '../src/LoadingScreen'
import Geolocation from 'react-native-geolocation-service'
import RNLocation from 'react-native-location';



export default class App extends Component{
    state={
        isLoading:true,
        cityName:'',
        temperature:0,
        weatherCondition:null,
        error:null,
        humidity:0,
        country:'',
        windSpeed:'',
        pressure:0,
        max:0,
        min:0,

        initialPosition: 'unknown',
        lastPosition: 'unknown',
    
    };

    permission = await RNLocation.requestPermission({
      ios: "whenInUse",
      android: {
        detail: "coarse",
        rationale: {
          title: "We need to access your location",
          message: "We use your location to show where you are on the map",
          buttonPositive: "OK",
          buttonNegative: "Cancel"
        }
      }
    })
  

    permissionHandle= ()=>{
      console.log("Here")
      // let permission = await RNLocation.checkPermission({
      //   ios: 'whenInUse', // or 'always'
      //   android: {
      //     detail: 'coarse' // or 'fine'
      //   }
      // });
   
      console.log('here2')
      console.log(this.permission)
    }

    componentDidMount() {
      RNLocation.configure({
        distanceFilter:null
      })
      
     
      this.permissionHandle();
      

        // Geolocation.getCurrentPosition(
        //     (position) => {
        //       this.fetchWeather(position.coords.latitude,position.coords.longitude)
        //     },
        //     (error) => {
        //       // See error code charts below.
        //       console.log(error.code, error.message);
        //     },
        //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        // )
      }


    fetchWeather(lat=18.521428,lon=73.8544541){
        const API='8d0948931cd69f3f350db3a194869abf';
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`)
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
    
          this.setState({
            isLoading:false,
            temperature:Math.round(data.main.temp),
            cityName:data.name,
            humidity:data.main.humidity,
            windSpeed:data.wind.speed,
            weatherCondition:data.weather[0].main,
            country:data.sys.country,
            max:data.main.temp_max,
            min:data.main.temp_min,
            pressure:data.main.pressure
          })
        });
      }

      render(){
        const {isLoading}=this.state;
        return(
          <View style={styles.container}>
            {isLoading?(<Animation/>):(<Front data={this.state}/>)
          }
          </View>
        );
      }
}

const styles=StyleSheet.create({
    container:{
      flex:1,
    }
  })
  
import React ,{Component,useState} from 'react'
import {View,Text,StyleSheet,ImageBackground} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import IconSecond from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const App=(props)=>{
    const [liked,setLiked]=useState(false);
    const [items,setItems]=useState([]);

    if(props.data.weatherCondition==='Clear'){
        iconname='weather-sunny'
      }else if(props.data.weatherCondition==='Rain'){
        iconname='weather-rainy'
      }else if(props.data.weatherCondition==='Thunderstrom'){
        iconname='weather-lightning'
      }else if(props.data.weatherCondition==='Clouds'){
        iconname='weather-cloudy'
      }else if(props.data.weatherCondition==='Snow'){
        iconname='weather-snowy'
      }else if(props.data.weatherCondition==='Drizzle'){
        iconname='weather-hail'
      }else if(props.data.weatherCondition==='Haze'){
        iconname='weather-hail'
      }else if(props.data.weatherCondition==='Mist'){
        iconname='weather-fog'
      }

      return(
        <View style={styles.container}>  
          <ImageBackground 
              source={require('../../assets/night.jpg')}
              style={styles.backgroundImage}
            > 
                    <View style={styles.cityname}>
                      <Text 
                        style={{
                          marginTop:1,
                          fontSize:42,
                          fontFamily:'serif',
                          color:'white'
                      }}
                    >{props.data.cityName}</Text>
                    </View>
                    <View style={styles.temp}>
                      <Text
                        style={{
                          marginTop:0,
                          fontSize:85,
                          fontFamily:'serif',
                          color:'white'
                        }}
                      >{props.data.temperature}˚c</Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize:45,
                          textAlign:'center',
                          fontFamily:'serif',
                          color:'white'
                        }}
                      >-----------</Text>
                    </View>
                    <View style={styles.condition}>
                      <Text
                        style={{
                          fontSize:25,
                          fontWeight:'bold',
                          fontFamily:'serif',
                          color:'white'
                        }}
                      >{props.data.weatherCondition}</Text>
                    </View>
                    {/* <View style={styles.condition}>
                      <Text
                        style={{
                          fontSize:20,
                          fontWeight:'bold',
                          fontFamily:'serif'
                        }}
                      >{props.data.max}˚c/{props.data.min}˚c</Text>
                    </View> */}
                    <View style={styles.icon}>
                        <IconSecond 
                        size={60}
                        name={iconname}
                        color="white"
                        />
                    </View>
                    <View style={styles.other}>
                      <View style={{alignItems:'center'}}>
                        <Fontisto name="wind" size={24} color="white"/>
                        <Text style={styles.bottombarMenu}>Wind</Text> 
                        <Text style={styles.bottomNumber}>{props.data.windSpeed} km/h</Text>
                      </View>
                      <View style={{alignItems:'center'}}>
                      <IconSecond name="water-outline" size={28} color="white" />
                        <Text style={styles.bottombarMenu}>Humidity</Text>
                        <Text style={styles.bottomNumber}>{props.data.humidity} %</Text>
                      </View>
                      <View style={{alignItems:'center'}}>
                        <AntDesign name="swap" size={24} color="white" />
                        <Text style={styles.bottombarMenu}>Pressure</Text>
                        <Text style={styles.bottomNumber}>{props.data.pressure} mBar</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
            );
}

export default App;

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  text:{
    alignItems:'center'
    
  },
  cityname:{
    alignItems:'center',
    flex:1,
    flexDirection:'row',
    justifyContent:'center'
  },
  temp:{
    alignItems:'center'
  },
  condition:{
    marginTop:0,
    alignItems:'center'
  },
  icon:{
    marginTop:15,
    alignItems:'center'
  },
  other:{
    flex:1,
    flexDirection:'row',
    marginTop:40,
    justifyContent:'space-around'
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  },
  bottombarMenu:{
    fontFamily:'serif',
    marginTop:3,
    color:'white',
    //fontWeight:'bold'
  },
  bottomNumber:{
    fontFamily:'serif',
    color:'white',
    fontSize:15
    //fontWeight:'bold'
  },
  like:{
    flex:1,
    alignItems:'flex-end',
    paddingTop:25,
    paddingRight:20
  }
})

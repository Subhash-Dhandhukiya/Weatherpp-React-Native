// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import SplashScreen from './Components/pages/SplashScreen'
// import Footer from './Components/Footer/Footer'

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading:true
//     };
//   }

//   performTimeConsumingTask= async ()=>{
//     return new Promise((resolve)=>
//       setTimeout(()=>{resolve('result')},3000)
//     );  
//   }

//   async componentDidMount(){
//     const data=await this.performTimeConsumingTask();
//     if(data!==null){
//       this.setState({isLoading:false});
//     }
//   }

//   render() {
//     if(this.state.isLoading){
//       return <SplashScreen/>
//     }

//     return(
//       <Footer/>
//     );
//   }
// }


import React, { Component } from 'react';
import { View, Text ,Button} from 'react-native';
import Geolocation from '@react-native-community/geolocation'
import RNLocation from 'react-native-location';

RNLocation.configure({
 distanceFilter: 0
})


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  permissionHandle = async () => {

    console.log('here')
  
  
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse' // or 'fine'
      }
    });
  
    console.log('here2')
    console.log(permission)
  
  }


  permission =  RNLocation.requestPermission({
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

  render() {
   let location;

   if(!this.permission) {
      this.permission = RNLocation.requestPermission({
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
       console.log(this.permission)
       location =  RNLocation.getLatestLocation({timeout: 100})
       console.log(location, location.longitude, location.latitude, 
             location.timestamp)
  } else {
      console.log("Here 7")
      location =  RNLocation.getLatestLocation({timeout: 100})
      console.log(location, location.longitude, location.latitude,   
                  location.timestamp)
  }

    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text> App </Text>
        <View style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Get Location"
           onPress={this.permissionHandle}
        />
     </View>
     <Text>Latitude: </Text>
     <Text>Longitude: </Text>
     <View style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
       <Button
         title="Send Location"
        />
         </View>
      </View>
    );
  }
}





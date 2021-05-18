// React Native Get Current Date Time
// https://aboutreact.com/react-native-get-current-date-time/

// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const App = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    
    var monthNames=['January','February','March','April','March','May',
                'June','July','August','September','October','November','December'];
    var dayNames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    var date = new Date().getDate(); //Current Date
    var month = monthNames[new Date().getMonth()]; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var day=dayNames[new Date().getDay()];

    setCurrentDate(
      day+', '+month + ' ' + date + ', ' + year 
    );
  }, []);

  return (
    <View>
      <Text style={styles.text}>
        {currentDate}
      </Text>
    </View>
  );
};

const styles=StyleSheet.create({
  MainContainer:{
    flex:1,
  },
  text:{
    fontFamily:'serif',
    fontWeight:'normal',
    fontSize:18,
    color:'white',
    marginTop:8
  }
});

export default App;
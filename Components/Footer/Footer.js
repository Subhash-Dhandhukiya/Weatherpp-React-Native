import React from 'react'
import {Text,View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../pages/HomeScreen'
import Search from '../pages/SearchScreen'
import Favorite from '../pages/FavoriteScreen'

function HomeScreen(){
  return <Home/>
}

function SearchScreen(){
  return <Search/>
}

function FavoriteScreen(){
  return <Favorite/>
}

const Tab=createBottomTabNavigator();

export default function Footer(){
  return(
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({route})=>({
         tabBarIcon:({focused,color,size})=>{
           let iconName;

           if(route.name==='Home'){
             iconName=focused?"home":"home-outline"
           }else if(route.name==='Search'){
             iconName=focused?"search":"search-outline"
           }else if(route.name==='List'){
             iconName=focused?"list":"list-outline"
           }

           return <Icon name={iconName} color={color} size={24}/>
         }
       })}

       tabBarOptions={{
         activeTintColor:'tomato',
         inactiveTintColor:'gray',
         keyboardHidesTabBar:true,
         style:{
           position:'absolute'
         }
       }}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Search" component={SearchScreen}/>
        <Tab.Screen name="List" component={FavoriteScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
import React, { Component} from 'react';
import { View, Text, StyleSheet,SafeAreaView,ScrollView,Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Card,List} from 'react-native-paper'
import GetWeatherData from '../API/GetWeatherData'
import { Container, Header, Left, Body, Right, Title } from 'native-base';

export default class FavoriteList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          list:[]
        };
    }

    async componentDidMount(){
        const cityName=JSON.parse(await AsyncStorage.getItem('mylist'));
        if(cityName!==null){
          this.setState({
            list:cityName
          })
        }    
        // console.log(this.state.list);
        // console.log("This is favorite list");
      }

      async addItem(){
        const cityName=JSON.parse(await AsyncStorage.getItem('mylist'));
        if(cityName!==null){
          this.setState({
            list:cityName
          })
        }
      }

      handleFunction=(item)=>{
        return <GetWeatherData city={item}/>
      }
    
      removeItem(value){
        const index=this.state.list.indexOf(value);
        const newArray=[...this.state.list];
        newArray.splice(index,1);
        this.setState({list:newArray});
        AsyncStorage.setItem("mylist",JSON.stringify(newArray));
    
        console.log("Called")
      }

      render(){
        {this.addItem()}
        if(this.state.list.length>0){
          renderList=this.state.list.map(item=>{
            return(
              <Card key={item.id} style={{marginTop:10}}>
                <List.Item
                  title={item.data}
                  left={props => <List.Icon {...props} icon="city" />}
                  onPress={()=>this.handleFunction(item.data)}
                />
              </Card>
            );
          })
        }else{
          renderList= (
            <View style={styles.container}>
              <Text style={styles.text}>No Result</Text>
            </View>
          )
        }
    
        return(
          <SafeAreaView>
            <Header style={{backgroundColor:'#f5f6fa'}}>
              <Body style={{paddingLeft:18}}>
                <Title style={{color:'black'}}>History</Title>
              </Body>
            </Header>
            <ScrollView>
              {renderList}
            </ScrollView>       
          </SafeAreaView>
        )
      }
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    text:{
      color:'gray',
      fontSize:20,
      fontFamily:'serif',
    }
  })
import React from 'react'
import {View,StyleSheet} from 'react-native'
import LottieView from 'lottie-react-native'

export default class App extends React.Component{
    componentDidMount(){
        this.animation.play();
    }

    render(){
        return(
            <View style={styles.container}>
                <LottieView
                ref={animation=>{
                    this.animation=animation;
                }}
                style={{
                   backgroundColor:'white',
                }}
                source={require('../../assets/Loading/935-loading.json')}
            />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#0B1B25',
        alignItems:'center',
        justifyContent:'center',
        flex:1
    }
})
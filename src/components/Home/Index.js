import React,{Component} from 'react';
import {View,StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Style from './Style';

 class Home extends Component{

 

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}> Home </Text>
      </View>
    );
  }
}

export default Home;

const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center'
    },
    title:{
        fontSize:40,
        color:'#fc0',
        alignItems:'center'
    }
});
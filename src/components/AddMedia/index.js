import React,{Component} from 'react';
import {View,StyleSheet, Text} from 'react-native';
import Style from './Style';

 class AddMedia extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}> AddMedia </Text>
      </View>
    );
  }
}

export default AddMedia;

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
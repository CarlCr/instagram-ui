import React,{Component} from 'react';
import {View,StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from './Style';

 class AddMedia extends Component{

  render(){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'#333',fontSize:16}}>
          Sem ligação à internet
        </Text>
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
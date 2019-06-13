import React,{Component} from 'react';
import {View,StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from './Style';

 class Likes extends Component{

    static navigationOptions = {
        tabBarIcon:({focused, tintcolor}) =>(
           <Icon name="ios-heart" size={30} color={tintcolor}/>
        ),
      }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}> Likes </Text>
      </View>
    );
  }
}

export default Likes;

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
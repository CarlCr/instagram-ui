import React,{Component} from 'react';
import {View,StyleSheet, Text} from 'react-native';
import {Container,Content,Icon,Input} from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Style from './Style';

 class Search extends Component{

  constructor(props){
    super(props)

    this.state={
      activeIndex:0
    }
  }

  cancelBottomTabNavigator=()=>{
  
  }

  render(){
    return(
      <Container style={styles.container}>
      <View style={{flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'#ddd',height:50, backgroundColor:'#fff', justifyContent:'space-between',alignItems:'center'}}>
        <View style={{flex:3,height:35,}}>
          <Input style={{borderRadius:9,marginLeft:10,backgroundColor:'#eee'}}
             onPress={()=>this.cancelBottomTabNavigator()}

          />
        </View> 
        <View style={{flex:1}}>
          <Text style={{fontSize:20,fontWeight:'400',textAlign:'center'}}>Cancelar</Text>
        </View>
      </View>

      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'#333',fontSize:16}}>
            Sem ligação à internet
          </Text>
      </View>
    </Container>
    );
  }
}

export default Search;

const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff'
    }
});
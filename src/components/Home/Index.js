import React,{Component} from 'react';
import {View,StyleSheet, Text, ScrollView,StatusBar} from 'react-native';
import  Styled from './Style';
import {Container,Content,Icon,Header,Left,Right,Body} from 'native-base'
import CardComponent from '~/shared/CardComponent/'

 class Home extends Component{

  render(){

    return(
       <Container style={styles.container}>
         <View style={{flexDirection:'row',height:40, backgroundColor:'#fff', justifyContent:'space-between',alignItems:'center'}}>
           <View><Text style={{paddingLeft:10,color:'#ff3600',fontSize:20,fontWeight:'600'}}>Mwangolê Solidário</Text></View>
            <View><Icon name="ios-menu" style={{paddingRight:10}} /></View> 
         </View>

         <Content>
           <CardComponent imagesSource={1} />
           <CardComponent imagesSource={2} />
           <CardComponent imagesSource={3} />
           <CardComponent imagesSource={4} />
           <CardComponent imagesSource={5} />

         </Content>
       </Container>
    );
  }
}

export default Home;

const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
    }
});
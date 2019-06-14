import React,{Component} from 'react';
import {View,StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Style from './Style';
import {Container, Content} from 'native-base';
import CardComponent from '~/shared/CardComponent/'

 class Home extends Component{
 

  render(){
    return(
       <Container style={styles.container}>
         <Content>
           <CardComponent imagesSource={1} likes={234}/>
           <CardComponent imagesSource={2} likes={121}/>
           <CardComponent imagesSource={3} likes={206}/>
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
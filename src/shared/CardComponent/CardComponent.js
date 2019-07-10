import React,{Component} from 'react';
import { View, Text ,Image} from 'react-native';
import {Card, CardItem,Thumbnail,Body,Left,Right,Button,Icon} from 'native-base'
import Ionicon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types';
import {ImageComponent} from './CardComponent.styles';


 
class  CardComponent extends Component{
  
  render(){

    const images = {
      "1":require('~/assets/img/img1.jpg'),
      "2":require('~/assets/img/img2.jpg'),
      "3":require('~/assets/img/img3.jpg'),
      "4":require('~/assets/img/img4.jpg'),
      "5":require('~/assets/img/img5.jpg'),

    }

    return(
      <>
          <Card>
            <CardItem style={{backgroundColor:'#eee',zIndex:34,height:70}}>
              <Left>
                <Thumbnail style={{marginBottom:-50,borderWidth:2,borderColor:'#ff3600',width:80,height:80,borderRadius:50}} source={require('~/assets/img/carlcr.jpg')}/>
                <View style={{width:250,paddingStart:10,marginBottom:-20}}>
                  <Text style={{fontWeight:'600',fontSize:16,color:'#333'}}>Carlos Garcia</Text>
                  <Text  note style={{fontSize:12}}>Viana-Luanda, 25 de Março de 2019</Text>
                </View>
              </Left>
              <Right>
                <Icon name="ios-more" style={{fontSize:30,color:'#333'}}/>
              </Right>
            </CardItem>
            <View style={{marginTop:0,zIndex:11,position:'relative'}}>
              <View style={{flexDirection:'row',marginStart:100,marginTop:5,alignItems:'center'}}>
                <Ionicon name="ios-information-circle" style={{paddingLeft:10,fontSize:16,color:'#ff3600'}}/>
                <Text style={{color:'#333'}}> Caso Urgente</Text>
                <Ionicon name="logo-usd" style={{paddingLeft:10,fontSize:16,color:'#ff3600'}}/>
                <Text style={{color:'#333'}}> 100.000 Kz</Text>
                <Ionicon name="ios-eye" style={{paddingLeft:10,fontSize:16,color:'#ff3600'}}/>
                <Text style={{color:'#333'}}> 23</Text> 
              </View>
              
             <View style={{paddingHorizontal:20,paddingBottom:15}}>
              <Text style={{paddingTop:10}}>
                Por favor. quem encontrar a minha irmã ligue, estamos aflitos, ela está perdida desde o dia 23 de Junho.
              </Text>
             </View>
            </View>
            <View style={{flexDirection:'row',height:38,backgroundColor:'#ff3600',flex:1,alignItems:'center',justifyContent:'center',marginBottom:-1}}>
              <Icon name="ios-person" style={{color:'#fff',fontSize:16,paddingRight: 10}}/>
              <Text style={{textAlign:'center',color:'#fff',fontSize:16,fontWeight:'600'}}>Maria Dombaxe</Text>
            </View>
            <CardItem cardBody>
                 <ImageComponent source={images[this.props.imagesSource]} />  
            </CardItem>
            
          </Card>
      </>
    );
  }
}



 
export default CardComponent;

import React,{Component} from 'react';
import { View, Text ,Image} from 'react-native';
import {Card, CardItem,Thumbnail,Body,Left,Right,Button,Icon} from 'native-base'
import PropTypes from 'prop-types';
import * as styles from './CardComponent.styles';


 
class  CardComponent extends Component{
  render(){

    const images = {
      "1":require('~/assets/img/img1.jpg'),
      "2":require('~/assets/img/img2.jpg'),
      "3":require('~/assets/img/img3.jpg')
    }

    return(
      <>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('~/assets/img/carlcr.jpg')}/>
                <Body>
                  <Text>Carlos Garcia</Text>
                  <Text  note>Jun 14, 2019</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={images[this.props.imagesSource]} style={{height:400,width:null,flex:1}}/>
            </CardItem>
    
            <CardItem style={{height:45}}>
              <Left>
                <Button transparent>
                      <Icon name='ios-heart' style={{color:'#000'}} />
                </Button>
                <Button transparent>
                      <Icon name='ios-chatbubbles' style={{color:'#000'}} />
                </Button>
                <Button transparent>
                      <Icon name='ios-send' style={{color:'#000'}} />
                </Button>
              </Left>
            </CardItem>
    
            <CardItem style={{height:20}}>
              <Text>{this.props.likes} likes</Text>
            </CardItem>
    
            <CardItem>
              <Body>
                <Text>
                <Text style={{fontWeight:'900'}}>Carlos </Text>
                    O sucesso acontece quando você resolve sair da sua zona de conforto 
                    O sucesso acontece quando você resolve sair da sua zona de conforto 
                    O sucesso acontece quando você resolve sair da sua zona de conforto 
                    O sucesso acontece quando você resolve sair da sua zona de conforto 
                </Text>
              </Body>
            </CardItem>
          </Card>
      </>
    );
  }
}



 
export default CardComponent;

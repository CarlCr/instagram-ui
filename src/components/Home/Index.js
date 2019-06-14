import React,{Component} from 'react';
import {View,StyleSheet, Text, ScrollView} from 'react-native';
import Style from './Style';
import {Container, Content,Icon} from 'native-base';
import {Thumbnail} from 'native-base'
import CardComponent from '~/shared/CardComponent/'

 class Home extends Component{
 

  render(){

    const stories = {
      "1":require('~/assets/img/stories/img1.jpg'),
      "2":require('~/assets/img/stories/img2.jpg'),
      "3":require('~/assets/img/stories/img3.jpg'),
      "4":require('~/assets/img/stories/img4.jpg'),
      "5":require('~/assets/img/stories/img5.jpg'),
      "6":require('~/assets/img/stories/img6.jpg'),
      "7":require('~/assets/img/stories/img7.jpg'),
      "8":require('~/assets/img/stories/img8.jpg'),
      "9":require('~/assets/img/stories/img9.jpg'),
      "10":require('~/assets/img/stories/img10.jpg'),
    }

    return(
       <Container style={styles.container}>
         <Content>
          <View style={{height:100}}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:5,paddingHorizontal:10,paddingBottom:10}}>
                <Text style={{fontWeight:'bold'}}>Stories</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Icon name="md-play" style={{fontSize:14,marginRight:3}}/>
                  <Text style={{fontWeight:'bold'}}>Watch All</Text>
                </View>
            </View>

            <View style={{flex:3}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
                  alignContent:'center',
                  paddingStart:5,
                  paddingEnd:5
                }}>
                    <Thumbnail style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} source={stories[1]} />
                    <Thumbnail style={{marginHorizontal:5,borderColor:'blue',borderWidth:2}} source={stories[2]} />
                    <Thumbnail style={{marginHorizontal:5,borderColor:'yellow',borderWidth:2}} source={stories[3]} />
                    <Thumbnail style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} source={stories[4]} />
                    <Thumbnail style={{marginHorizontal:5,borderColor:'black',borderWidth:2}} source={stories[5]} />
                    <Thumbnail style={{marginHorizontal:5,borderColor:'#333',borderWidth:2}} source={stories[6]} />
                    <Thumbnail style={{marginHorizontal:5,borderColor:'grey',borderWidth:2}} source={stories[7]} />
                    <Thumbnail style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} source={stories[8]} />
                    <Thumbnail style={{marginHorizontal:5,borderColor:'red',borderWidth:2}} source={stories[9]} />
                    <Thumbnail style={{marginHorizontal:5,borderColor:'#fc0',borderWidth:2}} source={stories[10]} />
                </ScrollView>
                
            </View>
            
            
          </View>

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
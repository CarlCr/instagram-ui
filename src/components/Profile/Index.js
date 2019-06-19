import React,{Component} from 'react';
import {View,StyleSheet, Text,Image,Dimensions} from 'react-native';
import {Container,Content,Icon,Button} from 'native-base'
import CardComponent from '~/shared/CardComponent/index'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

var images = [
    require('~/assets/img/stories/img1.jpg'),
    require('~/assets/img/stories/img2.jpg'),
    require('~/assets/img/stories/img3.jpg'),
    require('~/assets/img/stories/img4.jpg'),
    require('~/assets/img/stories/img5.jpg'),
    require('~/assets/img/stories/img6.jpg'),
    require('~/assets/img/stories/img7.jpg'),
    require('~/assets/img/stories/img8.jpg'),
    require('~/assets/img/stories/img9.jpg'),
    require('~/assets/img/stories/img10.jpg'),
    require('~/assets/img/stories/img5.jpg'),
    require('~/assets/img/stories/img7.jpg'),
    require('~/assets/img/stories/img1.jpg'),
    require('~/assets/img/stories/img9.jpg'),
]

var {width,height}= Dimensions.get('window');

import Style from './Style';

 class Profile extends Component{

  constructor(props){
    super(props)

    this.state={
      activeIndex:0
    }
  }

  btnClicked=(index)=>{
    this.setState({
      activeIndex:index
    })
  }

  renderSectionOne=()=>{
      return images.map((image,index)=>{

          return(
            <View
                key={index}
                style={[
                   {width:(width)/3},
                   {height:(width)/3},
                   index % 3 !== 0 ? {paddingLeft:2}:{paddingLeft:0},
                   {marginBottom: 2}
                ]}
            >
                <Image style={{ flex:1, width: undefined, height:undefined}} source={image}/>
            </View>
          )
      })
  }

  renderSection= ()=>{
    if(this.state.activeIndex==0){
        return(
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
              {this.renderSectionOne()}
            </View>
        );
    }
    else if(this.state.activeIndex==1){
        return(
          <View>
            <CardComponent imagesSource="1" likes="333"/>
            <CardComponent imagesSource="2" likes="173"/>
            <CardComponent imagesSource="3" likes="425"/>
          </View>
        )
    }
  }

  render(){
    return(
        <Container style={{flex:1,backgroundColor:'white'}}>
             <View style={{flexDirection:'row',height:40, backgroundColor:'#fff'}}>
              <View><Icon name="md-person-add"  style={{paddingLeft:10}} /></View>
              <View style={{flex:1}}>
                <Text style={{color:'#000',fontSize:22,textAlign:'center',fontWeight:'500'}}>gtxcarl9</Text>
              </View>
              <View><EntypoIcon name="back-in-time" style={{paddingRight:10,fontSize:28,color:'#000'}} /></View> 
            </View>
            <Content>
              <View style={{paddingTop:10}}>
                <View style={{flexDirection:'row'}}>
                  <View style={{flex:1,alignItems:'center'}}>
                    <Image style={{width:75,height:75,borderRadius:37.5}} source={require('~/assets/img/carlcr.jpg')}/>
                  </View>
                  <View style={{flex:3}}>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                      <View style={{alignItems:'center'}}>
                        <Text  style={{color:'#000', fontWeight:'500'}}>34</Text>
                        <Text style={{fontSize:10,color:'grey'}}>posts</Text>
                      </View>
                      <View style={{alignItems:'center'}}>
                        <Text  style={{color:'#000', fontWeight:'500'}}>343</Text>
                        <Text style={{fontSize:10,color:'grey'}}>fellowers</Text>
                      </View>
                      <View style={{alignItems:'center'}}>
                        <Text style={{color:'#000', fontWeight:'500'}}>234</Text>
                        <Text style={{fontSize:10,color:'grey'}}>following</Text>
                      </View>
                    </View>

                    <View style={{flexDirection:'row',paddingTop:10}}>
                      <Button bordered dark style={{flex:3,marginLeft:10, justifyContent:'center',height:30}}>
                          <Text>Edit Profile</Text>
                      </Button>
                      <Button bordered dark style={{flex:1,marginLeft:5,marginRight:10, justifyContent:'center',height:30}}>
                          <Icon name="ios-settings"/>
                      </Button>
                    </View>
                    
                  </View>
                  
                </View>

                <View style={{paddingVertical:10,paddingHorizontal:10}}>
                  <Text style={{fontWeight:'bold',color:'#000'}}>Carlos Garcia</Text>
                </View>
              
              </View>

              <View>
                <View style={{flexDirection:'row',paddingTop:10,alignItems:'center',justifyContent:'space-around',borderColor:'#eae5e5',borderTopWidth:0.5,borderBottomWidth:0.5}}>
                    <Button style={{marginTop:-10}}
                        transparent
                        onPress={()=>this.btnClicked(0)}
                        active={this.state.activeIndex==0}
                    >
                        <Icon name="ios-grid" style={[this.state.activeIndex == 0 ? {} : {color:'grey'}]} />
                    </Button>

                    <Button style={{marginTop:-10}} 
                        transparent
                        onPress={()=>this.btnClicked(1)}
                        active={this.state.activeIndex==1}
                    >
                        <Icon name="ios-list" style={[this.state.activeIndex == 1 ?{} : {color:'grey'}]} />
                    </Button>

                    <Button style={{marginTop:-10}} 
                        transparent
                        onPress={()=>this.btnClicked(2)}
                        active={this.state.activeIndex==2}
                    >
                        <Icon name="ios-bookmark" style={[this.state.activeIndex == 2 ? {} : {color:'grey'}]} />
                    </Button>
                </View>
                {this.renderSection()}
              </View>
              
            </Content>
        </Container>
    );
  }
}

export default Profile;

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
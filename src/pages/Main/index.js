import React,{Component} from 'react';
import {View,StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AddMedia,Home,Likes,Profile,Search} from '~/components/router';

 class MainScrean extends Component{

  static navigationOptions = {
    headerLeft: <Ionicons name="ios-camera" size={30} color="#d12"  style={{paddingLeft:10}} />,
    headerTitle:<View style={{flex:1}}>
      <Text style={{color:'#000',fontSize:22,textAlign:'center',fontWeight:'500'}}>Instagram</Text>
    </View>,
    headerRight:<Ionicons name="ios-send" size={30} color="#d12"  style={{paddingRight:10}} />

  }

  render(){
    return(
      <>
        <AppContainer/>
      </>
    );
  }
}

export default MainScrean;

const BottomTabNavigator = createBottomTabNavigator({
  HomeTab:Home,
  SearchTab:Search,
  AddMediaTab:AddMedia,
  LikesTab:Likes,
  ProfileTab:Profile
})

const AppContainer = createAppContainer(BottomTabNavigator);

const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center'
    }
});
import React,{Component} from 'react';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AddMedia,Home,Notification,Profile,Search} from '~/components/router';
import {Icon} from 'native-base'

 class MainScrean extends Component{

  static navigationOptions = {

    header:null

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

const BottomTabNavigator = createBottomTabNavigator(
  {
    HomeTab:Home,
    SearchTab:Search,
    AddMediaTab:AddMedia,
    NotificationTab:Notification,
    ProfileTab:Profile
  },
  {
    animationEnabled:true,
    swipeEnabled:true,
    tabBarPosition:'bottom',
    tabBarOptions:{
      activeTintColor:'#ff3600',
      inactiveTintColor:'#d1cece',
      style:{
        backgroundColor:'#fff'
      },
      showLabel:false,
      showIcon:true
    },
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let IconComponent = Ionicons;
          let iconName ='';
          
          if(routeName === 'HomeTab'){
            iconName = 'ios-home';
          }
          else if (routeName === 'SearchTab'){
            iconName = 'ios-search';
          }
          else if (routeName === 'ProfileTab'){
            iconName = 'ios-person';
          }
          else if (routeName === 'AddMediaTab'){
            iconName = 'ios-add-circle';
          }
          else if (routeName === 'NotificationTab'){
            iconName = 'ios-notifications';
          }
          return <IconComponent name={iconName} size={30} color={tintColor} />;
      }
    })
  }
)

const AppContainer = createAppContainer(BottomTabNavigator);

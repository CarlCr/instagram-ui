import React,{Component} from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import MainScrean from './Main/index'


const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainScrean
  },
})

const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends Component{
  render(){
    return(
      <>
        <AppContainer/>
      </>
        
    );
  }
}

import React from 'react';
import {StatusBar, Platform, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Icon} from 'native-base';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Main from './Main';
import Cart from './Cart';

const DrawerButton = (props) => {
	return (
    <View style={{paddingLeft:20}}>
      <TouchableOpacity onPress={() => {props.navigation.navigate('DrawerOpen')}}>
        <Icon name='menu'/>
      </TouchableOpacity>
    </View>
  );
};

const CartButton = () => {
	return (
    <View style={{paddingRight:20}}>
      <TouchableOpacity onPress={() => {"Cart"}}>
        <Icon name='cart'/>
      </TouchableOpacity>
    </View>
  );
};

const Stacknavigation=StackNavigator(
  {
    Home:{
      screen:Main,
      navigationOptions:({navigation}) => ({
        title:'Elikart',
        headerStyle:{
          backgroundColor:'rgb(0,123,181)',
        },
        headerLeft:<DrawerButton navigation={navigation}/>,
        headerRight:<CartButton/>
      })
    },
	Cart:{
      screen:Cart,
      navigationOptions:({navigation}) => ({
        title:'Elikart',
        headerStyle:{
          backgroundColor:'rgb(0,123,181)',
        }
      })
	}
  }
);

const Drawernavigation=DrawerNavigator(
  {
    Home:{screen:Stacknavigation}
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);

export default class App extends React.Component {
  render() {
      return <Drawernavigation/>
  }
}
import React, { Component } from 'react';
import {StatusBar, Platform, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Icon} from 'native-base';
import Header from './Header';
import ItemsContainer from './ItemsContainer';
import Footer from './Footer';

export default class Cart extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ItemsContainer />
        <Footer />
      </View>
      
    );
  }
}
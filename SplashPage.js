'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
}  from 'react-native';

class SplashPage extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'MainPage',
      });
    }, 2500);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center',}}>
        	<Image source={require('./images/logo_white.png')}  style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    image:{
        width: 330,
		height: 75,
          
	},

});

module.exports = SplashPage;

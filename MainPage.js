'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
}  from 'react-native';

class MainPage extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  renderScene(route, navigator) {
    return (
	<View style={styles.toolbar}>
			<Text style={{color: '#212F3D', margin: 30, fontSize: 16}}>
				Please Choose 1 option:
			</Text>
			
				<TouchableHighlight style={styles.button}
					underlayColor='#5DADE2' onPress={this.gotoLogin.bind(this)}>
					<Text style={styles.buttonText}>Login (I already have a account)</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.button}
					underlayColor='#5DADE2' onPress={this.gotoSignup.bind(this)}>
					<Text style={styles.buttonText}>Sign Up! (It's Quick) </Text>
				</TouchableHighlight>
			</View>

      
    );
  }
  gotoLogin() {
    this.props.navigator.push({
      id: 'LoginPage',
      name: 'Login Page',
    });
  }
  gotoSignup() {
    this.props.navigator.push({
      id: 'SignupPage',
      name: 'Sign Up Page',
    });
  }
 
}

const styles = StyleSheet.create({
	toolbar:{
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center', 
		justifyContent: 'center'
	},

	button: {
		height: 36,
		width: 260,
		flexDirection: 'row',
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		borderWidth: 1,
		marginBottom: 10,
		justifyContent: 'center',
		alignSelf: 'center'
	},
	buttonText: {
		fontSize: 16,
		color: 'white',
		alignSelf: 'center',
		fontFamily: 'calibri',
		fontWeight: 'bold'
},
});


var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 16, margin: 80, fontFamily: 'Calibri'}}>
          ASSET
        </Text>
      </TouchableOpacity>
    );
  }
};



module.exports = MainPage;

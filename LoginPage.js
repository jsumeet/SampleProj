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

class LoginPage extends Component {
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
			<Text style={{color: '#212F3D', margin: 20, fontSize: 16}}>
				Please Enter the Login Details:
			</Text>
			<View style={styles.login}>
				<TextInput
					style={styles.input}
					placeholder='Username'/>
				<TextInput
					style={styles.input}
					placeholder='Password'/>
				<TouchableHighlight style={styles.button}
					underlayColor='#5DADE2'>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableHighlight>
			</View>
		</View>
      
    );
  }
 
}

const styles = StyleSheet.create({
	toolbar:{
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center', 
		justifyContent: 'center'
	},
    image:{
        width: 45,
		height: 80,
        flex:1             
	},
	login: {
		paddingTop:10,
		
	},
	input: {
		height: 50,
		width: 200,
		padding: 4,
		flex: 1,
		fontSize: 14,
		borderWidth: 5,
		borderColor: '#48BBEC',
		borderRadius: 8,
		color: '#212F3D',
		alignSelf: 'center',
		
	},
	button: {
		height: 36,
		flex: 1,
		width: 190,
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
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Image source={require('./images/ic_arrow_back_white_24dp.png')}  style={{margin: 10}}/>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 16, margin: 80}}>
          LOGIN
        </Text>
      </TouchableOpacity>
    );
  }
};



module.exports = LoginPage;

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, Button} from 'react-native';
import * as Font from 'expo-font';
import { Feather } from '@expo/vector-icons';


function LoadProduct() {
	Font.loadAsync({
		'Product': require('./assets/fonts/PS.ttf'),
	});
}
LoadProduct();


const Stack = createStackNavigator();

export default function App({navigation}){
	return(
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
				<Stack.Screen name="splash" component={splash}/>
				<Stack.Screen name="home" component={home}/>	
			</Stack.Navigator>
		</NavigationContainer>
	)
}


function splash({navigation}){
	setTimeout(function () {
		navigation.navigate('home');
	},8000);
	return(
		<View style={styles.container}>
			<View style={styles.container1}>
				<Image style={styles.logo} source={require('./assets/images/neon.png')} ></Image>
			</View>
			<View style={styles.container3}>
				<Text style={styles.power}>Powered by F-Society</Text>
			</View>
		</View>
	)
}


function home({navigation}) {
	return (
		<View style={styles.container2}>
			<Text style={styles.tonga}>Home</Text>
			<Button title="Go" onPress={() => navigation.navigate('splash')}/>
		</View>
	)  
}

const styles = StyleSheet.create({
	container:{
		backgroundColor: '#ffffff',
		alignItems: 'center',
		flex: 2,
		justifyContent:'center'
	},
	container1:{
		backgroundColor: '#ffffff',
		alignItems: 'center',
		flex: 2,
		justifyContent:'center',
	},
	container2:{
		backgroundColor: '#ffffff',
		alignItems: 'center',
		flex: 2,
		justifyContent:'center',
	},
	container3:{
		position:'absolute',
		bottom:25,
	},
	tonga:{
		fontFamily: 'Product',
		fontSize: 30,
	},
	logo:{
		width:120,
		height:120,
		borderRadius:20,
		shadowOffset: {width:5, height:5},
		justifyContent:'center',
		alignItems: 'center',
	},
	power:{
		fontFamily: 'Product',
		color: '#777',
		fontSize: 17,
	}
});
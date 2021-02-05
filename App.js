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


function  splash({navigation}){
	setTimeout(function () {
		navigation.navigate('home');
	},8000);
	return(
		<View style={styles.container}>
			<Text style={styles.tonga} >
				Splash
			</Text>
		</View>
	)
}


function home({navigation}) {
	return (
		<View style={styles.container}>
			<Text style={styles.tonga}>Home</Text>
			<Button title="Go" onPress={() => navigation.navigate('splash')}/>
		</View>
	)  
}

const styles = StyleSheet.create({
	container:{
		backgroundColor: '#ffffff',
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	tonga:{
		fontFamily: 'Product',
		fontSize: 30,
	}
});
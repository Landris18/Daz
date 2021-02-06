//Importations des modules et des components
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react';
import styles from './assets/css/stylesheets'
import {View, Text, Image, Button} from 'react-native';
import * as Font from 'expo-font';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';


//Inmporter le font Product Sans
function LoadProduct() {
	Font.loadAsync({
		'Product': require('./assets/fonts/PS.ttf'),
		'ProductBold': require('./assets/fonts/PSBold.ttf'),
	});
}
LoadProduct();


//Déclaration de la variable Stack
const Stack = createStackNavigator();


//Gestion des pages (screen)
export default function App({navigation}){
	return(
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
				<Stack.Screen name="splash" component={splash}/>
				<Stack.Screen name="login" component={login}/>	
			</Stack.Navigator>
		</NavigationContainer>
	)
}

//Page de Chargement
function splash({navigation}){
	//On navigue vers la page login après 8000ms soit 8s
	setTimeout(function () {
		navigation.navigate('login');
	},8000);
	return(
		<View style={styles.container}>
			<View style={styles.logoView}>
				<Image style={styles.logo} source={require('./assets/images/dlogo.png')} ></Image>
			</View>
			<View style={styles.madeView}>
				<Text style={styles.dazing}>DAZING</Text>
				<Text style={styles.made}>Made by Black-Mavericks</Text>
			</View>
		</View>
	)
}

//Page Login
function login({navigation}) {
	return (
		<View style={styles.loginPage}>
			<Image style={styles.logoLogin} source={require('./assets/images/dlogo.png')} ></Image>
			<Text style={styles.textLogin}>Connectez-vous et profitez de nos services !</Text>
			<TextInput style={styles.inputUser} placeholder="Username"/>
			<TextInput style={styles.inputPass} placeholder="Password"/>
			<Text style={styles.btnLogin} onPress={() => navigation.navigate('splash')}>LOGIN</Text>
			<Text style={styles.forgot}>Forgot Password ?</Text>
		</View>
	)  
}
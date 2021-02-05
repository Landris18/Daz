//Importations des modules et des components
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, Button} from 'react-native';
import * as Font from 'expo-font';
import { Feather } from '@expo/vector-icons';


//Inmporter le font Product Sans
function LoadProduct() {
	Font.loadAsync({
		'Product': require('./assets/fonts/PS.ttf'),
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
				<Image style={styles.logo} source={require('./assets/images/neon.png')} ></Image>
			</View>
			<View style={styles.powerView}>
				<Text style={styles.power}>Powered by F-Society</Text>
			</View>
		</View>
	)
}

//Page Login
function login({navigation}) {
	return (
		<View style={styles.loginPage}>
			<Button title="Go" onPress={() => navigation.navigate('splash')}/>
		</View>
	)  
}



//Définition de la constante styles Stylesheets
const styles = StyleSheet.create({
	container:{
		backgroundColor: '#ffffff',
		alignItems: 'center',
		flex: 2,
		justifyContent:'center'
	},
	logoView:{
		backgroundColor: '#ffffff',
		alignItems: 'center',
		flex: 2,
		justifyContent:'center',
	},
	loginPage:{
		backgroundColor: '#ffffff',
		alignItems: 'center',
		flex: 2,
		justifyContent:'center',
	},
	powerView:{
		position:'absolute',
		bottom:25,
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
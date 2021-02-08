//Importations des modules et des components
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import styles from './assets/css/stylesheets';
import { View, Text, Image } from 'react-native';
import * as Font from 'expo-font';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';


//Importer le font Product Sans
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
export default function App ({navigation}){
	return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="splash" component={splash} options={{ headerShown: false }}/>
				<Stack.Screen name="login" component={login} options={{ headerShown: false }}/>
				<Stack.Screen name="create" component={create} options={{ headerShown: false }}/>
				<Stack.Screen 
					name="forgot" 
					component={forgot} 
					options={{ 	
							headerShown:true,
							title:'Forgot password',
							headerStyle: {  
								backgroundColor: '#901d78',
								elevation:3,  
							},  
							headerTintColor: '#ffffff',  
							headerTitleStyle: {  
								fontFamily:'Product',
								fontSize:16,
							},   
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}


//Page de Chargement
function splash({ navigation }){
	//On navigue vers la page login après 7000ms soit 7s
	setTimeout(function () {
		navigation.navigate('login');
	},7000);
	return(
		<View style={styles.container}>
			<View style={styles.logoView}>
				<Image style={styles.logo} source={require('./assets/images/playlogo.png')} ></Image>
			</View>
			<View style={styles.madeView}>
				<Text style={styles.dazing}>DAZING</Text>
				<Text style={styles.made}>Made by Black-Mavericks</Text>
			</View>
		</View>
	)
}


//Page Login
function login({ navigation }) {
	return (
		<View style={styles.loginPage}>
			<Image style={styles.logoLogin} source={require('./assets/images/playlogo.png')} ></Image>
			<Text style={styles.textLogin}>Connectez-vous et profitez de nos services !</Text>
			<TextInput style={styles.inputUser} placeholder="Username"/>
			<TextInput style={styles.inputPass} placeholder="Password" secureTextEntry/>
			<Text style={styles.btnLogin} onPress={() => navigation.navigate('create')}>LOGIN</Text>
			<Text style={styles.forgot} onPress={() => navigation.navigate('forgot')}>Forgot Password ?</Text>
		</View>
	)  
}


//Page création de compte
function create({ navigation }){
	return(
		<View style={styles.loginPage}>
			<Image style={styles.logoLogin} source={require('./assets/images/playlogo.png')} ></Image>
			<Text style={styles.textLogin}>C'est simple et rapide !</Text>
			<TextInput style={styles.inputUser} placeholder="Username"/>
			<TextInput style={styles.inputUser} placeholder="Email"/>
			<TextInput style={styles.inputPass} placeholder="Password" secureTextEntry/>
			<TextInput style={styles.inputPass} placeholder="Confirm password" secureTextEntry/>
			<Text style={styles.btnLogin} onPress={() => navigation.navigate('splash')}>CREATE ACCOUNT</Text>
		</View>
	)
}


//Page Forgot password
function forgot({ navigation }){
	return(
		<View style={styles.loginPage}>
			<Text style={styles.textForgot}>Entrez votre adresse mail !</Text>
			<TextInput style={styles.inputUser} placeholder="Adresse mail"/>
			<Text style={styles.btnLogin} onPress={() => navigation.navigate('splash')}>CONFIRMER</Text>
		</View>
	)
}

//Main page
// function mainPage({ }){
// 	return(
// 		<View>

// 		</View>
// 	)
// }

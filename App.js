//Importations des modules et des components
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { /*Component*/ } from 'react';
import styles from './assets/css/stylesheets';
import { View, Text, Image, ScrollView } from 'react-native';
import { Card, CardItem} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons,FontAwesome5, Entypo, MaterialIcons} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';


//Importer le font Product Sans
function LoadProduct() {
	Font.loadAsync({
		'Product': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
		'ProductBold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
	});
}
LoadProduct();


//Déclaration de la variable Stack
const Stack = createStackNavigator();

//Gestion des screens
export default function App ({navigation}){
	return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="splash" component={splash} options={{ headerShown: false }}/>
				<Stack.Screen name="log_sign" component={log_sign} options={{ headerShown: false }}/>
				<Stack.Screen name="main" component={main} options={{ headerShown: false }}/>
				<Stack.Screen 
					name="forgot" 
					component={forgot} 
					options={
						{ 	
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
						}
					}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}


//Page de Chargement
function splash({ navigation }){
	//On navigue vers la page login après 2000ms soit 2s
	setTimeout(function () {
		navigation.navigate('log_sign');
	},2000);
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

//Déclaration de la variable Tab
const Tab = createMaterialBottomTabNavigator();

// Naviguer entre login et signup
function log_sign(){
	return(
	<Tab.Navigator shifting='true' barStyle={styles.bottomBar} >
		<Tab.Screen name="login" component={login} 
			options={{ 
				headerShown: false, 
				title: '',
				tabBarIcon:({ color })=>(<FontAwesome5 name="sign-in-alt" size={24} color={color}/>)
			}}
		/>
		<Tab.Screen name="create" component={create} 
			options={{ 
				headerShown: false, 
				title: '', 
				tabBarIcon:({ color })=>(<Ionicons name="create" size={24} color={color}/>)
			}}
		/>
	</Tab.Navigator>
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
			<Text style={styles.btnLogin} onPress={() => navigation.navigate('main')}>LOGIN</Text>
			<Text style={styles.forgot} onPress={() => navigation.navigate('forgot')}>Forgot Password ?</Text>
		</View>
	)  
}


//Page création de compte
function create({ navigation }){
	return(
		<View style={styles.loginPage}>
			<Image style={styles.logoLogin} source={require('./assets/images/playlogo.png')} ></Image>
			<Text style={styles.textLogin}>Simple et rapide !</Text>
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


//Page MainPage
function main({navigation}){
	return(
		<View>
			<View style={styles.container}>
				<Image style={styles.coverImage} source={require('./assets/images/acover.jpg')} />
				<Ionicons name="menu" size={24} color="#fff" style={styles.menuIcon}/>
				<Text style={styles.textAvatar}>Black7618</Text>
				<Image style={styles.avatarImage} source={require('./assets/images/playlogo.png')}/>
				<Text style={styles.editCover} onPress={() => navigation.navigate('login')}>
					<Entypo name="camera" size={13} color="#222"> EDIT</Entypo>
				</Text>
			</View>
			<Text style={styles.textContents}><MaterialIcons style={styles.musicLogo} name="my-library-music" size={25} color="#f24671"/> Your contents</Text>
			<ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
				<Card style={{borderRadius:10}}>
					<CardItem cardBody style={{borderRadius:10}}>
						<Image source={require('./assets/images/mars.png')}  style={{height: 100,borderTopLeftRadius:10, borderTopRightRadius:10, width:105, flex: 1}}/>
					</CardItem>
					<CardItem style={{borderRadius:10}}>
						<Text style={{fontFamily:'Product', color:'#555', fontSize:13}}><MaterialIcons name="queue-music" color="#000"></MaterialIcons> Musics list</Text>
					</CardItem>
          		</Card>
				<Card style={{borderRadius:10, marginLeft:5}}>
					<CardItem cardBody style={{borderRadius:10}}>
						<Image source={require('./assets/images/album.jpg')}  style={{height: 100,borderTopLeftRadius:10, borderTopRightRadius:10, width: 105, flex: 1}}/>
					</CardItem>
					<CardItem style={{borderRadius:10}}>
						<Text style={{fontFamily:'Product', color:'#555', fontSize:13}}><MaterialIcons name="album" color="#000"></MaterialIcons>Albums</Text>
					</CardItem>
          		</Card>
				<Card style={{borderRadius:10, marginLeft:5}}>
					<CardItem cardBody style={{borderRadius:10}}>
						<Image source={require('./assets/images/dj.jpg')}  style={{height: 100,borderTopLeftRadius:10, borderTopRightRadius:10, width: 105, flex: 1}}/>
					</CardItem>
					<CardItem style={{borderRadius:10}}>
						<Text style={{fontFamily:'Product', color:'#555', fontSize:13}}><FontAwesome5 name="headphones" color="#000"></FontAwesome5>Artists</Text>
					</CardItem>
          		</Card>
				<Card style={{borderRadius:10, marginLeft:5}}>
					<CardItem cardBody style={{borderRadius:10}}>
						<Image source={require('./assets/images/favo.jpg')}  style={{height: 100,borderTopLeftRadius:10, borderTopRightRadius:10, width:105, flex: 1}}/>
					</CardItem>
					<CardItem style={{borderRadius:10}}>
						<Text style={{fontFamily:'Product', color:'#555', fontSize:13}}><MaterialIcons name="favorite" color='#000'></MaterialIcons>Favorites</Text>
					</CardItem>
          		</Card>
			</ScrollView>
			<Text style={styles.textNotifs}><Ionicons name="md-notifications" size={25} color="#29d967"/> Notifications </Text>
			<Text style={styles.clear}>CLEAR ALL</Text>
		</View>
	)
}
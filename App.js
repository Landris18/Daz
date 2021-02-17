//Importations des modules et des components
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { Component } from 'react';
import styles from './assets/css/stylesheets';
import { View, Text, Image, ScrollView, Alert } from 'react-native';
import { Card, CardItem, Container} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons,FontAwesome5, Entypo, MaterialIcons, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
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
export default class App extends Component{
	render(){
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
									backgroundColor: '#f25046',
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
}


//Page de Chargement
function splash({ navigation }){
	//On navigue vers la page login après 1000ms soit 2s
	setTimeout(function () {
		navigation.navigate('log_sign');
	},1000);
	return(
		<View style={styles.container}>
			<View style={styles.logoView}>
				<Image style={styles.logo} source={require('./assets/images/sesame.png')} ></Image>
			</View>
			<View style={styles.madeView}>
				<Text style={styles.dazing}>DAZING</Text>
				<Text style={styles.made}>Built by Black-Mavericks</Text>
			</View>
		</View>
	)
}

//Déclaration de la variable Tab
const Tab = createMaterialBottomTabNavigator();

// Naviguer entre login et signup
function log_sign(){
	return(
		<Tab.Navigator shifting='true' barStyle={styles.bottomBar} activeColor="#2ebc4f" >
			<Tab.Screen name="login" component={login} 
				options={{ 
					headerShown: false, 
					title: '',
					tabBarIcon:({ color })=>(<AntDesign name="home" size={24} color={color}/>)
				}}
			/>
			<Tab.Screen name="create" component={create} 
				options={{ 
					headerShown: false, 
					title: '', 
					tabBarIcon:({ color })=>(<AntDesign name="user" size={24} color={color}/>)
				}}
			/>
			<Tab.Screen name="chercher" component={chercher} 
				options={{ 
					headerShown: false, 
					title: '', 
					tabBarIcon:({ color })=>(<AntDesign name="search1" size={24} color={color}/>)
				}}
			/>
		</Tab.Navigator>
	)
}



//Page Login
class login extends Component {
	render(){
		return (
			<View style={styles.loginPage}>
				<Image style={styles.avatarImage} source={require('./assets/images/ld.jpeg')}/>
				<TextInput  style={styles.inputUser} placeholder=""><Ionicons name="search" size={15} color={'#777'} > <Text style={{fontFamily:'Product', color:'#777'}}>Rechercher</Text></Ionicons></TextInput>
				<Text style={{height:14, width:1000, backgroundColor:'#dde2df', position:'absolute', top:90}}></Text>
				<Image style={styles.comdata} source={require('./assets/images/comdata.png')}/>
				<Container style={{position:'absolute', top:122, left:70}}>
					<Text style={{fontFamily:"ProductBold", color:"#555", fontSize:13}}> Comdata Madagascar</Text>
					<Text style={{fontFamily:"Product", color:"#999", fontSize:13}}> 363 abonnés</Text>
					<Text style={{fontFamily:"Product", color:"#999", fontSize:13}}> 4h</Text>
				</Container>
				<Container style={{position:'absolute', top:190, left:20}}>
					<Text style={{fontFamily:"Product", color:"#555", fontSize:14}}><AntDesign name="checksquare" size={16} color={'#2ebc4f'} />Comdata cherche un développeur PHP</Text>
					<Text style={{fontFamily:"Product", color:"#555", fontSize:14}}><AntDesign name="checksquare" size={16} color={'#2ebc4f'} />Vous vous sentez être à la hauteur ?</Text>
				</Container>
				<Container style={{position:'absolute', top:235, left:0, width:1000, height:200, backgroundColor:'#eaf0ec'}}>
					<Image style={{width:320, height:200, left:20}} source={require('./assets/images/opo.jpg')}/>
					<Text style={{fontFamily:'ProductBold', color:'#777', left:20, top:3, fontSize:11}}> <AntDesign name="like1" size={16} color={'#1c97df'}/>18</Text>
					<Text style={{height:1.2, width:330, backgroundColor:'#dde2df', top:6, left:15}}></Text>
					<AntDesign name="like2" size={16} color={'#777'} style={{top:13, left:40}}/>
					<Text style={{fontFamily:"ProductBold", color:"#777", fontSize:11, top:10, left:30}} >J'aime </Text>
					<FontAwesome5 name="comment" size={16} color={'#777'} style={{ position:'absolute',top:232, left:130}}/>
					<Text style={{fontFamily:"ProductBold", color:"#777", fontSize:11, position:'absolute', top:245, left:108}} >Commenter </Text>
					<Entypo name="share" size={16} color={'#777'} style={{ position:'absolute',top:232, left:220}}/>
					<Text style={{fontFamily:"ProductBold", color:"#777", fontSize:11, position:'absolute', top:245, left:208}} >Partager </Text>
					<MaterialCommunityIcons name="telegram" size={16} color={'#777'} style={{ position:'absolute',top:232, left:305}}/>
					<Text style={{fontFamily:"ProductBold", color:"#777", fontSize:11, position:'absolute', top:245, left:293}} >Envoyer </Text>
				</Container>
				<Text style={{height:14, width:1000, backgroundColor:'#dde2df', position:'absolute', top:508}}></Text>
			</View>
		)  
	}	
}


//Page création de compte
function create({ navigation }){
	return(
		<View style={styles.loginPage}>
			<Image style={styles.logoLogin} source={require('./assets/images/playlogo.png')} ></Image>
			<Text style={styles.textLogin}>Inscrivez-vous !</Text>
			<TextInput style={styles.inputUserCreate} placeholder="Username"/>
			<TextInput style={styles.inputPass} placeholder="Email"/>
			<TextInput style={styles.inputPass} placeholder="Password" secureTextEntry/>
			<TextInput style={styles.inputPass} placeholder="Confirm password" secureTextEntry/>
			<Text style={styles.btnCreate} onPress={() => navigation.navigate('splash')}>CREATE ACCOUNT</Text>
		</View>
	)
}


function chercher({ navigation }){
	return(
		<View style={styles.loginPage}>
			<Image style={styles.logoLogin} source={require('./assets/images/playlogo.png')} ></Image>
			<Text style={styles.textLogin}>Inscrivez-vous !</Text>
			<TextInput style={styles.inputUserCreate} placeholder="Username"/>
			<TextInput style={styles.inputPass} placeholder="Email"/>
			<TextInput style={styles.inputPass} placeholder="Password" secureTextEntry/>
			<TextInput style={styles.inputPass} placeholder="Confirm password" secureTextEntry/>
			<Text style={styles.btnCreate} onPress={() => navigation.navigate('splash')}>CREATE ACCOUNT</Text>
		</View>
	)
}


//Page Forgot password
function forgot({ navigation }){
	return(
		<View style={styles.loginPage}>
			<Text style={styles.textForgot}>Entrez votre adresse mail pour récuperer votre compte !</Text>
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
				<Ionicons name="menu" size={24} color="#fff" style={styles.menuIcon} onPress={() => this.props.navigation.navigate('DrawerOpen') }/>
				<Text style={styles.textAvatar}>Black7618</Text>
				<Image style={styles.avatarImage} source={require('./assets/images/playlogo.png')}/>
				<Text style={styles.editCover} onPress={() => navigation.navigate('login')}>
					<Entypo name="camera" size={13} color="#fff"> EDIT</Entypo>
				</Text>
			</View>
			<Text style={styles.textContents}><MaterialCommunityIcons style={styles.musicLogo} name="music-box-multiple-outline" size={25} color="#f25046"/> Your contents</Text>
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
			<Text style={styles.textNotifs}><Ionicons name="md-notifications-outline" size={25} color="#f25046"/> Notifications </Text>
			<Text style={styles.clear}>CLEAR ALL</Text>
		</View>
	)
}
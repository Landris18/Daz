//Importations des modules et des components
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { Component } from 'react';
import styles from './assets/css/css';
import { Keyboard,View, Text, Image, ScrollView, Alert, ImageBackground, Modal } from 'react-native';
import { Card, CardItem, Container} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons,FontAwesome5, Entypo, MaterialIcons, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { BackHandler } from 'react-native';
import {
	widthPercentageToDP as wp, 
	heightPercentageToDP as hp, 
	listenOrientationChange as loc,
	removeOrientationListener as rol
} from 'react-native-responsive-screen';
import axios from 'axios'
import { AsyncStorage } from 'react-native';
import { AlertModal } from './components/modals/alertModal';


//Gestion des screens
const Stack = createStackNavigator();

//Token de l'utilisateur
const KEY_TOKEN = 'USER_TOKEN';
const KEY_ID = 'USER_ID';


function loadProduct() {
	Font.loadAsync({
		'Product': require('./assets/fonts/PS.ttf'),
		'ProductBold': require('./assets/fonts/PSBold.ttf'),
	})
}
loadProduct()


export default class App extends Component{

	componentDidMount() {
		
		loc(this);
	}
	componentWillUnMount() {
		rol();
	}
	render(){
		return(
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="splash" component={splash} options={{ headerShown: false }}/>
					{/* <Stack.Screen name="log_sign" component={log_sign} options={{ headerShown: false }}/> */}
					<Stack.Screen 
						name="login" 
						component={login} 
						options={
							{ 
								headerShown: false,
								// animations:{
								// 	push: {
								// 		content: {
								// 			translationX: {
								// 				from: require('react-native').Dimensions.get('window').width,
								// 				to: 10,
								// 				duration: 300
								// 			}
								// 		}
								// 	}
								// }
							}
						}
					/>
					<Stack.Screen name="create" component={create} options={{ headerShown: false }}/>
					<Stack.Screen name="main" component={main} options={{ headerShown: false }}/>
					<Stack.Screen 
						name="forgot" 
						component={forgot} 
						options={
							{ 	
								headerShown:false,
								// title:'Forgot password',
								// headerStyle: {  
								// 	backgroundColor: '#f25046',
								// 	elevation:3,  
								// },  
								// headerTintColor: '#ffffff',  
								// headerTitleStyle: {  
								// 	fontFamily:'Product',
								// 	fontSize:16,
								// },   
							}
						}
					/>
					<Stack.Screen name="mail_confirmation" component={mail_confirmation} options={{ headerShown: false }}/>
				</Stack.Navigator>
			</NavigationContainer>
		)
	}
}


//Splash screen
function splash({ navigation }){
	AsyncStorage.getItem(KEY_ID).then(asyncStorageRes => {
		var user_id = asyncStorageRes;
		AsyncStorage.getItem(KEY_TOKEN).then(asyncStorageRes => {
			var user_token = asyncStorageRes
			if (user_id && user_token){
				setTimeout(function () {
					navigation.navigate('main', { User_name: user_id });
				},1000);
			}
			else{
				setTimeout(function () {
					navigation.navigate('login');
				},2000);
				return(
					<View style={styles.container}>
						<ImageBackground style={styles.backgroundImage} source={require('./assets/images/djs.jpg')} ></ImageBackground>
						<Image style={styles.logo} source={require('./assets/images/dlog.png')} ></Image>
						<View style={styles.madeView}>
							<Text style={styles.dazing}>DAZING</Text>
							<Text style={styles.made}>Built by Black-Mavericks</Text>
						</View>
					</View>
				)
			}
		});
	});
	
	return(
		<View style={styles.container}>
			<ImageBackground style={styles.backgroundImage} source={require('./assets/images/djs.jpg')} ></ImageBackground>
			<Image style={styles.logo} source={require('./assets/images/dlog.png')} ></Image>
			<View style={styles.madeView}>
				<Text style={styles.dazing}>DAZING</Text>
				<Text style={styles.made}>Built by Black-Mavericks</Text>
			</View>
		</View>
	)
}


//Bottom navigation
const Tab = createMaterialBottomTabNavigator();
// function log_sign(){
// 	return(
// 		<Tab.Navigator shifting='true' barStyle={styles.bottomBar} activeColor="#f25046" >
// 			<Tab.Screen name="login" component={login} 
// 				options={{ 
// 					headerShown: false, 
// 					title: '',
// 					tabBarIcon:({ color })=>(<AntDesign name="login" size={24} color={color}/>)
// 				}}
// 			/>
// 			<Tab.Screen name="create" component={create} 
// 				options={{ 
// 					headerShown: false, 
// 					title: '', 
// 					tabBarIcon:({ color })=>(<Ionicons name="ios-create-outline" size={24} color={color}/>)
// 				}}
// 			/>
// 		</Tab.Navigator>
// 	)
// }


//Page Login
class login extends Component {
	constructor(props) {
		super(props)
		this.handler = this.handler.bind(this);
		this.state = {
			UserUsername: '',
			UserPassword: '',
			modalShow: false
		}
		//Handling android back button
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
		

	}


	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}
	handleBackButtonClick() {
		this.props.navigation.navigate('login');
		return true;
	}

	handler() {
		this.setState({
			modalShow: false
		});
	 }
  


	UserLoginFunction = () =>{
		const { UserUsername }  = this.state ;
		const { UserPassword }  = this.state ;
		
		axios({
			method: 'post',
			url: 'http://iteam-s.mg:3001/api/v1/login',
			data: {
				username: UserUsername,
				password: UserPassword
			}
		})
		.then((response) => {
			Keyboard.dismiss()
			if (response.status == 200){
				Keyboard.dismiss()
				AsyncStorage.setItem(KEY_ID, response.data.userID);
				AsyncStorage.setItem(KEY_TOKEN, response.data.token);
				this.props.navigation.navigate('main', { User_name: UserUsername });
			}
		})
		.catch((err) => {
			Keyboard.dismiss()
			if (err.response.status == 401) {
				Keyboard.dismiss()
				Alert.alert(err.response.data.error)
			}
			else{
				Alert.alert("Something went wrong !")
			}
		})
	}


	render(){
		
		return (
			<View style={styles.container}>
				<AlertModal text="" action={this.handler} isVisible={this.state.modalShow}> </AlertModal>
				<ImageBackground style={styles.backgroundImage} source={require('./assets/images/djs2.jpg')} ></ImageBackground>
				<Image style={styles.logoLogin} source={require('./assets/images/dlog.png')} ></Image>
				<Text style={styles.textHome}>Sign in now to discover the other side of party</Text>
				<Container style={styles.loginForm}>
					<Text style={styles.textLogin}>S'identifier</Text>
					<TextInput  onChangeText={UserUsername => this.setState({UserUsername})} style={styles.inputUser} placeholder="Username" />
					<TextInput onChangeText={UserPassword => this.setState({UserPassword})} style={styles.inputPass} placeholder="Password" secureTextEntry/>
					<Text onPress={() => {
                this.setState({modalShow: true})
              }} style={styles.btnLogin}>LOGIN</Text>
					<Text style={styles.forgot} onPress={() => this.props.navigation.navigate('forgot')}>Forgot Password ?</Text>
					<Text style={styles.signUp} onPress={() => this.props.navigation.navigate('create')}>Don't have Daz account? <Text style={styles.signColor}>Sign Up.</Text></Text>
				</Container>

			</View>
		)  
	}	
}


//Page création de compte
class create extends Component {
	constructor(props) {
		super(props)
		this.state = {
			UserUsername: '',
			UserMail: '',
			UserPassword: '',
			UserCPassword: '',
		}
	}

	UserRegisterFunction = () =>{
		const { UserUsername }  = this.state ;
		const { UserMail }  = this.state ;
		const { UserPassword }  = this.state ;
		const { UserCPassword }  = this.state ;

		var mailRegex = new RegExp ("^[a-z]{2,}[a-z0-9_.]+@[a-z]{1,}[a-z0-9]+.[a-z]{2,3}$")
		var passRegex = new RegExp("(.){6,}")

		if (mailRegex.test(UserMail == true)){
			if (passRegex.test(UserPassword == true)){
				if (UserPassword == UserCPassword){
					axios({
						method: 'post',
						url: 'http://iteam-s.mg:3001/api/v1/signup',
						data: {
							username: UserUsername,
							mail: UserMail,
							password: UserPassword,
						}
					})
					.then((response) => {
					})
					.catch((error) => {
						console.log(error);
					});	
				}
				else{
					alert.Alert("Votre mot de passe ne correspond pas")
				}
			}
			else{
				alert.Alert("Le mot de passe doit comporter 6 chiffres au minimum")
			}
		}
		else{
			alert.Alert("Invalid email addres")
		}
	}

	render(){
		return(
			<View style={styles.container}>
				<ImageBackground style={styles.backgroundImage} source={require('./assets/images/djs2.jpg')} ></ImageBackground>
				<Image style={styles.logoLogin} source={require('./assets/images/dlog.png')} ></Image>
				<Text style={styles.textHome}>Join us now to discover the other side of party</Text>
				<Container style={styles.loginForm}>
					<Text style={styles.textLogin}>Sign up</Text>
					<TextInput style={styles.inputUserCreate} onChangeText={UserUsername => this.setState({UserUsername})} placeholder="Username"/>
					<TextInput style={styles.inputPass} onChangeText={UserMail => this.setState({UserMail})} placeholder="Email"/>
					<TextInput style={styles.inputPass} onChangeText={UserPassword => this.setState({UserPassword})} placeholder="Password" secureTextEntry/>
					<TextInput style={styles.inputPass} onChangeText={UserCPassword => this.setState({UserCPassword})} placeholder="Confirm password" secureTextEntry/>
					<Text style={styles.btnCreate} onPress={() => this.props.navigation.navigate('mail_confirmation')}>CREATE ACCOUNT</Text>
					<Text style={styles.signIn}>Already have Daz account? <Text style={styles.signColor}>Sign In.</Text></Text>
				</Container>
			</View>
		)
	}
}


//Page Forgot password
class forgot extends Component{
	render(){
		return(
			<View style={styles.container}>
				<AntDesign style={styles.goBack}  onPress={() => this.props.navigation.goBack()} name="left" size={28} color="#ff005d"/>
				<Text style={styles.titleForgot}>Forgot Password</Text>
				<Text style={styles.textForgot}>Veuillez saisir votre adresse email pour récupérer votre compte</Text>
				<TextInput style={styles.inputUser} placeholder="Email address"/>
				<Text style={styles.btnForgot} onPress={() => this.props.navigation.navigate('login')}>CONFIRMER</Text>
			</View>
		)
	}	
}


//Page Forgot password
class mail_confirmation extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.titleForgot}>Confirm email</Text>
				<Text style={styles.textForgot}>
					Veuillez confirmer votre adresse email pour finaliser votre inscription.
					Un code à 6 chiffres a été envoyé à votre adresse email.
				</Text>
				<TextInput style={styles.inputUser} placeholder="Code de confirmation"/>
				<View>
					<Text style={styles.btnMail} onPress={() => this.props.navigation.navigate('login')}>CONFIRMER</Text>
					<Text style={styles.btnMailCancel} onPress={() => this.props.navigation.navigate('login')}>ANNULER</Text>
				</View>
			</View>
		)
	}	
}


//Page MainPage
class main extends Component{
	render(){
		return(
			<View>
				<View style={styles.container}>
					<Image style={styles.coverImage} source={require('./assets/images/acover.jpg')} />
					<Ionicons name="menu" size={24} color="#fff" style={styles.menuIcon}/>
					<Text style={styles.textAvatar}>{this.props.route.params.User_name}</Text>
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
}
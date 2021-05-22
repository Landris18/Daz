import { StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
//Page de chargement//
	container:{
		alignItems: 'center',
		flex: 2,
		justifyContent:'center',
		width: wp('100%'),
		height: hp('100%'),
		backgroundColor:'#ffffff'
	},
	logoView:{
		backgroundColor: '#ffffff',
		alignItems: 'center',
		flex: 2,
		justifyContent:'center',
     },
     logo:{
		width: wp('35%'),
		height: hp('25%'),
		justifyContent:'center',
          alignItems: 'center',
     },
	madeView:{
		position:'absolute',
		bottom:45,
		alignItems:'center',
     },
     dazing:{
          fontFamily: 'ProductBold',
		color: '#ffffff',
          fontSize: 14,
     },
	made:{
		fontFamily: 'Product',
		color: '#ffffff',
		fontSize: 14,
	},
	backgroundImage:{
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},


//Page de Login//
	loginForm:{
		alignItems: 'center',
		width: wp('100%'),
		height: hp('65%'),
		position:'absolute',
		bottom:hp('0%'),
		borderTopRightRadius:30,
		borderTopLeftRadius:30,
	},
	logoLogin:{
		width: wp('35%'),
		height: hp('25%'),
		justifyContent:'center',
		position:'absolute',
		top:hp('7%'),
		left:wp('4%')
	},
	textHome:{
		fontFamily: 'Product',
		color: '#fff',
		width:wp('100%'),
		fontSize: 20,
		width:wp('50%'),
		position:'absolute',
		top:hp('15%'),
		left:wp('40%')

	},
	textLogin:{
		fontFamily: 'ProductBold',
		color: '#555',
		fontSize: 40,
		width:275,
		textAlign:'center',
		marginTop:hp('5%'),
	},
	inputUser:{
		fontFamily: 'Product',
		backgroundColor: '#f5f5f5',
		width: wp('80%'),
		height: hp('7%'),
		borderRadius:25,
		paddingLeft:20,
		color:'#444',
		marginTop:hp('6%'),
	},
	inputUserCreate:{
		fontFamily: 'Product',
		backgroundColor: '#f5f5f5',
		width: wp('80%'),
		height: hp('7%'),
		borderRadius:25,
		paddingLeft:20,
		color:'#444',
		marginTop:hp('3%'),
	},
	inputPass:{
		fontFamily: 'Product',
		backgroundColor: '#f5f5f5',
		width: wp('80%'),
		height: hp('7%'),
		borderRadius:25,
		paddingLeft:20,
		color:'#444',
		marginTop:hp('2%'),
	},
	btnLogin:{
		fontFamily:'ProductBold',
		backgroundColor:'#ff005d',
		// ,f25046
		fontSize:13,
		color:'#fff',
		padding:hp('1.8%'),
		borderRadius:22,
		paddingLeft:60,
		paddingRight:60,
		marginTop:hp('6%')
	},
	bottomBar:{
		height:50,
		backgroundColor: '#fff',
		borderColor:'#999',
		borderTopWidth:0.01,
		fontSize:400,
	},
	btnCreate:{
		fontFamily:'ProductBold',
		backgroundColor:'#ff005d',
		fontSize:13,
		color:'#fff',
		padding:hp('1.8%'),
		borderRadius:22,
		paddingLeft:60,
		paddingRight:60,
		marginTop:hp('3%')
	},
	signUp:{
		fontFamily:'ProductBold',
		color: '#555',
		marginTop:hp('6.8%')
	},
	signIn:{
		fontFamily:'ProductBold',
		color: '#555',		marginTop:hp('4%'),
		marginTop:hp('3%')
	},
	forgot:{
		fontFamily:'Product',
		color: '#444',
		marginTop:18,
	},
	signColor:{
		color:"#ff005d"
	},



//Page Forgot Password
	goBack:{
		fontWeight:'bold',
		position:'absolute',
		top:hp('8%'),
		left:wp('8%')
	},
	titleForgot:{
		fontFamily: 'ProductBold',
		color: '#555',
		fontSize: 40,
		width:wp('50%'),
		left:wp('-11%'),
		textAlign:'left'
	},
	textForgot:{
		fontFamily: 'Product',
		color: '#666',
		fontSize: 18,
		width:275,
		marginTop:hp('4%'),
	},
	btnForgot:{
		fontFamily:'ProductBold',
		backgroundColor:'#ff005d',
		fontSize:13,
		color:'#fff',
		padding:hp('1.8%'),
		borderRadius:22,
		paddingLeft:hp('15%'),
		paddingRight:hp('15%'),
		marginTop:hp('6%')
	},
	btnMail:{
		fontFamily:'ProductBold',
		backgroundColor:'#ff005d',
		fontSize:13,
		color:'#fff',
		padding:hp('1.8%'),
		borderRadius:22,
		paddingLeft:hp('5%'),
		paddingRight:hp('5%'),
		marginTop:hp('6%'),
		marginLeft:wp('-28%'),
		marginRight:wp('9%')
	},
	btnMailCancel:{
		fontFamily:'ProductBold',
		backgroundColor:'#cccccc',
		fontSize:13,
		color:'#fff',
		padding:hp('1.8%'),
		borderRadius:22,
		paddingLeft:hp('5%'),
		paddingRight:hp('5%'),
		marginTop:hp('-5.8%'),
		marginLeft:wp('14%'),
		marginRight:wp('-28%')
	},
	mail_c:{
		fontFamily: 'ProductBold',
		color: '#444',
		fontSize:18
	},


//Page Main
	coverImage:{
		width:1000,
		height:150,
		alignItems:'center',
		justifyContent:'center',
		borderBottomLeftRadius:55,
		borderBottomRightRadius:55,
		position:'absolute',
		top:0,
	},
	menuIcon:{
		position:'absolute',
		top:34,
		left:15,
	},
	textAvatar:{
		color:'#fff',
		fontFamily:'Product',
		fontSize:13,
		position:'absolute',
		top:38,
		right:55,
	},
	avatarImage:{
		width:35,
		height:35,
		position:'absolute',
		top:31,
		right:15,
		borderRadius:50,
		borderWidth:2,
		borderColor:'#fff'
	},
	editCover:{
		fontFamily:'Product',
		top:110,
		right:20,
		position:'absolute',
		fontSize:14,
		borderColor:'#ffffff7c',
		borderWidth:0,
		paddingVertical:5,
		paddingHorizontal:15,
		borderRadius:20,
		backgroundColor:'#ffffff7c'
	},
	textContents:{
		fontFamily:'Product',
		fontSize:17,
		color:'#555',
		position:'absolute',
		top:170,
		left:40,
	},
	scroll:{
		paddingTop:15,
		paddingBottom:15,
		backgroundColor: '#fff',
		marginHorizontal: 2,
		height:180,
		top:205,
	},
	textNotifs:{
		fontFamily:'Product',
		fontSize:17,
		color:'#555',
		position:'absolute',
		top:395,
		left:40,
	},
	clear:{
		fontFamily:'Product',
		color:'#666',
		borderColor:'#666',
		borderWidth:0.5,
		borderRadius:20,
		padding:5,
		fontSize:11,
		position:'absolute',
		right:40,
		top:397,
	},
//Style modal
modalView:{
	height:hp('25%'),
	width:wp('80%'),
	flexDirection: 'column',
     justifyContent: 'center',
	alignItems: 'center', 
	backgroundColor:'#fff',
	borderRadius:10,
},
modalText:{
	color:'#666', 
	fontSize:16,
	fontFamily: 'Product',
	alignItems: 'center',
	textAlign:'center',
	marginTop:hp('1.5%'),
	marginLeft:wp('10%'),
	marginRight:wp('10%'),
},
btnModal:{
	fontFamily:'ProductBold',
	backgroundColor:'#ff005d',
	// ,f25046
	fontSize:13,
	color:'#fff',
	padding:hp('1.8%'),
	borderRadius:22,
	paddingLeft:60,
	paddingRight:60,
	marginTop:hp('3.5%')
},

});
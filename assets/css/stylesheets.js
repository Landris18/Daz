import { StyleSheet} from 'react-native';


export default StyleSheet.create({
//Page de chargement//
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
     logo:{
		width:160,
		height:160,
		borderRadius:80,
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
		color: '#999',
          fontSize: 14,
     },
	made:{
		fontFamily: 'Product',
		color: '#999',
		fontSize: 14,
	},


//Page de Login//
     loginPage:{
          backgroundColor: '#ffffff',
          alignItems: 'center',
          flex: 2,
		justifyContent:'center',
	},
	logoLogin:{
		width:140,
		height:140,
		borderRadius:80,
		justifyContent:'center',
          alignItems: 'center',
	},
	textLogin:{
		fontFamily: 'Product',
		color: '#999',
		fontSize: 20,
		width:275,
		textAlign:'center',
		marginTop:5,
	},
	inputUser:{
		fontFamily: 'Product',
		backgroundColor: '#fafafa',
		width:280,
		height:45,
		borderRadius:25,
		paddingLeft:20,
		color:'#555',
		marginTop:27,
	},
	inputPass:{
		fontFamily: 'Product',
		backgroundColor: '#fafafa',
		width:280,
		height:45,
		borderRadius:25,
		paddingLeft:20,
		color:'#555',
		marginTop:15
	},
	btnLogin:{
		fontFamily:'ProductBold',
		backgroundColor:'#f25046',
		fontSize:13,
		color:'#fff',
		padding:12,
		borderRadius:20,
		paddingLeft:60,
		paddingRight:60,
		marginTop:45,
	},
	bottomBar:{
		height:50,
		backgroundColor: '#fff',
		borderColor:'#999',
		borderTopWidth:0.01,
		fontSize:400,
	},



//Page Forgot Password
	forgot:{
		fontFamily:'Product',
		color: '#777',
		marginTop:18,
	},
	textForgot:{
		fontFamily: 'Product',
		color: '#999',
		fontSize: 20,
		width:200,
		textAlign:'center',
		marginTop:5,
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
		fontSize:18,
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
		top:90,
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
	}
});
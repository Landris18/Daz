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
		backgroundColor:'#901d78',
		fontSize:13,
		color:'#fff',
		padding:12,
		borderRadius:20,
		paddingLeft:45,
		paddingRight:45,
		marginTop:45,
	},
	bottomBar:{
		height:50,
		backgroundColor: '#010c14',
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
		width:150,
		textAlign:'center',
		marginTop:5,
	},


//Page Main
	coverImage:{
		width:1000,
		height:200,
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
		top:154,
		right:20,
		position:'absolute',
		color:'#222',
		fontSize:14,
		borderColor:'#fff',
		borderWidth:0.5,
		paddingVertical:5,
		paddingHorizontal:15,
		borderRadius:20,
		backgroundColor:'#fff'
	},
	textContents:{
		fontFamily:'ProductBold',
		fontSize:26,
		color:'#222',
		position:'absolute',
		top:230,
		left:25,
	},
	scroll:{
		paddingTop:15,
		paddingBottom:15,
		backgroundColor: '#fff',
		marginHorizontal: 2,
		height:180,
		top:275,
	},
	textNotifs:{
		fontFamily:'ProductBold',
		fontSize:26,
		color:'#222',
		position:'absolute',
		top:465,
		left:25,
	},
});
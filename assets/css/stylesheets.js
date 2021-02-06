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
		width:140,
		height:140,
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
});
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import * as Font from 'expo-font';
import { Feather } from '@expo/vector-icons';



function LoadProduct() {
	Font.loadAsync({
		'Product': require('./assets/fonts/PS.ttf'),
	});
}
LoadProduct()



export default class Loading extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.hello}>TONGASOA</Text>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	hello:{
		fontFamily: 'Product',
	}
});
import React, { Component } from 'react';

import { View, Text} from 'react-native';
import Modal from 'react-native-modal';
import styles from '../../assets/css/css';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export class AlertModal extends Component{
     render(){
          return(
               <Modal 
               isVisible={this.props.isVisible}
               onBackdropPress={() => {this.props.action()}}
               onSwipeComplete={() => {this.props.action()}}
               swipeDirection="right"
               animationInTiming={1000}
               animationOutTiming={1} 
               animationIn={'shake'}
               animationOut={'swing'}
               backdropOpacity={0.80}
               style={{alignItems:'center'}}>
                    <View style={styles.modalView}>
                         <MaterialCommunityIcons name={this.props.icon} size={60} color="#999" style={{marginTop:hp('-2%')}} />
                         <Text style={styles.modalText}>{this.props.text}</Text>
                         <Text onPress={() => {this.props.action()}} style={styles.btnModal}> Fermer</Text>
                    </View>
               </Modal>
          )
     }
}
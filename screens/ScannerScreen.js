import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class TransactionScreen extends React.Component {
// permissions
  constructor(){
     super();
     this.state = {
       hasCameraPermissions:null,
       scanned:false,
       scannedData:'',
       buttonState:'normal'
     }
   
    }

  getCameraPermissions=async()=>{
// permission granted
 const {status}=await Permissions.askAsync(Permissions.CAMERA);
 this.setState({
   hasCameraPermissions:status==="granted"
 });

  }
  
 handleBarCodeScanned=async({type,data})=>{
   this.setState({
     scanned:true,
  
     scannedData:data,
  
     buttonState:'normal'
  
    });
 }

  render() {
     const hasCameraPermissions = this.state.hasCameraPermissions;
     const scanned = this.state.scanned;
     const buttonState = this.state.buttonState;

// button pressed so

    if (buttonState === "clicked" && hasCameraPermissions){
      return(
         <BarCodeScanner onBarCodeScanned = {scanned?undefined:this.handleBarCodeScanned} />
      );
    }

    else if (buttonState==="normal"){
     

    return (
         <View style={styles.container}>
           <Text style={styles.displayText}>
             {hasCameraPermissions === true ? this.state.scannedData : "Request Camera Permission"}
           </Text>
   <TouchableOpacity style={styles.scanButton} onPress={this.getCameraPermissions}>
          <Text style={styles.buttonText}>Scan Your QR Code</Text>
   </TouchableOpacity>
 
         </View>
      );
    }
   }
  }
 
  const styles = StyleSheet.create({
    container:{ flex: 1, justifyContent: 'center', alignItems: 'center' },

      displayText:{
      fontSize:15,
    },

   scanButton:{
     backgroundColor:'lightblue',
          padding:10,
          margin:10,

     },

     buttonText:{
       fontSize:15,
     }


  })

  

import React from 'react';
import {View,Text,StyleSheet,TextInput,Button,TouchableOpacity} from 'react-native';
import CardHolder from '../cardHolder/cardHolder';
import FloatInput from '../floatingInput/floatingInputText';
import FlatListing from '../flateList/flateList';

export default class Frame extends React.Component{

  render(){
    
    return(
        <View style={frameAppstyles.parentStyle}>

            <View style={frameAppstyles.apptoolbarStyle}>
                <Text style={frameAppstyles.textStyle}>First Sample</Text>
            </View>

            <View style={frameAppstyles.appFormStyle}>

                <View style={frameAppstyles.nameStyle}>
                    <Text style={frameAppstyles.appTextStyle} >NAME</Text>
                    <TextInput style={frameAppstyles.inputTextStyle }  placeholder="Enter name here"></TextInput>
                </View>

                <View style={frameAppstyles.nameStyle}>
                    <Text style={frameAppstyles.appTextStyle}>PASSWORD</Text>
                    <TextInput style={frameAppstyles.inputTextStyle} placeholder="Enter password " secureTextEntry={true}></TextInput>
                </View>

                <TouchableOpacity style={frameAppstyles.loginButtonStyle}>
                    <Text style={frameAppstyles.loginTextStyle} >Login</Text>
                </TouchableOpacity>

            </View>
            
            <FlatListing/>
      </View>
    )
  }
}

const frameAppstyles=StyleSheet.create({

    parentStyle:{
        flex:1,
    },

    apptoolbarStyle:{
        backgroundColor:"#18FFFF",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    textStyle:{
        fontSize:20,
        margin:20,
        color:"black",
        fontWeight:"bold"
    },
    appFormStyle:{
        backgroundColor:"white",
        flexDirection:"column"
    },

    nameStyle:{
        flexDirection:"row",
        alignItems:"center"
    },

    inputTextStyle:{
        backgroundColor:"#BDBDBD",
        paddingLeft:20,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:20,
        margin:10,
        borderColor:"#BDBDBD",
        borderRadius:50,
        borderWidth:1,
        flex:0.6,
        
    },

    appTextStyle:{
        fontSize:15,
        margin:10,
        color:"black",
        fontWeight:"bold",
        flex:0.4
    },

    loginButtonStyle:{
        margin:10,
        padding:10,
        backgroundColor:'#689F38',
        borderRadius:25,
    },

    loginTextStyle:{
        color:"black",
        fontSize:20,
        alignSelf:"center"
    }
    
});
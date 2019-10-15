import React from 'react';
import {View,Text,StyleSheet,TextInput,Button,TouchableOpacity,Image} from 'react-native';

export default class CardHolder extends React.Component{
    constructor(props){
        super(props);
        this.dataItem=this.props.dataItem;
    }
    render(){
        return(
            <View style={cardAppstyles.parentStyle}>

                 <Image source={{uri:this.dataItem.imgUrl}} style={ cardAppstyles.imageStyle} />

                 <View style={cardAppstyles.cardTitleStyle}>
                     <Text style={cardAppstyles.textTitleStyle}>{this.dataItem.title}</Text>
                     <Text style={cardAppstyles.textsubTitleStyle}>{this.dataItem.subTitle}</Text>
                 </View>
                 <View style={cardAppstyles.timeStyle}>
                    <Text style={cardAppstyles.textTimeStyle}>{this.dataItem.time}</Text>
                 </View>
            </View>
        );
    }
}

const cardAppstyles=StyleSheet.create({

    parentStyle:{
        flexDirection:"row",
    },
    imageStyle:{
        width:50,
        height:50,
        margin:10
    },
    cardTitleStyle:{
        flexDirection:"column",
        alignSelf:"center",
        margin:5,
    },
    textTitleStyle:{
        fontSize:15,
        color:"black",
    },
    textsubTitleStyle:{
        fontSize:14,
        color:"#BDBDBD",
    },
    textTimeStyle:{
        color:"black",
        margin:5,
        fontSize:15,
    },

    timeStyle:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center",
        marginRight:10
    }
});
import React from 'react';
import {FlatList,Alert,TouchableHighlight,TouchableNativeFeedback} from 'react-native';
import CardHolder from '../cardHolder/cardHolder';

export default class FlatListing extends React.Component{
    render(){
        const arrayOfItem=[ 
        {
            key: '0',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv",
                subTitle:"This is appinventiv",
                time:"4:00pm"
            }
         },
         {
            key: '1',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv 1",
                subTitle:"This is appinventiv",
                time:"7:00pm"
            }
         },
         {
            key: '2',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv 2",
                subTitle:"This is appinventiv",
                time:"5:00pm"
            }
         },
         {
            key: '3',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv 3",
                subTitle:"This is appinventiv",
                time:"6:00pm"
            }
         },
         {
            key: '4',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv 4",
                subTitle:"This is appinventiv",
                time:"7:00pm"
            }
         },
         {
            key: '5',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv 5",
                subTitle:"This is appinventiv",
                time:"8:00pm"
            }
         },
        {
            key: '6',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv",
                subTitle:"This is appinventiv",
                time:"4:00pm"
            }
         },
         {
            key: '7',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv 1",
                subTitle:"This is appinventiv",
                time:"7:00pm"
            }
         },
         {
            key: '8',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv 2",
                subTitle:"This is appinventiv",
                time:"5:00pm"
            }
         },
         {
            key: '9',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv 3",
                subTitle:"This is appinventiv",
                time:"6:00pm"
            }
         },
         {
            key: '10',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv 4",
                subTitle:"This is appinventiv",
                time:"7:00pm"
            }
         },
         {
            key: '11',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv 5",
                subTitle:"This is appinventiv",
                time:"8:00pm"
            }
         },
         {
            key: '12',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv 6",
                subTitle:"This is appinventiv",
                time:"4:00pm"
            }
         },
         {
            key: '13',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv 7",
                subTitle:"This is appinventiv",
                time:"7:00pm"
            }
         },
         {
            key: '14',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv 8",
                subTitle:"This is appinventiv",
                time:"5:00pm"
            }
         },
         {
            key: '15',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv 9",
                subTitle:"This is appinventiv",
                time:"6:00pm"
            }
         },
         {
            key: '10',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv 10",
                subTitle:"This is appinventiv",
                time:"7:00pm"
            }
         },
         {
            key: '16',
            dataItem:{
                imgUrl:"https://facebook.github.io/react-native/img/tiny_logo.png",
                title:"Appinventiv 11",
                subTitle:"This is appinventiv",
                time:"8:00pm"
            }
         }]
         
        return(
            <FlatList  
                data={arrayOfItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item,index)=>{item.key}}
                horizontal={false}
                pagingEnabled={false}
                showsHorizontalScrollIndicator={false}
                initialScrollIndex={5}
                ItemSeparatorComponent={this.ItemSeparatorComponent}
                renderItem={({item,index,separators}) => 

                <TouchableHighlight 
                onPress={()=>Alert.alert("Welcome to the appinventiv at "+index)}
                onShowUnderlay={separators.highlight}>
                    <CardHolder dataItem={item.dataItem}/>
                </TouchableHighlight>
                }>
            </FlatList>  
                
        )
    }
}
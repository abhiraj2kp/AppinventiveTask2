import React from 'react';
import { Text,View,StyleSheet } from 'react-native';
import FloatingTitleTextInputField from '@verticalstrategy/react-native-floating-label-text-input'

export default class FloatInput extends React.Component{

      render(){
        return (
          <View>
              <Text>Hello world this is abhi parker</Text>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    headerText: {
      fontSize: 16,
      color: 'black',
    }
  });

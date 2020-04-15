/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, Image, SafeAreaView,ScrollView  } from 'react-native';
import {Header} from 'react-native-elements';



export default class Reservations extends Component {

   
    render() {
       
        return (
            <View style={styles.container}>
            <Header
        containerStyle={{ width: '100%', backgroundColor: '#09203f', borderBottomWidth: 0,maxHeight:'5%' }}
centerComponent={{ text: 'More', style: { color: '#fff',marginBottom:'7%', fontSize:18} }}

/>
             <Text>
             More (Admin menu, settings vs)
             </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
          
    },
    

   
});
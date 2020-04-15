/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,

} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Logo extends Component {

    home(){
        Actions.home()

    }

    render() {
        return (
            <View style={styles.container}>

                <TextInput style={styles.inputBox}

                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Enter your E-mail"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    
                    keyboardType="email-address"
                    onSubmitEditing={()=>this.password.focus()}
                />
                
                <TextInput style={styles.inputBox}

                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    ref={(input)=>this.password=input}
                />
                <TouchableOpacity style={styles.button} onPress={this.home}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputBox: {
        
        borderWidth:1,
        borderBottomColor:'#09203f',
        
        width:300,
        maxHeight: '30%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: '#ffffff',
        paddingHorizontal: 16,
        borderRadius: 25,
        marginVertical: 10,
        fontSize: 15,
        letterSpacing: 0.1,

    },
    buttonText: {
        letterSpacing: 4,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    button: {
        minWidth: '70%',
        backgroundColor: '#041328',
        borderRadius: 25,

        marginVertical: 50,
        paddingVertical: 13,

    }

});
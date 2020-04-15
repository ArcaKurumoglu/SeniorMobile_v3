/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, Image, SafeAreaView, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import {Header} from 'react-native-elements';
 

export default class Courses extends Component {


    render() {
        let day = [{
            value: 'Monday',
        }, {
            value: 'Tuesday',
        }, {
            value: 'Wednesday',
        }, {
            value: 'Thursday',
        }, {
            value: 'Friday',
        }, {
            value: 'Saturday',
        }, {
            value: 'Sunday',
        },
        ];
        let time = [{
            value: '10.40 - 11.30',
        }, {
            value: '11.40 - 12-30',
        }, {
            value: '13.40 - 14.30',
        }, 
        ];
        let course = [{
            value: 'Zumba',
        }, {
            value: 'Stretching',
        }, {
            value: 'Crunch',
        }];
 
        return (
            <View style={styles.container}>
             <Header
        containerStyle={{ width: '100%', backgroundColor: '#09203f', borderBottomWidth: 0,maxHeight:'5%' }}
centerComponent={{ text: 'Courses', style: { color: '#fff',marginBottom:'7%', fontSize:18} }}

/>
                <View style={styles.dropdown}>
                <Dropdown
                        label='Choose a Day'
                        data={day}
                    />
                    <Dropdown
                        label='Choose a Course'
                        data={course}
                    />
                    <Dropdown
                        label='Choose Time slot'
                        data={time}
                    />
                    

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    dropdown: {
        width: 200,
        marginTop: '20%',
        marginLeft: '5%',

    },


});
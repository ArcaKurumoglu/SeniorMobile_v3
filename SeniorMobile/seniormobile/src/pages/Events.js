/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, Image, SafeAreaView,ScrollView  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CollapsibleList from "react-native-collapsible-list";

export default class Events extends Component {

   
    render() {
       
        return (
            <View style={styles.container}>
 
 <CollapsibleList
                        numberOfVisibleItems={1}
                        wrapperStyle={styles.wrapperCollapsibleList}
                        buttonContent={
                            <View style={styles.button}>
                                <Text style={styles.buttonText}><Icon name="chevron-down" style={styles.icons}/></Text>
                            </View>
                        }
                    >
                        <View style={styles.collapsibleItem}>
                            <Text style={styles.announcement}><Icon name="bullhorn" style={styles.icons} /> “SPORTS AS A WAY OF LIFE” Zumba Master Class 2020, Spring </Text>
                        </View>
                        <View style={styles.collapsibleItem}>
                            <Text>Date: March 3, Tuesday Time: 18:30 p.m. </Text>
                        </View>
                        <View style={styles.collapsibleItem}>
                            <Text>Place : Main Sports Hall</Text>
                        </View>
                        <View style={styles.collapsibleItem}>
                            <Text>No description</Text>
                        </View>
                    </CollapsibleList>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container :{
flex:1
    },


    wrapperCollapsibleList: {
        flex: 1,
        marginTop: 10,
        overflow: "hidden",
        backgroundColor: "#FFF",
        borderRadius: 5
    },
    collapsibleItem: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#CCC",
        padding: 10,

    },

    button: {

    },

    buttonContent: {

    },
    buttonText: {
        textAlign: "center",
        fontWeight:"bold",
    },
    announcement: {

        flex: 2,
        justifyContent: "space-around",
        fontWeight: "bold",

    },
    icons: {
        color: "red",
        fontSize: 14,
    }



});
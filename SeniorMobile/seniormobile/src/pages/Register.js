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
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import Logo from '../components/Logo';
import Form from '../components/Form';
import { Actions } from 'react-native-router-flux';
import { onChange } from 'react-native-reanimated';
import InputText from "../components/InputText";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#09203f',
    
    },
    bgcolor:{
        backgroundColor: '#09203f'
    },
    inputBox: {

        width: 200,
        height: 35,
        backgroundColor: 'rgba(255,255,255,0.1)',
        paddingTop: 100,
        borderRadius: 10,
        position: 'absolute',
        
    },

    signupTextCont: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        

    },
    registerButton: {
        color: 'rgba(255,255,255,1)',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',

    },
    accountText: {
        color: 'rgba(255,255,255,0.6)',
        textAlign: 'center',
        fontSize: 15,
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
        paddingVertical: 13,
        marginVertical:4,

    },
    Text: {
        letterSpacing: 2,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff',
        

    },
    bilText: {
        letterSpacing: 2,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        color: '#ffffff',

    },
    registerText: {
        letterSpacing: 2,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff',
       

    },
    errorText:{
        color:'#ffffff',
        paddingHorizontal:15,
        
    }

});

class Register extends Component {

    signs() {
        Actions.pop()
    }

    createNewUser = () => {
        alert("Registered")
    }
    onSubmit = (values) => {
        console.log(values);
    }


    renderTextInput = (field) => {
        const { meta: { touched, error }, label, secureTextEntry, maxLength, keyboardType, placeholder, input: { onChange, ...restInput } } = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    label={label}
                    {...restInput}

                />
               {(touched && error) &&<Text style={styles.errorText}>{error}</Text>}
            </View>
        );

    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <ScrollView style={styles.bgcolor}>
            <View style={styles.container}>
            <Logo />
                <Text style={styles.registerText}>REGISTER FORM</Text>

                <Field
                    name="name"
                    placeholder="Name"
                    component={this.renderTextInput} />
                <Field
                    name="surname"
                    placeholder="Surname"
                    component={this.renderTextInput} />
                <Field
                    name="id"
                    placeholder="Bilkent ID Number"
                    component={this.renderTextInput} />
                <Field
                    name="email"
                    placeholder="E-mail address"
                    component={this.renderTextInput} />
                <Field
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    component={this.renderTextInput} />
                <Field
                    name="repassword"
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    component={this.renderTextInput} />
                    
                <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>


                <View style={styles.signupTextCont}>
                    <Text style={styles.accountText}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.signs}><Text style={styles.registerButton}>Sign In</Text></TouchableOpacity>
                </View>

            </View>
            </ScrollView>
        );
    }
}

const validate = (values) => {

    const errors = {};
    if (!values.name) {
        errors.name = "Name is required"
    }
    if (!values.surname) {
        errors.surname = "Surname is required"
    }
    if (!values.id) {
        errors.id = "ID is required"
    }
    if (!values.email) {
        errors.email = "E-mail is required"
    }
    if (!values.password) {
        errors.password = "Password is required"
    }
    if (!values.repassword) {
        errors.repassword = "Password validation is required"
    }
    return errors;
}

export default reduxForm({

    form: "register",
    validate
})(Register)
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formWrapper}>
                    <Text style={styles.welcometext}>Welcome to Training Heights</Text>
                    <View style={styles.formRow}>
                        <TextInput style={styles.textInput} placeholder="enter username" placeholderTextColor="#333" />
                    </View>
                    <View>
                    <TextInput style={styles.textInput} placeholder="enter password" placeholderTextColor="#333" secureTextEntry={true} />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.loginbtn}><Text style={styles.logintext}>Login</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formWrapper: {
        width: '90%'
    },

    formRow: {
        marginBottom: 10
    }, 

    textInput: {
        backgroundColor: '#ddd',
        height: 40,
        paddingHorizontal: 10,
    },

    welcometext: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },

    loginbtn: {
        backgroundColor: 'blue',
        paddingVertical: 10
    },

    logintext: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
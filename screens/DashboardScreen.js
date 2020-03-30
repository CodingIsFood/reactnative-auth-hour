import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

class DashboardScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.dashboardWrapper}>
                    <Text style={styles.usertext}>Hello user</Text>
                    <TouchableOpacity style={styles.logoutbtn}><Text style={styles.logoutbtntext}>Logout</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    dashboardWrapper: {
        textAlign: 'center',

    },

    usertext: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10 
    },

   

    logoutbtn: {
        backgroundColor: 'red',
        paddingBottom: 10,
        alignSelf:'center',
        width: 100,
    },

    logoutbtntext: {
        textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold'
    },

    
  });
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import AppContainer from './routes';

export default function App() {
  const [text, setText] = useState("Initial text");

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Click Me" onPress={()=>setText('I have been changed')} />
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

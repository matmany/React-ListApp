/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Button,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  loginView: {
    marginTop: 25,
    flexDirection: 'column',
    alignItems:"center",
    color:"#E63946",
    backgroundColor: "#E63946"
  },
  avatar: {
    width:128,
    height:128,
    borderRadius:100,
    marginBottom:25
  },
  login: {
    width: 264,
    height: 50,
    borderColor: '#1d3557', 
    borderWidth: 1,
    color:'white',
    marginTop: 10,
    borderRadius: 20,
    marginBottom:20
  },
  btn: {
    width:200,
    height:30
  }
})

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{backgroundColor:"#E63946", flex:1}} >
        <View style={styles.loginView} color="#E63946">
          <Image
          style={styles.avatar}
            source={{
              uri:'https://static.wikia.nocookie.net/ultimate-marvel-cinematic-universe/images/e/ec/Yogesh-pugaonkar-yo-penny-parker-12-18-72.jpg'
            }}
            />
          <TextInput 
            style={styles.login}
            defaultValue = 'email'
            />
            <TextInput 
            style={styles.login}
            defaultValue = 'passs'
            />
            <Button
              onPress={onPressLogin}
              style={styles.btn}
              title='Login'
              color='#1d3557'
              accessibilityLabel="Faça o login"
            />
        </View>
      </SafeAreaView>
    </>
  );
};

function onPressLogin() {
  Alert.alert("Hello There");
}

export default App;

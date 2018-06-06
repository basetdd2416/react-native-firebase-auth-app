import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'

export default class App extends React.Component {
  componentDidMount() {
    var config = {
      apiKey: "AIzaSyDAND_Cfw7Sht9I0OgacvCH2nV09wi1o54",
      authDomain: "one-time-password-b8113.firebaseapp.com",
      databaseURL: "https://one-time-password-b8113.firebaseio.com",
      projectId: "one-time-password-b8113",
      storageBucket: "one-time-password-b8113.appspot.com",
      messagingSenderId: "490745631339"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

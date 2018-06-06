import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-b8113.cloudfunctions.net'

class SignUpForm extends Component {
  state = { 
    phone: '',
    error: null 
  }
  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })  
    } catch (error) {
      this.setState({ error })
    }
   }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter phone number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
          <Button title="Submit" onPress={this.handleSubmit} />
        </View>
      </View>
    );
  }
}

export default SignUpForm;
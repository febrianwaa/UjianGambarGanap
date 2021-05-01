import React, { Component } from 'react'
import { Button, Text, View, StyleSheet, TextInput, onChangeText } from 'react-native'

export default class LoginForm extends Component {

constructor(props){
  super(props);

this.state = {
  nama : this.props.nama,
  username : "",
  password : ""
}
}


onTekan(text){
  alert(`hello ${this.state.username} , password anda adalah ${this.state.password}`);
  //this.setState({nama : "wicak"})
}

onChangeText(from, text){
  if(from === "username"){
    this.setState({username:text})
  } else if (from === "password"){
    this.setState({password:text});
  }
}


  render() {
    return (
      <View>
        <Text>Hello {this.state.nama},,, apa kabar? </Text>
 <Text>Username :</Text>
 <TextInput style={styles.input} onChangeText = {this.onChangeText.bind(this,"username")}/>
 <Text>Password : </Text>
 <TextInput style={styles.input} onChangeText = {this.onChangeText.bind(this,"password")}/>
<Button title = "Login" style={styles.login} onPress={this.onTekan.bind(this,"Login Berhasil")}/>


      </View>
    )
  }
 }

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});




import React, { Component } from 'react'
import { Button, Text, View, StyleSheet, TextInput, onChangeText, TouchableOpacity } from 'react-native'

import sip from './Images/sip.png'
import unsip from './Images/unsip.png'

export default class Tes extends Component {

constructor(props){
  super(props);

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
        <TouchableOpacity style={{borderRadius: 100, height: 150, width: 150, backgroundColor: '#fff', marginTop: 80}} 
        
        >
          <Image source={sip} style={styles.pillButton}/> 
        </TouchableOpacity>
<Button title = "Login" style={styles.login} onPress={this.onTekan.bind(this,"Login Berhasil")}/>


      </View>
    )
  }
 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#982fc2'
    },
    containerone: {
      flex: 1,
      alignItems: 'center'
    },
    containertwo: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopRightRadius: 60,
      borderTopLeftRadius: 60,
      padding: 40
    },
    button: {
      backgroundColor: '#fff',
      borderRadius: 100,
      height: 150,
      width: 150,
      marginTop: 100,
      alignItems:'center', 
      justifyContent: 'center'
    },
    checkButton: {
      height: 130, 
      width: 130, 
      display:'none'
    },
    pillButton: {
      height: 130, 
      width: 130,
      display: 'flex',
      marginTop: 10
    }
  });
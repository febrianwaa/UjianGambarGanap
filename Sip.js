import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


import sip from './Images/sip.png'
import unsip from './Images/unsip.png'


export default function App() {
  
 
  return (
    <View style={styles.container}>
      <View style={styles.containerone}>
        <TouchableOpacity style={{borderRadius: 100, height: 150, width: 150, backgroundColor: '#fff', marginTop: 80}}
        >
          <Image source={sip} style={styles.pillButton}/> 
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius: 100, height: 150, width: 150, backgroundColor: '#fff', marginTop: 80}}
        >
          <Image source={sip} style={styles.pillButton}/> 
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius: 100, height: 150, width: 150, backgroundColor: '#fff', marginTop: 80}}
        >
          <Image source={sip} style={styles.pillButton}/> 
        </TouchableOpacity>
      </View>
      
    </View>
  );

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
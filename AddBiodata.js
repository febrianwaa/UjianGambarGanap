import React, { Component } from 'react'
import { View,StyleSheet, Text,  TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios'

export class AddBiodata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama:"",
            email:"",
            phone:0,
            address:""
        }
    }

    handleAdd(){
        console.log(this.state)
        axios.post('http://192.168.43.231:8080/biodata/addBiodata',this.state)
        .then( (response) => {
        //  console.log(response)
          alert(response.data)
          this.props.navigation.navigate("Home")
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
    }

    render() {
        return (
            <View>
                <Text style={styles.title}> Input Nama </Text>
                <TextInput placeholder="Nama" onChangeText={(data)=>{this.setState({nama:data})}}/>
                <Text style={styles.title}> Input Email </Text>
                <TextInput placeholder="Email" onChangeText={(data)=>{this.setState({email:data})}}/>
                <Text style={styles.title}> Input Phone </Text>
                <TextInput placeholder="Phone" onChangeText={(data)=>{this.setState({phone:parseInt(data)})}}/>
                <Text style={styles.title}> Input Address </Text>
                <TextInput placeholder="Address" onChangeText={(data)=>{this.setState({address:data})}}/>
                <TouchableOpacity style={styles.button} onPress={this.handleAdd.bind(this)}><Text style={styles.title}>Submit</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Home")}}><Text style={styles.title}>Cancel</Text></TouchableOpacity>
            </View>
        )
    }
}

export default AddBiodata

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 20,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
  });
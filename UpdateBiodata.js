import React, { Component } from 'react'
import { View,StyleSheet, Text,  TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios'
import { parse } from '@babel/core'; 

export class UpdateBiodata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.route.params.id,
            nama: this.props.route.params.nama,
            email: this.props.route.params.email,
            phone: this.props.route.params.phone,
            address: this.props.route.params.address,
        }
    }

    handleUpdate(){
        console.log(this.state)
        axios.put(`http://192.168.43.231:8080/biodata/updateBuku/${this.state.id}`,this.state)
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
                <TextInput value={this.state.nama} placeholder="Nama" onChangeText={(data)=>{this.setState({nama:data})}}/>
                <Text style={styles.title}> Input Email </Text>
                <TextInput value={this.state.email} placeholder="Email" onChangeText={(data)=>{this.setState({email:data})}}/>
                <Text style={styles.title}> Input Phone </Text>
                <TextInput value={String(this.state.phone)} placeholder="Phone" onChangeonChangeText={(data)=>{this.setState({phone:parseInt(data)})}}/>
                <Text style={styles.title}> Input Address </Text>
                <TextInput value={this.state.address} placeholder="Address" onChangeText={(data)=>{this.setState({address:data})}}/>
                <TouchableOpacity style={styles.button} onPress={this.handleUpdate.bind(this)}><Text style={styles.title}>Update</Text></TouchableOpacity>
             {/*   <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("App")}}><Text style={styles.title}>Cancel</Text></TouchableOpacity>*/}
            </View>
        )
    }
}

export default UpdateBiodata

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


 

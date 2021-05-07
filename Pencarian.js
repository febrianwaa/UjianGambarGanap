import React, { Component } from 'react'
import { View,StyleSheet, Text,  TouchableOpacity, TextInput   } from 'react-native';
import axios from 'axios'
import { parse } from '@babel/core'; 
import {Picker} from '@react-native-community/picker'

export class Pencarian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            nama: "",
            email: "",
            phone: 0,
            address: "",
        }
    }

    SearchNama(){
        //console.log(this.state)
        axios.get(`http://192.168.43.231:8080/biodata/nama/${this.state.nama}`,this.state)
        .then( (response) => {
        //  console.log(response)
        let data=response.data;   
        this.setState({data:data});
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
    }

   componentDidMount(){
       this.SearchNama();
   }

    render() {
        return (
            <View>
            {/*    <Text style={styles.title}> Input Nama </Text>
                <TextInput value={this.state.nama} placeholder="Nama" onChangeText={(data)=>{this.setState({nama:data})}}/>
                <Text style={styles.title}> Input Email </Text>
                <TextInput value={this.state.email} placeholder="Email" onChangeText={(data)=>{this.setState({email:data})}}/>
                <Text style={styles.title}> Input Phone </Text>
                <TextInput value={String(this.state.phone)} placeholder="Phone" onChangeonChangeText={(data)=>{this.setState({phone:parseInt(data)})}}/>
                <Text style={styles.title}> Input Address </Text>
                <TextInput value={this.state.address} placeholder="Address" onChangeText={(data)=>{this.setState({address:data})}}/>
                <TouchableOpacity style={styles.button} onPress={this.handleUpdate.bind(this)}><Text style={styles.title}>Update</Text></TouchableOpacity> */}
             {/*   <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("App")}}><Text style={styles.title}>Cancel</Text></TouchableOpacity>*/}
           
           
             <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems:'center' }}>
          
          {/* selectedValue={this.state.nama}
            onValueChange={(data) => this.setState({ nama: data })}*/}
          <Picker  style={{ width: '80%', color: '#000', fontWeight: 'bold' }}
            >
            <Picker.Item label="Cari Apa?" />
            <Picker.Item label='Nama' value='Nama' />
            <Picker.Item label='email' value='Email' />
            <Picker.Item label='Phone' value='Phone' />
            <Picker.Item label='Address' value='Address' />
            
          </Picker>
         </View>



          {/*   <TextInput TextInput placeholder="Cari" onChangeText={(data)=>{this.setState({nama:data})}}/>*/}
           
            </View>
        )
    }
}

export default Pencarian

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


 

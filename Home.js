import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import axios from 'axios'

export default class Home extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            data: [],
            nama: "",
            // email:"",
            // phone:0,
            // address: ""
        };

      }

    componentDidMount(){
     this.getData();
    }

    componentDidUpdate(){
      this.getData();
    }

    getData =()=>{  
        //Make a request for a user with a given ID
        axios.get(`http://192.168.43.231:8080/biodata/`)
        .then( (response) => {
       //   console.log(response.data)
          let data=response.data;   
          this.setState({data:data}); 
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
        // .then(function () {
        // // always executed
        // });
    }
    
    getDataNama =()=>{  
        //Make a request for a user with a given ID
        axios.get(`http://192.168.43.231:8080/biodata/email/${this.state.nama}`)
        .then( (response) => {
       //   console.log(response.data)
          let data=response.data;   
          this.setState({data:data}); 
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
        // .then(function () {
        // // always executed
        // });
    }
    
    // getDataPhone =()=>{  
    //     //Make a request for a user with a given ID
    //     axios.get(`http://192.168.43.231:8080/biodata/phone/${this.state.phone}`)
    //     .then( (response) => {
    //    //   console.log(response.data)
    //       let data=response.data;   
    //       this.setState({data:data}); 
    //     })
    //     .catch(function (error) {
    //     // handle error
    //      console.log(error);
    //     })
    //     // .then(function () {
    //     // // always executed
    //     // });
    // }

    // getDataAddress =()=>{  
    //     //Make a request for a user with a given ID
    //     axios.get(`http://192.168.43.231:8080/biodata/address/${this.state.address}`)
    //     .then( (response) => {
    //    //   console.log(response.data)
    //       let data=response.data;   
    //       this.setState({data:data}); 
    //     })
    //     .catch(function (error) {
    //     // handle error
    //      console.log(error);
    //     })
    //     // .then(function () {
    //     // // always executed
    //     // });
    // }

    deleteData(id){
      axios.delete(`http://192.168.43.231:8080/biodata/deleteBiodata/${id}`)
      .then( (response) => {
        alert(response.data)
      })
    .catch(function (error) {
      // handle error
       console.log(error);
      })
    }

    //  Item = ({ title }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.title}>{title}</Text>
    //     </View>
    //   );
      
    
   
    renderItem = ({ item }) => (
        <View style = {{borderWidth:5, borderColor:"black"}}>
            <Text style={styles.title}>Nama : {item.nama}</Text>
            <Text style={styles.title}>Email :{item.email}</Text>
            <Text style={styles.title}>Phone :{item.phone}</Text>
            <Text style={styles.title}>Address :{item.address}</Text>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("UpdateBiodata",item)}} style={styles.button}><Text style={styles.title}>Update</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{Alert.alert('Anda yakin?','Tindakan ini akan menghilangkan data',
            [{text: 'TIDAK', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
            {text: 'YA', onPress: () => this.deleteData(item.id)},])}} style={styles.button}>
              <Text style={styles.title}>Delete</Text>
            </TouchableOpacity>
        </View>
    )

    

    render() {
        return (
            <SafeAreaView style={styles.container}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("AddBiodata")}} style={styles.button}><Text style={styles.title}>Register</Text></TouchableOpacity>
              <TextInput TextInput placeholder="Cari" onChangeText={(data)=>{this.setState({nama:data})}}/>
            {/*  <TouchableOpacity onPress={this.getData.bind(this)} style={styles.button}><Text style={styles.title}>Tambahkan Buku</Text></TouchableOpacity>*/}
              
              
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
            </SafeAreaView>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
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
      margin:10,
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
  });
  

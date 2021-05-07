import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddBiodata from './AddBiodata';
import UpdateBiodata from './UpdateBiodata';
import Home from './Home';

const Stack = createStackNavigator();

export class App extends Component {
    render() {
        return (
                <NavigationContainer>
                     <Stack.Navigator> 
                        <Stack.Screen 
                        name="Home" 
                        component={Home}/>
                        <Stack.Screen 
                        name="AddBiodata" 
                        component={AddBiodata}/>
                        <Stack.Screen 
                        name="UpdateBiodata" 
                        component={UpdateBiodata}/>
                    </Stack.Navigator>
                </NavigationContainer>
        )
    }
}

export default App
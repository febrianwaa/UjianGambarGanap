import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LoginForm from './LoginForm'

import Sip from './Sip'

export default class App extends Component {
    render() {
        return (
            <View>
                <Sip />
            </View>
        )
    }
}

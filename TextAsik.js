import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
class TextAsik extends Component {
    render() {
        return (
            <View>
                <Text style={styles.styleText}>Count : {this.props.textCounter}</Text>
            </View>
        )
    }
}

export default TextAsik

const styles = StyleSheet.create({
    styleText:{
        fontSize:20,
    }
})

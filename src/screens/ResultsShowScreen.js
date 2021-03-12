import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const ResultsShowScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    console.log(id)

    return (
        <Text>Results Show Screen</Text>
    )
}

const styles = StyleSheet.create({})

export default ResultsShowScreen;
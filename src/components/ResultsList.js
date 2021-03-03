import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const ResultsList = ({title}) => {
    return (
        <View>
            <Text style={style.title}>{title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    title : {
        fontSize : 18,
        fontWeight : 'bold'
    }
})

export default ResultsList;
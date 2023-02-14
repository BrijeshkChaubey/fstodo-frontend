import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

export const Submmitbtn = ({ tittle ,onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>
                {tittle}
            </Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: 'rgba(27,27,51,0.4)',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        fontSize: 18,
        color: '#fff'
    }


})

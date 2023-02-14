import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export const Formcontainer = ({ children }) => {
    return (
        <View style={styles.container}>

            {children}

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,

        width: Dimensions.get('window').width
    },


})

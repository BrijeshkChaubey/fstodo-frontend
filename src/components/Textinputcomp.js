import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';

export const Textinputcomp = ( props) => {
    const {placeholder,label}=props
    return (
        <View >
            <Text style={styles.Text}>{label}</Text>
            <TextInput
               {...props}
                placeholder={placeholder}
                style={styles.Textinput}
            />


        </View>

    )
}

const styles = StyleSheet.create({
    Text: {
        fontWeight: 'bold'
    },
    Textinput: {
        borderWidth: 1,
        borderColor: '#1b1b33',
        height: 35,
        borderRadius: 8,
        fontsize: 16,
        paddingLeft: 10,
        marginBottom: 20,
    },


})
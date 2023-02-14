import React from 'react';
import { View, Text, StyleSheet,Animated } from 'react-native';

export const Headercomponent = ({ leftheading, 
    rightheading, bottomheading,
    LeftheaderTranslatex,
    RighheaderTranslateY,Righheaderopacity }) => {
    return (
        <View>
            <View style={styles.container}>
                <Animated.Text style={[styles.headertext,{transform:[{translateX:LeftheaderTranslatex}]}]}>
                    {leftheading}
                </Animated.Text>
                <Animated.Text style={[styles.headertext,{opacity:Righheaderopacity,transform:[{translateY:RighheaderTranslateY}]}]}>
                    {rightheading}
                </Animated.Text>
            </View>
            <Text style={styles.Text}>
                {bottomheading}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headertext: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1b1b33'
    },
    Text: {
        fontSize: 18,
        color: '#1b1b33',
        textAlign: 'center'
    }
})
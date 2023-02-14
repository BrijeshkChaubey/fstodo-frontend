import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback ,Animated} from 'react-native';

export const FormSelectorBtn = ({ title, backgroundColor,onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Animated.View style={[styles.container, { backgroundColor }]}>
                <Text style={styles.Text}>
                    {title}
                </Text>
            </Animated.View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: '50%',
        backgroundColor: '#1b1b33',
        justifyContent: 'center',
        alignItems: 'center',
    },

    Text: {
        color: 'white',
        fontSize: 16
    }
})

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/index';

export default function Quote({ quote }) {

    return (
        <View style={styles.quote}>
            <Text>Have a great day!</Text>
            <Text>{quote.reduce(item => {
                const randomIndex = Math.floor(Math.random() * quote.length); 
                const randomQuote= quote[randomIndex];
                return <Text>{randomQuote.text}</Text> 
            })}
            </Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    quote: {
        marginTop: 30,
        // borderWidth: 1,
        // borderColor: colors.PRIMARY_COLOR,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#8bbbd6'
    }
})
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DateHeader() {

    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    const today = new Date();

    return (
        <View style={styles.dateText}>
            <Text>{today.toLocaleDateString(undefined, options)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    dateText: {
        alignItems: 'center',
        fontSize: 15,
        height: 60,
        padding: 20,
        backgroundColor: '#dbafb3',
    }    
})
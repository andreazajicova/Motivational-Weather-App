import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
          <Text style={styles.text}>What's the weather like?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      height: 80,
      padding: 50,
      backgroundColor: '#8bbbd6',
      marginTop: 0
    },
    text: {
    //   color: '#fff',
      fontSize: 23,
      textAlign: 'center',
    }
});
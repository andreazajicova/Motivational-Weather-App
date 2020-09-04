import React from 'react';
import { View, StyleSheet, Button} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { colors } from '../utils/index';

export default function ReloadIcon({ load }) {

    // const reloadIconImage = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'; 
    return (
        <View style={styles.reloadIcon}>
            <Feather onPress={load} name='refresh-cw' size={26} color={colors.SECONDARY_COLOR}/>
        </View>
    )
}

const styles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute'
    }
})
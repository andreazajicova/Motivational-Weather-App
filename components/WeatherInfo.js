import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
// import { render } from 'react-dom';
import { colors } from '../utils/index';

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

export default function WeatherInfo({ currentWeather }) {

    const { main : { temp, feels_like }, name, weather: [details]} = currentWeather;

    const { icon, description } = details;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <View style={styles.weatherInfo}>
            <Text style={styles.cityName} >{name}</Text>
            <Text style={styles.temperatureText}>{Math.floor(temp)}°C</Text>
            <Text style={styles.weatherDescription}>{description}</Text>
            <Image style={styles.weatherIcon} source={{uri: iconUrl}} />
            <Text>Feels like: {Math.floor(feels_like)}°C 👤</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherInfo: {
        marginTop: 50,
        alignItems: 'center',
    },
    weatherIcon: {
        width: 100,
        height: 100
    },
    weatherDescription: {
        textTransform: 'capitalize'
    },
    temperatureText: {
        color: PRIMARY_COLOR,
        fontSize: 30
    },
    cityName: {
        fontSize: 30,
        fontWeight: '900',
        color: SECONDARY_COLOR
    }
})
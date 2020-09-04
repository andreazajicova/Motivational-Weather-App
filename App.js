import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo';
// import ReloadIcon from './components/ReloadIcon';
import DateHeader from './components/DateHeader';
import Quote from './components/Quote';
import { WEATHER_API_KEY } from 'react-native-dotenv';
import Header from './components/Header';

const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

const App = () => {

  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitsSystem, setUnitsSystem] = useState('metric');
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    load();
    getQuote();
  }, []);

  async function getQuote() {
    try {
      const quote = await fetch("https://type.fit/api/quotes")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          setQuote(data);
        });
    } catch (error) {
        console.log(error.message);
    }
  }

  async function load() {
    try {
        let { status } = await Location.requestPermissionsAsync();

        if(status !== 'granted') {
          setErrorMessage('Access to location is needed in order to run this app');
          return;
        }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      const WEATHER_URL = `${WEATHER_BASE_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`
      const response = await fetch(WEATHER_URL);
      const result = await response.json();

      if (response.ok) {
        setCurrentWeather(result);
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  if(currentWeather) {
    return (
      <View>
        <Header />
        <DateHeader />
        <View>
          {/* <ReloadIcon load={load}/> */}
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <Quote quote={quote}/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
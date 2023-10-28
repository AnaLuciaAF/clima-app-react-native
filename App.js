import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './src/utils/WeatherAPIKey';
import Weather from './src/components/headerContainer';

export default function App() {
  const [city, onChangeCity] = React.useState('Campo Grande');
  const [temperature, setTemperature] = React.useState(0);
  const [isLoading, setLoading] = React.useState(false);
  const [weatherCondition, setWeatherCondition] = React.useState(null);
  const [weather, setWeather] = React.useState('Rain');


  carregaClima = () => {
    fetch(
      `${api.base}weather?q=${city}&lang=pt_br&units=metric&APPID=${api.key}`
    ).then(res => res.json())
      .then(json => {
        setTemperature(`${json.main.temp}`)
        setWeatherCondition(`${json.weather[0].description}`)
        setWeather(`${json.weather[0].main}`)
        setLoading(false)
      });
  }

  return (
    <View style={styles.container}>
      {isLoading ?
        <Text>Carregando clima!</Text>
        : (
          <View style={styles.container}>
            <Weather weatherCondition={weatherCondition} temperature={temperature} onChangeCity={onChangeCity} city={city} carregaClima={carregaClima} weather={weather} />
            <StatusBar style="auto" />
          </View>
        )}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

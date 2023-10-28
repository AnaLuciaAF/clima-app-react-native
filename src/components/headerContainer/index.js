import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../../utils/WeatherConditions';
const Weather = ({ weatherCondition, temperature, onChangeCity, city, carregaClima, weather }) => {
  return (
    <View style={[styles.weatherContainer, { backgroundColor: weatherConditions[`${weather}`].color }]} >
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={48} name={weatherConditions[`${weather}`].icon} color={'#fff'} />
        <Text style={styles.tempText}>{temperature}˚</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeCity}
          value={city}
        />
        <Button
          onPress={carregaClima}
          title="Buscar clima"
        />

      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherCondition}</Text>
        <Text style={styles.subtitle}>{city}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#f7b733'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    minWidth: 400,
    borderColor: '#fff',
    color: '#fff',
    fontSize: 20,
  },
});

export default Weather;
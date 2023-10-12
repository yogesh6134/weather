import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import axios from 'axios';
import Dropdown from 'react-native-modal-dropdown';
import styles from './styles';
import {IMAGES} from '../../assets';

const HomeScreen = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [selectedDay, setSelectedDay] = useState(0);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    axios
      .get('https://shorturl.at/pyAH9')
      .then(response => {
        setCurrentWeather(response.data.days[selectedDay]);
      })
      .catch(error => {
        console.error('======errr====', error);
      });
  }, [selectedDay]);
  console.log(currentWeather);

  useEffect(() => {
    weatherIconURL(currentWeather?.conditions);
  }, [icon, currentWeather]);

  const weatherIconURL = iconCode => {
    console.log('iconCode,==', iconCode);
    switch (iconCode) {
      case 'Clear':
        setIcon(IMAGES.cloudy_forecast_sun);
        break;
      case 'Rain, Partially cloudy':
        setIcon(IMAGES.cloudy_rain_sunny);
        break;
      default:
        setIcon(IMAGES.snowing_winter_forecast_snowflake);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainHeadingBox}>
        <Text style={styles.heading}>Current Weather</Text>
        <Text style={styles.text}>
          Temperature:
          <Text style={styles.temperature}> {currentWeather?.temp}°C</Text>
        </Text>
        <Text style={styles.text}>Weather: {currentWeather?.description}</Text>
      </View>
      <Image source={icon} style={styles.weatherIcon} />

      <Text>Select Day:</Text>
      <Dropdown
        options={[
          'Today',
          'Day 2',
          'Day 3',
          'Day 4',
          'Day 5',
          'Day 6',
          'Day 7',
        ]}
        onSelect={(index, value) => setSelectedDay(index)}
      />
    </View>
  );
};

export default HomeScreen;

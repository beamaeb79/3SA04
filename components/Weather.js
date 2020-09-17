import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'Main',
        description: 'Description',
        temp: 0,
    })
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.cover}>
                    <Text style={styles.medium}>Zip Code : {props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    cover: {
        backgroundColor: 'grey', 
        width: '100%',
        height: 300,
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    medium: {
        fontSize: 20, 
        color: '#FFF',
    }
});

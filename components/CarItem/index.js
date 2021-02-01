
import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton/index';

export default function CarItem(props){

    const {name, tagline, image} = props.cars;

    return (
      <View style={styles.mainContainer}>
        <ImageBackground source={image} style={styles.backgroundStyle} />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <StyledButton type="primary" content="custom order" />
          <StyledButton type="secondary" content="Existing Inventory" />
        </View>
      </View>
    );
}
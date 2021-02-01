import React from 'react';
import styles from './styles';
import { Pressable, Text, View } from "react-native";

export default function StyledButton(props) {
  
  const {type, content} = props;
  const textcolor = type === 'primary' ? 'white' : 'black';
  const bgcolor = type === 'primary' ? 'black' : 'white';

  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, {backgroundColor: bgcolor}]}>
        <Text style={[styles.text, {color: textcolor}]}>{content}</Text>
      </Pressable>
    </View>
  );
}
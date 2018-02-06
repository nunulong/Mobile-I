import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const ButtonsWrapper = () => {
  return (
    <View style={buttonsContainer}>
      <TouchableOpacity style={button} onPress={() => alert('Pressed')}>
        <Text style={buttonText}>BUTTON</Text>
      </TouchableOpacity>
      <TouchableOpacity style={button} onPress={() => alert('Pressed')}>
        <Text style={buttonText}>BUTTON</Text>
      </TouchableOpacity>
      <TouchableOpacity style={button} onPress={() => alert('Pressed')}>
        <Text style={buttonText}>BUTTON</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    alignItems: 'center'
  },
  button: {
    height: 25,
    width: 85,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center'
  }
});

const { buttonsContainer, button, buttonText } = styles;

export default ButtonsWrapper;
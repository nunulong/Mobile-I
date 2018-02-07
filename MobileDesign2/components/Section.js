import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

const Section = () => {

  return (
    <View style={container}>
      <Text style={header}>Some Random Header</Text>
      <View style={imageContainer}>
        <Image source={require('../assets/header.jpeg')} style={image} />
        <Image source={require('../assets/header.jpeg')} style={image} />
      </View>
      <Text style={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 30,
    padding: 5
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: '50%',
    height: 100
  },
  text: {
    borderWidth: 1,
    padding: 2
  }
});

const { container, header, imageContainer, image, text } = styles;

export default Section;
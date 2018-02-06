import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default class Section extends React.Component {
  render() {
    return (
      <View style={container}>
        <Text style={header}>Some Random Header</Text>
        <View style={imageContainer}>
          <Image source={require('../assets/header.jpeg')} style={{width: '50%', height: 100}}/>
          <Image source={require('../assets/header.jpeg')} style={{width: '50%', height: 100}}/>
        </View>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 30
  },
  imageContainer: {
    flexDirection: 'row',
  }
});

const { container, header, imageContainer } = styles;
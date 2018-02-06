import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Section from './components/Section';

export default class App extends React.Component {
  render() {
    return (
      <View style={container}>
        <View style={headerContainer}>
          <Image source={require('./assets/menubutton.png')} style={{width: 35, height: 35}}/>
          <TextInput style={textInput} placeholder="search"/>
        </View>
        <View style={{paddingTop: 10}}>
          <Image source={require('./assets/header.jpeg')} style={{width: 400, height: 150}}/>
        </View>
        <Section />
        <Section />
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
  headerContainer: {
    flexDirection: 'row', 
    marginTop: 20,
    justifyContent: 'space-around'
  },
  textInput: {
    borderColor: 'black', 
    borderWidth: 1, 
    width: '80%', 
    borderRadius: 20
  }
});

const { container, headerContainer, textInput } = styles;
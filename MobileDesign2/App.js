import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Section, NavSearch, Banner } from './components/index';

export default class App extends React.Component {
  render() {
    return (
      <View style={container}>
        <NavSearch />
        <Banner />
        <Section />
        <Section />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const { container } = styles;
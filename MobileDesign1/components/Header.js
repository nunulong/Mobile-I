import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={headerText}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    marginTop: 45,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  headerText: {
    textAlign: 'center',
    fontSize: 25
  }
});

const { headerContainer, headerText } = styles;

export default Header;
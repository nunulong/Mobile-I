import React from 'react';
import { StyleSheet, View, Image, TextInput, Text } from 'react-native';

const NavSearch = () => {
  return (
    <View style={container}>
      <Image source={require('../assets/menu.png')} style={menuButton}/>
      <View style={searchContainer}>
        <TextInput style={searchText}/>
        <Image source={require('../assets/search-icon.png')} style={searchIcon}/>
        <Text style={placeHolder}>search</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    padding: 2
  },
  menuButton: {
    height: 30,
    width: 30
  },
  searchText: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 0
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%'
  },
  searchIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 0
  },
  placeHolder: {
    position: 'absolute',
    left: 30,
    color: '#aaa'
  }
});

const { container, menuButton, searchText, searchContainer, searchIcon, placeHolder } = styles;

export default NavSearch;
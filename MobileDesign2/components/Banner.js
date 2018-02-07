import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Banner = () => {
  return (
    <View style={bannerContainer}>
      <Image source={require('../assets/header.jpeg')} style={image}/>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    height: 160,
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 160
  }
});

const { bannerContainer, image } = styles;

export default Banner;
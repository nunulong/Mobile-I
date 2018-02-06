import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Post from './components/Post';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    const post = {
      image: 'https://www.gettyimages.com/gi-resources/images/frontdoor/creative/LonelyPlanetRM/Slide_2.jpg',
      comments: [
        {
          user: 'Some User',
          comment: 'A comment on the picture'
        },
        {
          user: 'Another User',
          comment: 'A comment on the picture'
        },
        {
          user: 'And Another User',
          comment: 'A comment on the picture'
        }
      ]
    };
    this.setState(() => {
      return {
        post
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Header</Text>
        </View>
        <View>
          <Post post={this.state.post} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  header: {
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 20
  }
});
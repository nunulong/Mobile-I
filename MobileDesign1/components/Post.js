import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
import styles from '../styles';
import Comment from './Comment';

export default class Post extends React.Component {

  render() {
    const post = this.props.post;
    return (
      <View>
        {post ? <Image source={{ uri: post.image }} style={{width: 400, height: 400}}/> : null}
        <View style={styles.buttonContainer}>
          <Button title="Like" />
          <Button title="Share" />
          <Button title="Comment" />
        </View>
        <Comment comments={this.props.post.comments} />
      </View>
    )
  }
}
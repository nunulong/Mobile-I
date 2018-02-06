import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import styles from '../styles';

export default class Comment extends React.Component {

  render() {
    const comments = this.props.comments;
    console.log(comments);
    return (
      <View>
        {comments ? 
          <FlatList 
            data={comments}
            renderItem={({ item, index }) => (
              <Text key={index}>{item.user}: {item.comment}</Text>
            )}
          />
          : null
        }
      </View>
    )
  }
}
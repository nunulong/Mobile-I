import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Comments = () => {
  return (
    <View style={commentsContainer}>
      <Text style={commentText}>Some User: A comment on the picture</Text>
      <Text style={commentText}>Another User: A comment on the picture</Text>
      <Text style={commentText}>And Another User: A comment on the picture</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commentsContainer: {
    height: 200,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  commentText: {
    textAlign: 'left',
    fontSize: 17,
    borderWidth: 1,
    padding: 5,
    marginTop: 5,
    width: '95%'
  }
});

const { commentsContainer, commentText } = styles;

export default Comments;
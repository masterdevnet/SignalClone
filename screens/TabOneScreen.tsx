import * as React from 'react';

import { Text, StyleSheet, Image, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}} style={styles.image} />
      <Text style={styles.text}>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  image: {

  },
  text: {
    fontSize: 30, 
    color: 'blue'
  }
})

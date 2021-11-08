import * as React from 'react';

import { Text, StyleSheet, Image, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}} style={styles.image} />
      <View>
        <View>
          <Text style={styles.text}>Elon Musk</Text>
          <Text style={styles.text}>20:05</Text>
        </View>
        <Text style={styles.text}>Hola hola Coca Cola</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  image: {
      height: 100,
      width: 100
  },
  text: {
    fontSize: 30, 
    color: 'blue'
  }
})

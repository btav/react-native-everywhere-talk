import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bar: {
    backgroundColor: '#fff',
    height: 60,
    width: 375,
    marginTop: 20,
    padding: 10
  },
  text: {
    fontSize: 18,
    color: '#fff'
  }
});

const SearchBar = ({ onChangeText }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Search for anything on GIPHY</Text>
    <TextInput
      style={styles.bar}
      placeholder="Kittens"
      onChangeText={(value) => onChangeText(value)}
    />
  </View>
);

export default SearchBar;

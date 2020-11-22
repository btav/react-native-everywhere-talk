import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 85,
    backgroundColor: "#1C2837",
  }
});

const Header = () => (
  <SafeAreaView style={styles.view}>
    <Text style={styles.title}>GIPHY Search</Text>
  </SafeAreaView>
);

export default Header;

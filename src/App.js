import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { debounce } from 'lodash';
import Header from './Header';
import SearchBar from './SearchBar';
import GifList from './GifList';

import { API_KEY, API_URL } from './GIPHY';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10161E'
  },
});

const App = () => {
  const [gifs, setGifs] = useState([])

  const fetchGifs = async (value) => {
    try {
      const url = `${API_URL}/search${API_KEY}&q=${value}`;
      const response = await fetch(url, {
        method: "GET",
        credentials: "same-origin"
      });
      const gifs = await response.json();
      setGifs(gifs.data);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar onChangeText={debounce(fetchGifs, 250)} />
      <GifList gifs={gifs} />
    </View>
  )
}

export default App


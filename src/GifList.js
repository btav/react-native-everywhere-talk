import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';

const styles = StyleSheet.create({
  desktop: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  mobile: {
    alignItems: 'center'
  }
});

const GifList = ({ gifs }) => {
  const [isWide, setLayout] = useState(false);

  if (!gifs || gifs.length === 0) {
    return null;
  }

  return (
    <ScrollView
      contentContainerStyle={isWide ? styles.desktop : styles.mobile}
      onLayout={({ nativeEvent }) => setLayout(nativeEvent.layout.width > 800)}
    >
      {gifs.map(gif => (
        <Image
          key={gif.id}
          style={{
            width: Number(gif.images.downsized.width),
            height: Number(gif.images.downsized.height)
          }}
          source={{ uri: gif.images.downsized.url.toString() }}
        />
      ))}
    </ScrollView>
  );
};

export default GifList;

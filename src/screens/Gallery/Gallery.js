import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import GalleryItem from './components/GalleryItem';

const Gallery = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      backgroundColor: '#fff',
      paddingTop: 20,
    },
    flatListWrapper: {
      gap: 10,
      paddingHorizontal: 10,
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={Array(20)}
        numColumns={2}
        contentContainerStyle={styles.flatListWrapper}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => <GalleryItem />}
      />
    </View>
  );
};

export default Gallery;

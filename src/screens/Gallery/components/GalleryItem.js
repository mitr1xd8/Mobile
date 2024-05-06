import React from 'react';
import {StyleSheet, View} from 'react-native';

const GalleryItem = () => {
  const styles = StyleSheet.create({
    container: {
      width: '50%',
      elevation: 2,
    },
    item: {
      width: '90%',
      height: 150,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.item} />
    </View>
  );
};

export default GalleryItem;

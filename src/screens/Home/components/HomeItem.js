import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EmptyImageIcon from '../../../assets/icons/EmptyImage';

const HomeItem = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
    },
    title: {
      fontSize: 18,
    },
    description: {
      fontSize: 14,
    },
    content: {
      flexDirection: 'row',
    },
    rightPart: {
      flex: 1,
      flexDirection: 'column',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <EmptyImageIcon />
        <View style={styles.rightPart}>
          <Text style={styles.title}>Заголовок новини</Text>
          <Text style={styles.description}>Дата новини</Text>
          <Text style={styles.description}>Короткий текст новини</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeItem;

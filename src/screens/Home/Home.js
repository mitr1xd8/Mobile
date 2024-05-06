import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import HomeItem from './components/HomeItem';

const Home = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      marginTop: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Новини</Text>
      <FlatList
        data={Array(20)}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        renderItem={() => <HomeItem />}
      />
    </View>
  );
};

export default Home;

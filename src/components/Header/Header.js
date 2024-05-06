import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import NavigationTabs from '../NavigationTabs/NavigationTabs';

const Header = () => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
    },
  });

  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{
            width: 185,
            height: 60,
            uri: 'https://pdp.nacs.gov.ua/system/providers/logos/000/000/057/original/%D0%B7%D0%B0%D0%B2%D0%B0%D0%BD%D1%82%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F_%282%29.png?1651503202',
          }}
        />
        <Text style={styles.title}> Mobile App</Text>
      </View>
      <NavigationTabs />
    </View>
  );
};

export default Header;

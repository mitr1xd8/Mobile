import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HomeIcon from '../../assets/icons/HomeIcon';
import GalleryIcon from '../../assets/icons/GalleryIcon';
import ProfileIcon from '../../assets/icons/ProfileIcon';
// import HomeIcon from '../../assets/icons/home.svg';

const NavigationTabs = () => {
  const {navigate} = useNavigation();

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      paddingVertical: 20,
      justifyContent: 'space-around',
    },
    tab: {
      flex: 1,
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Pressable style={styles.tab} onPress={() => navigate('Home')}>
        <HomeIcon />
        <Text>Головна</Text>
      </Pressable>
      <Pressable style={styles.tab} onPress={() => navigate('Gallery')}>
        <GalleryIcon />
        <Text>Фотогалерея</Text>
      </Pressable>
      <Pressable style={styles.tab} onPress={() => navigate('Profile')}>
        <ProfileIcon />
        <Text>Профіль</Text>
      </Pressable>
    </View>
  );
};

export default NavigationTabs;

import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = ({label}) => {
  const styles = StyleSheet.create({
    container: {
      paddingVertical: 5,
    },
    label: {
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: 'grey',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

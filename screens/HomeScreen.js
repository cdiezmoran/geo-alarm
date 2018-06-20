import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { number, func } from 'prop-types';

import { addToCounter } from '../actions/counter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = ({ counter: { counter } }) => (
  {
    counter,
  }
);

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(addToCounter()),
});

const HomeScreen = ({ counter, add }) => (
  <View style={styles.container}>
    <Text>{counter}</Text>
    <Button title="Add to counter" onPress={() => add()} />
  </View>
);

HomeScreen.propTypes = {
  counter: number,
  add: func.isRequired,
};

HomeScreen.defaultProps = {
  counter: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

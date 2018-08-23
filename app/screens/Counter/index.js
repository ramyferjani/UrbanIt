import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as Actions from '../../actions/index.actions';


class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: Actions.COUNTER_INCREMENT });
  }

  decrement = () => {
    this.props.dispatch({ type: Actions.COUNTER_DECREMENT });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Counter</Text>
        <Text>{this.props.count}</Text>
        <TouchableOpacity onPress={this.increment}><Text>INCREMENT</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.decrement}><Text>DECREMENT</Text></TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(mapStateToProps)(Counter);

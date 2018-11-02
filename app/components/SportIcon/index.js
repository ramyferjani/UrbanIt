import React from 'react';
// import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import { Avatar, Divider, Button } from 'react-native-elements';

import colors from '../../assets/colors';

// var {height, width} = Dimensions.get('window');

class SportIcon extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    switch (this.props.sport) {
      case 'football':
        return (
          <FontAwesome
              name='soccer-ball-o'
              size={this.props.size}
              color={this.props.color}
          />
          );
      case 'basketball':
        return (
          <FontAwesome5
              name='basketball-ball'
              size={this.props.size}
              color={this.props.color}
          />
          );
      default:
        return (
          <FontAwesome
              name='soccer-ball-o'
              size={35}
              color={colors.darkGray1}
          />
          );
      }
  }
}

export default SportIcon
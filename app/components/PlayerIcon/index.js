import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, SafeAreaView, Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Avatar, Divider, Button } from 'react-native-elements';

import colors from '../../assets/colors';
var {height, width} = Dimensions.get('window');

class PlayerIcon extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    switch (true) {
      case this.props.player:
        return (
        <View >
        <Image
          style={{width: this.props.width, height: this.props.height, borderRadius: this.props.height / 2, shadowOpacity: 0.75, shadowRadius: 5, shadowColor: colors.darkGray1, shadowOffset: { height: 0, width: 0}}}
          source={{uri: this.props.imageUrl}}
        />
        </View>
      )
      default:
        return (
          <View style={{width: this.props.width, height: this.props.height, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: this.props.height / 2, shadowOpacity: 0.75, shadowRadius: 5, shadowColor: colors.darkGray1, shadowOffset: { height: 0, width: 0}}}>
          <FontAwesome5
              name='user-plus'
              size={this.props.width * 0.4}
              color={colors.darkViolet1}
          />
          </View>
        );
      }
  }
}

export default PlayerIcon
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, SafeAreaView, Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Avatar, Divider, Button } from 'react-native-elements';

import colors from '../../assets/colors';
import SportIcon from '../SportIcon';
import SportLocales from '../../assets/locales/Sport';

var {height, width} = Dimensions.get('window');

class PlayerIcon extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    switch (true) {
      case this.props.player:
        return (
        // <View style={[styles.container, {height: , width: this.props.width}]}>
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

const styles = {
  container: {

  },
  profileContainer: {
    width: '100%',
    // backgroundColor: 'white',
    padding: 15,
  },
  sportTitleContainer: {
    paddingLeft: width / 15,
    height: 30,
  },
  sportTitle: {
    fontSize: 20,
  },
  sportTitleEnabled: {
    color: 'white',
  },
  sportTitleDisabled: {
    color: colors.darkGray1,
  },
  sportRankContainer: {
    paddingLeft: width / 15,
    // height: 30,
  },
  sportRank: {
    fontSize: 15,
  },
  sportRankEnabled: {
    color: 'white',
  },
  sportRankDisabled: {
    color: colors.darkGray2,
  },
  profileButton: {
    backgroundColor: 'white',
    height: 80,
    borderRadius: 5,
    justifyContent: 'center',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: colors.darkViolet1,
    shadowOffset: { height: 0, width: 0}
    // flexDirection: 'row',
    // paddingLeft: width / 15,
  },
  profile: {
    flexDirection: 'row',
    paddingLeft: width / 15,
    flex: 1,
    alignItems: 'center',
  },
  profileEnabled: {
    // borderLeftWidth: 8,
    // borderColor: colors.darkViolet1,
    backgroundColor: colors.darkViolet1
  },
  profileDisabled: {
    backgroundColor: 'white'
    // borderLeftWidth: 8,
    // borderColor: colors.darkGray2,
  }
}

export default PlayerIcon
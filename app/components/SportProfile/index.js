import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Avatar, Divider, Button } from 'react-native-elements';

import colors from '../../assets/colors';
import SportIcon from '../SportIcon';
import i18n from '../../lib/i18n';
var {height, width} = Dimensions.get('window');

class SportProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return (
          <View style={styles.profileContainer}>
          <TouchableHighlight style={[styles.profileButton, this.props.isEnable ? styles.profileEnabled : styles.profileDisabled]} onPress={this.props.onPress} underlayColor={this.props.isEnable? colors.darkViolet1 : colors.lightGray2}>
          <View style={styles.profile}>
            <View>
              {/* <FontAwesome
              name='soccer-ball-o'
              size={37}
              color={colors.darkGray1}
              /> */}
              <SportIcon sport={this.props.sportTitle.toLowerCase()} size={37} color={this.props.isEnable ? 'white' : colors.darkGray1}></SportIcon>
            </View>
            <View>
              <View style={styles.sportTitleContainer}>
                <Text style={[styles.sportTitle, this.props.isEnable ? styles.sportTitleEnabled : styles.sportTitleDisabled]}>{this.Capitalize(this.props.sportTitle)}</Text>
              </View>
              <View style={styles.sportRankContainer}>
                <Text style={[styles.sportRank, this.props.isEnable ? styles.sportRankEnabled : styles.sportRankDisabled]}>{i18n.t('rank')} {this.props.sportRank}</Text>
              </View>
            </View>
            </View>
          </TouchableHighlight>
        </View>
    )
  }
}

const styles = {
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

export default SportProfile
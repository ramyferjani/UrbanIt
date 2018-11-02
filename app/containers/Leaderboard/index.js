import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';

export default class Leaderboard extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    // header: null,
    title: i18n.t('leaderboard'),
    gesturesEnabled: true,
    headerTransparent: true,
    headerTitleStyle: {color: 'white'},
    headerStyle: {
      backgroundColor: colors.darkViolet1,
    },
    headerLeft: null,
  })

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Text>Leaderboard!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
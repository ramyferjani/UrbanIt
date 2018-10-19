import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import colors from '../../assets/colors';
import Navigation from '../../assets/locales/Navigation';

export default class Leaderboard extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    // header: null,
    title: Navigation.en.leaderboard,
    gesturesEnabled: true,
    headerTransparent: true,
    headerTitleStyle: {color: 'white'},
    headerStyle: {
      backgroundColor: colors.darkViolet1,
    },
    // headerBackTitle: ,
    headerRight: (
      <TouchableHighlight onPress={() => navigation.navigate('Messages')} underlayColor={'transparent'} style={{paddingRight: 15}}>
        <FontAwesome
                name='send-o'
                size={24}
                color={'white'}
              />
      </TouchableHighlight>
    ),
    headerLeft: null,
  })

  render() {
    return (
      <View style={styles.container}>
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
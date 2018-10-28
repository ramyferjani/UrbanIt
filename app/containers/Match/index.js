import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { ListItem } from 'react-native-elements';

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';

const matches = [
  {
    team1: 'team_ramy',
    team2: 'team_yacine',
    score1: 2,
    score2: 0,
    win: true,
    id: 10,
  },
  {
    team1: 'team_aziz',
    team2: 'team_massi',
    score1: 3,
    score2: 2,
    win: true,
    id: 11,
  },
  {
    team1: 'team_ouahab',
    team2: 'team_nouri',
    score1: 0,
    score2: 1,
    win: false,
    id: 12,
  },
]

export default class Match extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    // header: null,
    title: i18n.t('match'),
    gesturesEnabled: true,
    // headerTransparent: true,
    headerTitleStyle: {color: 'white'},
    headerStyle: {
      backgroundColor: colors.darkViolet1,
    },
    // headerBackTitle: ,
    headerRight: null,
    headerLeft: null,
  })

  render() {
    return (
      <View style={styles.container}>
      {matches.map((m, i) => (
        <ListItem
        key={i}
        title={m.team1}
        rightTitle={m.team2}
        subtitle={m.score1}
        rightSubtitle={m.score2}
        leftIcon={m.win ? <Feather name={'check-circle'} color={'green'} size={20}/> : <Feather name={'x-circle'} color={'red'} size={20}/>}
        />
      ))}
        {/* <Text>Match!</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray3,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableHighlight, StatusBar } from 'react-native';
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

class MatchHistory extends React.Component {
  constructor(props) {
    super(props);
  }

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
    const teams = this.props.profile && this.props.profile.teams && this.props.profile.teams.length > 0 ? this.props.profile.teams.filter(x => x.isOld === true && x.match && x.match.scoreVerif && x.match.scoreVerif.isValid) : null;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
        />
      { Object.keys(this.props.profile).length > 0 && teams && teams.map((team, i) => (
        <ListItem
        key={i}
        title={team.match.teams[0].teamName}
        rightTitle={team.match.teams[1].teamName}
        subtitle={team.match.scores[0].scored}
        rightSubtitle={team.match.scores[1].scored}
        leftIcon={team.match.scores[0].scored > team.match.scores[1].scored && team.match.teams[0].profiles.find(x => x.id === this.props.profile.id) || team.match.scores[0].scored < team.match.scores[1].scored && team.match.teams[1].profiles.find(x => x.id === this.props.profile.id) ? <Feather name={'check-circle'} color={'green'} size={20}/> : <Feather name={'x-circle'} color={'red'} size={20}/>}
        />
      ))}
        {/* <Text>Match!</Text> */}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

export default connect(mapStateToProps)(MatchHistory);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray3,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
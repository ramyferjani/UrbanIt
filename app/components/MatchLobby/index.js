import React from 'react';
import { connect } from 'react-redux';
import { Content, Button, Text, Separator, Thumbnail, ListItem, Left, Icon, Body, Right } from 'native-base';
import { withNavigation } from 'react-navigation';

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';
import { getRankIcon } from '../../helpers/rank';
import RankIcon from '../../components/RankIcon';

class MatchLobby extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigation } = this.props
    const teams = this.props.profile.teams.find(x => x.isOld === false).match.teams;
    const match = this.props.profile.teams.find(x => x.isOld === false).match;
    return (
      <Content>
        {teams.map((team) => {
          return (
            <Content key={team.id}>
            <Separator bordered>
              <Text>{team.teamName}</Text>
            </Separator>
            {team.profiles.map((profile) => {
              return (
                <ListItem avatar key={profile.id}>
                  <Left style={{ top: -5}}>
                    <Thumbnail small source={require('../../assets/images/avatar.png')}/>
                  </Left>
                  <Body>
                    <Text>{profile.user.username}   
                    {team.teamLeader.profile.id === profile.id ? (
                      <Icon type='MaterialCommunityIcons' name='crown' style={{ fontSize: 18, color: 'gold', }}/>
                    ) : null}
                    </Text>
                  </Body>
                  <Right style={{ top: -5}}>
                    {/* <Text>{getRankIcon(profile.ranking)}</Text> */}
                    <RankIcon elo={profile.ranking}/>
                  </Right>
                </ListItem>
              )
            })}
            </Content>
          )
        })}
        
        { match.scoreVerif && match.scoreVerif.isError ? (
          <Text style={{marginTop: 15, alignSelf: 'center'}}>{i18n.t('scoresError')}</Text>) : (
          teams.find(team => team.teamLeader.profile.id === this.props.profile.id && !match.scores.find(score => score.profiles[0].id === this.props.profile.id)) ? (
          <Button block onPress={() => navigation.navigate('FillScores')} style={{ marginVertical: 30, marginHorizontal: 15, backgroundColor: colors.darkViolet1 }}>
            <Text>{i18n.t('fillScores')}</Text>
          </Button>) : (match.scores.length > 0 && match.scores.find(score => score.profiles[0].id === this.props.profile.id) ? (<Text style={{marginTop: 15, alignSelf: 'center'}}>{i18n.t('waitingOtherCaptain')}</Text>) : (null))
        )}

      </Content>
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

export default withNavigation(connect(mapStateToProps)(MatchLobby));
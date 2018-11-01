import React from 'react';
import { connect } from 'react-redux';
import { Content, Button, Text, Separator, Thumbnail, ListItem, Left, Icon, Body, Right } from 'native-base';

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';
import { getRankIcon } from '../../helpers/rank';
import RankIcon from '../../components/RankIcon';

class MatchLobby extends React.Component {
  constructor(props) {
    super(props)
    // console.log(this.props.)
  }

  render() {
    const { navigation } = this.props
    const teams = this.props.profile.teams.find(x => x.isOld === false).match.teams;
    return (
      <Content>
        {teams.map((team) => {
          return (
            <Content key={team.id}>
            <Separator bordered>
              <Text>{team.teamName}</Text>
            </Separator>
            {team.profiles.map((profile) => {
              console.log(team);
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
        
        {/* <ListItem>
          <Left>
            <Thumbnail small source={require('../../assets/images/avatar.png')}/>
          </Left>
          <Body>
            <Text>Caroline Aaron</Text>
          </Body>
          <Right>
            <Text>4</Text>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Thumbnail small source={require('../../assets/images/avatar.png')}/>
          </Left>
          <Body>
            <Text>Caroline Aaron</Text>
            </Body>
          <Right>
            <Text>4</Text>
          </Right>
        </ListItem>
        <Separator bordered>
            <Text>TEAM 2</Text>
        </Separator>
        <ListItem>
          <Left>
            <Thumbnail small source={require('../../assets/images/avatar.png')}/>
          </Left>
          <Body>
            <Text>Caroline Aaron</Text>
            </Body>
          <Right>
            <Text>4</Text>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Thumbnail small source={require('../../assets/images/avatar.png')}/>
          </Left>
          <Body>
            <Text>Caroline Aaron</Text>
            </Body>
          <Right>
            <Text>4</Text>
          </Right>
        </ListItem> */}
        <Button block large style={{ backgroundColor: colors.darkViolet1, marginTop: 30, marginHorizontal: 15 }} underlayColor={colors.darkViolet1} onPress={() => navigation.navigate('Profile')}>
          <Text>{i18n.t('goToProfile')}</Text>
        </Button>
      </Content>
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

export default connect(mapStateToProps)(MatchLobby);

// export default connect(mapStateToProps, mapDispatchToProps)(Main);
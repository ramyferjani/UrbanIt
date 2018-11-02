import React from 'react';
import { connect } from 'react-redux';
import { Content, Button, Text, Card, CardItem, Left, Right, Icon } from 'native-base';

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';
import PlayerIcon from '../../components/PlayerIcon';
import RankIcon from '../../components/RankIcon';
import { getRank } from '../../helpers/rank';

class ProfileStats extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { profile, navigation } = this.props
    return (
      <Content padder>
        <Card>
          <CardItem>
            <Left>
              <Icon type='MaterialCommunityIcons' name='chart-line-variant'/>
              <Text>{i18n.t('elo')}</Text>
            </Left>
            <Right>
              <Text>{profile.ranking}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <RankIcon elo={profile.ranking}/>
              <Text>{i18n.t('rank')}</Text>
            </Left>
            <Right>
              <Text>{getRank(profile.ranking)}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Icon type='MaterialCommunityIcons' name='play'/>
              <Text>{i18n.t('matchPlayed')}</Text>
            </Left>
            <Right>
              <Text>{Number(profile.nbDefeat) + Number(profile.nbEquality) + Number(profile.nbWin)}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Icon type='MaterialCommunityIcons' name='format-list-numbers'/>
              <Text>{i18n.t('ranking')}</Text>
            </Left>
            <Right>
              <Text>100</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

export default connect(mapStateToProps)(ProfileStats);

// export default connect(mapStateToProps, mapDispatchToProps)(Main);


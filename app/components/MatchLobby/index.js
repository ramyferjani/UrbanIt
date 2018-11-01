import React from 'react';
// import { connect } from 'react-redux';
import { Content, Button, Text, Separator, Thumbnail, Left, Body, Right } from 'native-base';

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';

export default class NoneProfilesSelected extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigation } = this.props
    return (
      <Content>
        <Separator bordered>
            <Text>TEAM 1</Text>
        </Separator>
        <ListItem avatar>
          <Left>
            <Thumbnail source={require('../../assets/images/avatar.png')}/>
          </Left>
          <Body>
            <Text>Caroline Aaron</Text>
            </Body>
          <Right>
            <Text>4</Text>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail source={require('../../assets/images/avatar.png')}/>
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
        <ListItem avatar>
          <Left>
            <Thumbnail source={require('../../assets/images/avatar.png')}/>
          </Left>
          <Body>
            <Text>Caroline Aaron</Text>
            </Body>
          <Right>
            <Text>4</Text>
          </Right>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail source={require('../../assets/images/avatar.png')}/>
          </Left>
          <Body>
            <Text>Caroline Aaron</Text>
            </Body>
          <Right>
            <Text>4</Text>
          </Right>
        </ListItem>
        <Button block large style={{ backgroundColor: colors.darkViolet1, marginTop: 30 }} underlayColor={colors.darkViolet1} onPress={() => navigation.navigate('Profile')}>
          <Text>{i18n.t('goToProfile')}</Text>
        </Button>
      </Content>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Main);
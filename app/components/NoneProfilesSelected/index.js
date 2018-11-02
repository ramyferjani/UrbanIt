import React from 'react';
// import { connect } from 'react-redux';
import { Content, Button, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';

class NoneProfilesSelected extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigation } = this.props
    return (
      <Content>
        <Text style={{ alignSelf: 'center', marginTop: 30 }}>{i18n.t('noneProfilesSelected')}</Text>
        <Button block large style={{ backgroundColor: colors.darkViolet1, marginTop: 30 }} underlayColor={colors.darkViolet1} onPress={() => navigation.navigate('Profile')}>
          <Text>{i18n.t('goToProfile')}</Text>
        </Button>
      </Content>
    )
  }
}

export default withNavigation(NoneProfilesSelected);
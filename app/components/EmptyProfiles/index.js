import React from 'react';
// import { connect } from 'react-redux';
import { Content, Icon, Button, Text } from 'native-base';

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';

export default class EmptyProfiles extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigation } = this.props
    return (
      <Content>
        <Text style={{ alignSelf: 'center', marginTop: 30 }}>{i18n.t('emptyProfiles')}</Text>
        <Button block large style={{ backgroundColor: colors.darkViolet1, marginTop: 30 }} underlayColor={colors.darkViolet1} onPress={() => navigation.navigate('CreateProfile')}>
          <Icon name='plus' type='FontAwesome'/>
        </Button>
      </Content>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Main);
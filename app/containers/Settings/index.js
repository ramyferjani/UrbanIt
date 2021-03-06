import React from 'react';
import { StyleSheet, View, TouchableHighlight, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Container, Header, Content, List, Button, ListItem, Text, Icon, Left, Body, Right, Switch, } from 'native-base';

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';
import { logout } from '../../actions/auth';
import { setAvailableSports, setUnavailableSports } from '../../actions/sports';
import { changeProfile } from '../../actions/profile';
import { setProfiles } from '../../actions/profiles';
import { resetSearchMatchState } from '../../actions/searchMatch';


class Settings extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    // header: null,
    title: i18n.t('settings'),
    gesturesEnabled: true,
    headerTransparent: false,
    headerStyle: {
      backgroundColor: colors.darkViolet1,
    },
    headerTitleStyle: {color: 'white'},
    headerLeft: null,
  })

  logout = () => {
    this.props.dispatchLogout();
    this.props.dispatchSetAvailableSports([]);
    this.props.dispatchSetUnavailableSports([]);
    this.props.dispatchChangeProfile({});
    this.props.dispatchSetProfiles([]);
    this.props.dispatchResetSearchMatchState();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
        <Container>
          <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          />
          <Content>
            <ListItem icon last onPress={this.logout.bind(this)}>
              <Left>
                <Button style={{ backgroundColor: "red" }}>
                  <Icon type='Entypo' active name="log-out" />
                </Button>
              </Left>
              <Body>
                <Text>{i18n.t('logout')}</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
          </Content>
        </Container>
    );
  }
}

const mapDispatchToProps = {
  dispatchLogout: () => logout(),
  dispatchSetAvailableSports: (sports) => setAvailableSports(sports),
  dispatchSetUnavailableSports: (sports) => setUnavailableSports(sports),
  dispatchChangeProfile: (profile) => changeProfile(profile),
  dispatchSetProfiles: (profiles) => setProfiles(profiles),
  dispatchResetSearchMatchState: () => resetSearchMatchState(),
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
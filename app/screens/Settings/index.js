import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Container, Header, Content, List, Button, ListItem, Text, Icon, Left, Body, Right, Switch, } from 'native-base';

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';
import { logout } from '../../actions/user_auth';
import { setAvailableSports, setUnavailableSports } from '../../actions/sports';
import { changeProfile } from '../../actions/profile';


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

  logout = () => {
    this.props.dispatchLogout();
    this.props.dispatchSetAvailableSports([]);
    this.props.dispatchSetUnavailableSports([]);
    this.props.dispatchChangeProfile({});
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
        <Container>
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
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableHighlight, StatusBar } from 'react-native';
import { Container, Content, View, Text, Form, Button, Icon, Input, Item, Label, Spinner, Toast } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';
import { fillScores } from '../../actions/fillScores';

class FillScores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstScore: null,
      secondScore: null,
    };
  }
  
  static navigationOptions = ({ navigation }) => ({
    // header: null,
    title: i18n.t('fillScores'),
    gesturesEnabled: true,
    headerTransparent: false,
    headerTitleStyle: {color: 'white'},
    headerStyle: {
      backgroundColor: colors.darkViolet1,
    },
    headerLeft: (
      <TouchableHighlight onPress={() => navigation.goBack()} underlayColor={'transparent'} style={{paddingLeft: 10}}>
        <FontAwesome
                name='arrow-left'
                size={24}
                color={'white'}
              />
      </TouchableHighlight>
    )
  })

  confirm = () => {
    const { firstScore, secondScore } = this.state;
    const match = this.props.profile.teams.find(x => x.isOld === false).match;
    if (!firstScore || !secondScore) {
      // console.log(`sport ${sport} position ${position} height ${height} weight ${weight} number ${number}` )
      // console.log('empty');
      return;
    }
    if (!this.props.fillScores.loading) {
      this.props.dispatchFillScores(match.id, {"0": firstScore, "1": secondScore}, {"0": match.teams[0].id, "1": match.teams[1].id}, this.props.profile.id).then(() => {
        if (!this.props.fillScores.error) {
          Toast.show({
            text: i18n.t('savedSuccessfully'),
            buttonText: 'X',
            position: "top"
          })
          this.props.navigation.goBack();
        } else {
          Toast.show({
            text: i18n.t('error'),
            buttonText: 'X',
            position: "top"
          })
        }
      });
    }
  }

  render() {
    const teams = this.props.profile.teams.find(x => x.isOld === false).match.teams;
    return (
      <Container>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Content>
          <Form>
            <Item stackedLabel /*error={this.props.auth.login && this.props.auth.error && this.props.auth.error.user ? true : false}*/ style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
              {/* <Icon name='md-mail' style={{color: '#000'}} type={'Ionicons'}/> */}
              <Label>{teams[0].teamName}</Label>
              <Input maxLength={3} autoCapitalize={'none'} autoCorrect={false} keyboardType={'number-pad'} onChangeText={(firstScore) => this.setState({ firstScore })} style={{ color: "#000" }}/>
            </Item>
            <Item stackedLabel/*error={this.props.auth.login && this.props.auth.error && this.props.auth.error.user ? true : false}*/ style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
              {/* <Icon name='md-mail' style={{color: '#000'}} type={'Ionicons'}/> */}
              <Label>{teams[1].teamName}</Label>
              <Input maxLength={3} autoCapitalize={'none'} autoCorrect={false} keyboardType={'number-pad'} onChangeText={(secondScore) => this.setState({ secondScore })} style={{ color: "#000" }}/>
            </Item>
          </Form>
          
          <Button block onPress={this.confirm} style={{backgroundColor: colors.darkViolet1, marginTop: 30, marginHorizontal: 15}}>
            {this.props.fillScores.loading ? (
              <Spinner color={'white'}/>
            ) : (
              <Text>{i18n.t('send')}</Text>
            )}
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  fillScores: state.fillScores
})

const mapDispatchToProps = {
  dispatchFillScores: (matchId, scores, teams, profileId) => fillScores(matchId, scores, teams, profileId),
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(FillScores));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
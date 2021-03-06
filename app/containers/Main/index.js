import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, StatusBar, TouchableHighlight, Dimensions, ScrollView, RefreshControl } from 'react-native';
import { Container, Content, Item, Input, Card, CardItem, Header, Title, Form, InputGroup, Icon, Picker, Button, Text, Right, Spinner, Left, Body, Label } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import { material } from 'react-native-typography';

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';
import { TEST_ACTION } from '../../lib/constants';
import { searchMatch, resetSearchMatchState } from '../../actions/searchMatch';
import EmptyProfiles from '../../components/EmptyProfiles';
import NoneProfilesSelected from '../../components/NoneProfilesSelected';
import ProfileStats from '../../components/ProfileStats';
import MatchLobby from '../../components/MatchLobby';
import { refreshProfile } from '../../actions/refreshProfile';

var {height, width} = Dimensions.get('window');

const team = [
  {
    name: 'Ramy',
    imageUrl: 'https://66.media.tumblr.com/361f751103d9ada6209b36ee4f6bfaf7/tumblr_pfv4q6CJls1rpwm80o1_250.jpg',
    id: 10,
  },
  {
    name: 'Corentin',
    imageUrl: 'https://66.media.tumblr.com/7149ec2a3004aac861e2c4ef6d7b4988/tumblr_pbu8313Wa71rpwm80o1_250.jpg',
    id: 19,
  }
]

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    // header: null,
    title: i18n.t('home'),
    gesturesEnabled: true,
    headerTransparent: false,
    headerStyle: {
      backgroundColor: colors.darkViolet1,
    },
    // backgroundColor: colors.lightGray3,
    headerTitleStyle: {color: 'white'},
    // headerBackTitle: ,
    // headerRight: (
    //   <TouchableHighlight onPress={() => navigation.navigate('Chat')} underlayColor={'transparent'} style={{paddingRight: 15}}>
    //     <FontAwesome
    //             name='send-o'
    //             size={24}
    //             color={'white'}
    //           />
    //   </TouchableHighlight>
    // ),
    headerLeft: null,
  })

  searchMatch = (profileId) => {
    // if (!this.props.searchMatch.loading) {
      this.props.dispatchSearchMatch(profileId);
    // }
  }
  
  resetSearchMatchState = () => {
    this.props.dispatchResetSearchMatchState();
  }

  // generatePlayers = (team) => {
  //   let playersIcons = [];
  //   let iconWidth = (width - 80) / 5;
  //   team.map((player) => {
  //     playersIcons.push(
  //       <PlayerIcon height={iconWidth} width={iconWidth} player={true} imageUrl={player.imageUrl} key={player.id}/>
  //     )
  //   })
  //   for (i = 0; i < 5 - team.length; ++i) {
  //     playersIcons.push(
  //     <PlayerIcon height={iconWidth} width={iconWidth} player={false} key={i}/>
  //     )
  //   }
  //   if (team.length < this.props.profile.nbPlayers) {
  //     console.warn('smaller')
  //   }
  //   // return this.props.sport.maxPlayers;
  //   return playersIcons;
  // }

  refreshProfile = () => {
    const { profile, profiles } = this.props
    if (profiles.length > 0 && Object.keys(profile).length > 0) {
      this.props.dispatchRefreshProfile(profile.id);
    }
  }


  render() {
    const { profile, navigation, profiles, refreshProfile } = this.props;
    return (
      <Container>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Content padder={Object.keys(profile).length === 0 || ( profile.teams && profile.teams.find(x => x.isOld === false) && profile.teams.find(x => x.isOld === false).match && profile.teams.find(x => x.isOld === false).match.isFill === false) ? true : false} refreshControl={
          <RefreshControl refreshing={refreshProfile.loading}
            onRefresh={this.refreshProfile.bind(this)}
          />
        }>
          {profiles.length === 0 ? (
            <EmptyProfiles/>
          ) : Object.keys(profile).length === 0 && profile.constructor === Object ? (<NoneProfilesSelected/>) : 
          profile.teams && profile.teams.find(x => x.isOld === false) && profile.teams.find(x => x.isOld === false).isFill === true ? 
          <MatchLobby/> : (
            <Content>
              <ProfileStats/>
              {profile.teams && profile.teams.find(x => x.isOld === false) && (profile.teams.find(x => x.isOld === false).isFill === false || profile.teams.find(x => x.isOld === false).match.isFill === false) ? (
                <Content padder>
                  <Text style={{ alignSelf:'center' }}>{i18n.t('searchingPlayers')}</Text>
                  <Button large block style={{ backgroundColor: colors.darkViolet1, marginTop: 15, }}>
                      <Spinner color={'white'}/>
                  </Button>
                </Content>
              ) : (
                this.props.searchMatch.loading ? (
                  <Button large block style={{ backgroundColor: colors.darkViolet1, marginTop: 15}}>
                    <Spinner color={'white'}/>
                  </Button>
                ) : (
                  <Button large block style={{ backgroundColor: colors.darkViolet1, marginTop: 15, marginHorizontal: 15, }} onPress={() => this.searchMatch(profile.id)}>
                    <Icon name='play' type='Foundation'/>
                    <Text style={{color: 'white'}}>{i18n.t('play')}</Text>
                  </Button>
                )
              )}
            </Content>
          )}
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    searchMatch: state.searchMatch,
    profiles: state.profiles,
    refreshProfile: state.refreshProfile
  };
}

const mapDispatchToProps = {
  dispatchSearchMatch: (profileId) => searchMatch(profileId),
  dispatchResetSearchMatchState: () => resetSearchMatchState(),
  dispatchRefreshProfile: (profileId) => refreshProfile(profileId),
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray3,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerContainer: {
    width: '100%',
    minHeight: 200,
    padding: 15,
  },
  headerBox: {
    flex: 1,
    backgroundColor: colors.darkViolet1,
    borderRadius: 5,
    padding: 10,
    // justifyContent: 'center'
  }
});
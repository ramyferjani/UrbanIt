import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, StatusBar, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import { Container, Content, Item, Input, Card, CardItem, Header, Title, Form, InputGroup, Icon, Picker, Button, Text, Right, Spinner, Left, Body, Label } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import { material } from 'react-native-typography';

import colors from '../../assets/colors';
import PlayerIcon from '../../components/PlayerIcon';
import RankIcon from '../../components/RankIcon';
import i18n from '../../lib/i18n';
import { getRank } from '../../helpers/rank';
import { TEST_ACTION } from '../../lib/constants';
import { searchMatch, resetSearchMatchState } from '../../actions/searchMatch';

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


  render() {
    const { profile } = this.props
    return (
      <Container>
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
                <Icon type='MaterialCommunityIcons' name='chart-line-variant'/>
                <Text>{i18n.t('matchPlayed')}</Text>
              </Left>
              <Right>
                <Text>100</Text>
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
          {profile.team && !profile.team.isFill ? (
            <Content>
              <Text>{i18n.t('searchingPlayers')}</Text>
              <Button large block style={{ backgroundColor: colors.darkViolet1, marginTop: 15}}>
                  <Spinner color={'white'}/>
              </Button>
            </Content>
          ) : (
            this.props.searchMatch.loading ? (
              <Button large block style={{ backgroundColor: colors.darkViolet1, marginTop: 15}}>
                <Spinner color={'white'}/>
              </Button>
            ) : (
              <Button large block style={{ backgroundColor: colors.darkViolet1, marginTop: 15}} onPress={() => this.searchMatch(profile.id)}>
                <Icon name='play' type='Foundation'/>
                <Text style={{color: 'white'}}>{i18n.t('play')}</Text>
              </Button>
            )
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
  };
}

const mapDispatchToProps = {
  dispatchSearchMatch: (profileId) => searchMatch(profileId),
  dispatchResetSearchMatchState: () => resetSearchMatchState(),
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

// <ScrollView style={styles.container}>
      {/* <StatusBar
      // backgroundColor="blue"
      barStyle="dark-content"
      /> */}
      {/* <View style={{ paddingLeft : 30, paddingTop: 20, backgroundColor: colors.darkViolet1, height: 70 + (width - 80) / 5 + 20 }}>
        <Text style={material.headlineWhite}>{i18n.t('myTeam')}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: width - 60, paddingTop: 20}}>
          {this.generatePlayers(team)}
        </View>
      </View> */}

      {/* <View style={{width: '100%', height: 200, paddingHorizontal: 20, paddingVertical: 10}}>
        <View style={{flex: 1, backgroundColor: 'white', borderRadius: 8, shadowOpacity: 0.75, shadowRadius: 5, shadowColor: colors.darkGray1, shadowOffset: { height: 0, width: 0}}}>

        </View>
      </View> */}
      {/* <TouchableHighlight style={{height: 50, marginHorizontal: 20, marginVertical: 10, marginTop: 30, backgroundColor: 'white', borderRadius: 5, shadowOpacity: 0.75, shadowRadius: 5, shadowColor: colors.darkGray2, shadowOffset: { height: 0, width: 0}}} underlayColor={colors.lightGray2} onPress={() => console.log('test')}>
          <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: width / 15, alignItems: 'center'}}>
            <FontAwesome name='play-circle-o' size={25} color={colors.darkViolet1}/>
            <Text style={{color: 'gray', fontSize: 20, paddingLeft: width / 15}}>Find a Match</Text>
          </View>
      </TouchableHighlight>
      <TouchableHighlight style={{height: 50, marginHorizontal: 20, marginVertical: 10, backgroundColor: 'white', borderRadius: 5, shadowOpacity: 0.75, shadowRadius: 5, shadowColor: colors.darkGray2, shadowOffset: { height: 0, width: 0}}} underlayColor={colors.lightGray2} onPress={() => console.log('test')}>
          <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: width / 15, alignItems: 'center'}}>
            <MaterialCommunityIcons name='tournament' size={20} color={colors.darkViolet1}/>
            <Text style={{color: 'gray', fontSize: 20, paddingLeft: width / 15}}>Competitions</Text>
          </View>
      </TouchableHighlight>
      <TouchableHighlight style={{height: 50, marginHorizontal: 20, marginVertical: 10, backgroundColor: 'white', borderRadius: 5, shadowOpacity: 0.75, shadowRadius: 5, shadowColor: colors.darkGray2, shadowOffset: { height: 0, width: 0}}} underlayColor={colors.lightGray2} onPress={() => console.log('test')}>
          <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: width / 15, alignItems: 'center'}}>
            <MaterialIcons name='playlist-play' size={25} color={colors.darkViolet1}/>
            <Text style={{color: 'gray', fontSize: 20, paddingLeft: width / 15}}>Matches</Text>
          </View>
      </TouchableHighlight>
      <TouchableHighlight style={{height: 50, marginHorizontal: 20, marginVertical: 10, backgroundColor: 'white', borderRadius: 5, shadowOpacity: 0.75, shadowRadius: 5, shadowColor: colors.darkGray2, shadowOffset: { height: 0, width: 0}}} underlayColor={colors.lightGray2} onPress={() => console.log('test')}>
          <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: width / 15, alignItems: 'center'}}>
            <FontAwesome name='list-ol' size={20} color={colors.darkViolet1}/>
            <Text style={{color: 'gray', fontSize: 20, paddingLeft: width / 15}}>Ranks</Text>
          </View>
      </TouchableHighlight>
      <TouchableHighlight style={{height: 50, marginHorizontal: 20, marginVertical: 10, backgroundColor: 'white', borderRadius: 5, shadowOpacity: 0.75, shadowRadius: 5, shadowColor: colors.darkGray2, shadowOffset: { height: 0, width: 0}}} underlayColor={colors.lightGray2} onPress={() => console.log('test')}>
          <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: width / 15, alignItems: 'center'}}>
            <Foundation name='results-demographics' size={20} color={colors.darkViolet1}/>
            <Text style={{color: 'gray', fontSize: 20, paddingLeft: width / 15}}>Teams</Text>
          </View>
      </TouchableHighlight> */}
      {/* <View style={{height: 1, width: '100%', marginLeft: 20, backgroundColor:colors.darkGray1, marginVertical: 30,}}/>
        <View style={styles.headerContainer}>
          <View style={styles.headerBox}> 
            <Text style={material.display1White}>{Navigation.en.myTeam}{this.props.sport.maxPlayers}</Text>
            <TouchableHighlight style={{height: 50, margin: 15, backgroundColor: colors.darkGray2, borderRadius: 5, alignItems: 'center'}}>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <FontAwesome5
                  name='users'
                  size={24}
                  color={'white'}
                />
                <Text style={material.titleWhite}>   {Navigation.en.createTeam}</Text>
              </View>
            </TouchableHighlight>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: width - 30 - 30, alignSelf: 'center'}}>
            {this.generatePlayers(team)}
            </View>
          </View>
        </View> */}
      // </ScrollView>
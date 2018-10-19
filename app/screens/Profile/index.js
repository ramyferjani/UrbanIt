import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView, Dimensions, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Avatar, Divider, Button } from 'react-native-elements';
import { material } from 'react-native-typography';

import { FOOTBALL, BASKETBALL } from '../../lib/constants';
import colors from '../../assets/colors';
import SportProfile from '../../components/SportProfile';
import i18n from '../../lib/i18n';
import { getRank } from '../../lib/rank';


var { height, width } = Dimensions.get('window');

const profiles = [{
  id: 1,
  size: "186",
  weight: "75",
  numero: 9,
  position: "Attaquant",
  ranking: "1000",
  sport: 'football',
}]

class Profile extends React.Component {
  football = () => {
    this.props.dispatch({ type: FOOTBALL });
  }

  basketball = () => {
    this.props.dispatch({ type: BASKETBALL });
  }

  static navigationOptions = ({ navigation }) => ({
    // header: null,
    title: i18n.t('profile'),
    gesturesEnabled: true,
    headerTransparent: false,
    headerTitleStyle: {color: 'white'},
    headerStyle: {
      backgroundColor: colors.darkViolet1,
    },
    // headerBackTitle: ,
    headerRight: (
      <TouchableHighlight onPress={() => navigation.navigate('Messages')} underlayColor={'transparent'} style={{paddingRight: 15}}>
        {/* <FontAwesome
                name='send-o'
                size={24}
                color={colors.darkGray1}
              /> */}
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableHighlight>
    ),
    headerLeft: null,
  })

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.avatarCardContainer}>
          <View style={styles.avatarCard}>
            <View style={styles.avatarContainer}>
              <Avatar
                rounded
                size={(width - 30 - 20 - 20) / 2}
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
            </View>
            <View style={styles.nameContainer}>
              <Text style={material.headlineWhite}>James Bond</Text>
            </View>
          </View>
          {/* <Divider style={{ backgroundColor: colors.darkGray1, marginHorizontal: 20 }} /> */}
          {/* <View style={styles.avatarButtonContainer}>
            <View style={styles.buttonContainer}>

            </View>
            <View style={styles.buttonContainer}>
              <Button title='Editer mon profile'/>
            </View>

          </View> */}
        </View>

        <View>
          <View style={styles.chooseTextContainer}>
            <Text style={styles.chooseText}>{i18n.t('sportSelection')}</Text>
          </View>

          {/* {this.props.auth.user.profiles.map(profile => ( */}
          {profiles.map(profile => (
            <SportProfile key={profile.id} isEnable={this.props.sport.name == profile.sport} sportTitle={'Football'} sportRank={getRank(profile.ranking)} onPress={this.football.bind(this)}></SportProfile>
          ))};
          {/* <SportProfile isEnable={this.props.sport.name == 'football'} sportTitle={'Football'} sportRank={10} onPress={this.football.bind(this)}></SportProfile>
          <SportProfile isEnable={this.props.sport.name == 'basketball'} sportTitle={'Basket'} sportRank={7} onPress={this.basketball.bind(this)}></SportProfile> */}
          <TouchableHighlight style={{height: 50, margin: 15, backgroundColor: colors.darkViolet1, borderRadius: 5, alignItems: 'center'}} underlayColor={colors.darkViolet2} onPress={() => this.props.navigation.navigate('CreateProfile')}>
          <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center'}}>
            <FontAwesome name='plus' size={20} color='white'/>
            {/* <Text style={{color: 'white', fontSize: 20}}>   {SportLocales.en.addSport}</Text> */}
          </View>
          </TouchableHighlight>
        </View>
        {/* <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make wills automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    sport: state.sport,
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Profile);

const styles = StyleSheet.create({
  editButtonText: {
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: colors.lightGray3,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  avatarCardContainer: {
    width: '100%',
    backgroundColor: colors.darkViolet1,
    padding: 15,
  },
  avatarCard: {
    width: '100%',
    padding: 10,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 25,
    color: 'white'
  },
  avatarButtonContainer: {
    padding: 15,
    backgroundColor: 'transparent',
  },
  profileContainer: {
    width: '100%',
    // backgroundColor: 'white',
    padding: 15,
  },
  sportTitleContainer: {
    paddingLeft: width / 15,
    height: 30,
  },
  sportTitle: {
    // fontWeight: 'bold',
    color: colors.darkGray1,
    fontSize: 20,
  },
  sportRankContainer: {
    paddingLeft: width / 15,
    // height: 30,
  },
  sportRank: {
    // fontWeight: 'bold',
    color: colors.darkGray2,
    fontSize: 15,
  },
  chooseTextContainer: {
    width: '100%',
    paddingTop: 15,
    // height: 30,
    alignItems: 'center'
  },
  chooseText: {
    color: colors.darkViolet1,
    fontSize: 24,
  },
  profile: {
    borderLeftWidth: 8,
    borderColor: colors.darkViolet1,
    backgroundColor: 'white',
    height: 80,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: width / 15,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
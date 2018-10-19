import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Avatar, Divider, Button } from 'react-native-elements';

import colors from '../../assets/colors';
import Navigation from '../../assets/locales/Navigation';

var {height, width} = Dimensions.get('window');

export default class EditProfile extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    // header: null,
    title: Navigation.en.editProfile,
    gesturesEnabled: true,
    headerStyle: {
      backgroundColor: colors.darkViolet1,
    },
    headerTransparent: false,
    headerTitleStyle: {color: 'white'},
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
              <Text style={styles.nameText}>James Bond</Text>
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
        {/* <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make wills automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text> */}
      </SafeAreaView>
    );
  }
}

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
    height: 50,
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
    color: 'white'
  },
  avatarButtonContainer: {
    padding: 15,
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
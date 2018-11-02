import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';

export default class Messages extends React.Component {
  static navigationOptions = ({ navigation }) => ({
      // header: null,
      title: i18n.t('messages'),
      gesturesEnabled: true,
      headerTransparent: true,
      headerTitleStyle: {color: 'white'},
      headerStyle: {
        backgroundColor: colors.darkViolet1,
      },
      headerBackTitle: '',
      tabBarVisible: false,
      headerLeft: (
        <TouchableHighlight onPress={() => navigation.goBack()} underlayColor={'transparent'} style={{paddingLeft: 10}}>
          <FontAwesome
                  name='arrow-left'
                  size={24}
                  color={'white'}
                />
        </TouchableHighlight>
      )
      // headerLeft: null,
    })

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make wills automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
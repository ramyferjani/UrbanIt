import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, StatusBar, TouchableHighlight, Dimensions, ScrollView, RefreshControl } from 'react-native';
import { Container, Content, View, Item, Input, Card, CardItem, Header, Title, Form, InputGroup, Icon, Picker, Button, Text, Right, Spinner, Left, Body, Label } from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import i18n from '../../lib/i18n';
import colors from '../../assets/colors';

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }

  static navigationOptions = ({ navigation }) => ({
    // header: null,
    title: i18n.t('chat'),
    gesturesEnabled: true,
    headerTransparent: false,
    headerStyle: {
      backgroundColor: colors.darkViolet1,
    },
    headerTitleStyle: {color: 'white'},
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

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    // const { profile, navigation } = this.props
    return (
      <Container>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <View style={{flex: 1}}>
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
        </View>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

export default connect(mapStateToProps)(Chat);
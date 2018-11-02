import React from 'react';
import { StyleSheet, View, TouchableHighlight, SafeAreaView, Dimensions, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { Avatar, Divider, Button } from 'react-native-elements';
import { Container, Content, Item, Input, Header, Title, Form, InputGroup, Icon, Picker, Button, Text, Right, Spinner, Left, Body, Label, Toast } from 'native-base';

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';
import { updateUser, resetUpdateUserState } from '../../actions/updateUser';

var {height, width} = Dimensions.get('window');

const mapStateToProps = state => ({
  auth: state.auth,
  updateUser: state.updateUser,
})

const mapDispatchToProps = {
  dispatchUpdateUser: (user, userId) => updateUser(user, userId),
  dispatchResetUpdateUserState: () => resetUpdateUserState(),
  // dispatchCreateProfile: (profile) => createProfile(profile),
}

class EditUserInfo extends React.Component {
  constructor(props) {
    super(props);
    const { user } = this.props.auth;
    const test = test;
    this.state = {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      description: user.description
    }
  }

  static navigationOptions = ({ navigation }) => ({
    // header: null,
    title: i18n.t('editUserInfo'),
    gesturesEnabled: true,
    headerStyle: {
      backgroundColor: colors.darkViolet1,
    },
    headerTransparent: false,
    headerTitleStyle: {color: 'white'},
    // headerBackTitle: ,
    headerLeft: (
      <TouchableHighlight onPress={() => navigation.goBack()} underlayColor={'transparent'} style={{paddingLeft: 10}}>
        <FontAwesome
                name='arrow-left'
                size={24}
                color={'white'}
              />
      </TouchableHighlight>
    ),
    // headerRight: (
    //   <TouchableHighlight onPress={() => navigation.navigate('Messages')} underlayColor={'transparent'} style={{paddingRight: 15}}>
    //     {/* <FontAwesome
    //             name='send-o'
    //             size={24}
    //             color={colors.darkGray1}
    //           /> */}
    //     <Text style={styles.editButtonText}>Edit</Text>
    //   </TouchableHighlight>
    // ),
  })

  confirm = () => {
    const { username, firstName, lastName, description } = this.state;
    const { user } = this.props.auth;
    let newUser = { firstName, lastName, description };
    if (username != user.username) {
      newUser['username'] = username;
    }
    this.props.dispatchUpdateUser(newUser, user.id).then(() => {
      if (!this.props.updateUser.error) {
        Toast.show({
          text: i18n.t('savedSuccessfully'),
          buttonText: 'X',
          position: "top"
        })
        this.props.navigation.goBack();
        this.props.dispatchResetUpdateUserState();
      } else {
        Toast.show({
          text: i18n.t('error'),
          buttonText: 'X',
          position: "top"
        })
      }
    });
  }

  render() {
    const { user } = this.props.auth;
    const { username, firstName, lastName, description } = this.state;
    return (
      <Container>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Content>
          <Form>
            <Item fixedLabel /*error={this.props.auth.login && this.props.auth.error && this.props.auth.error.user ? true : false}*/ style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
              {/* <Icon name='md-mail' style={{color: '#000'}} type={'Ionicons'}/> */}
              <Label>{i18n.t('username')}</Label>
              <Input textAlign={'right'} value={username} maxLength={20} autoCapitalize={'none'} autoCorrect={false} onChangeText={(username) => this.setState({ username })} style={{ color: "#000" }}/>
            </Item>
            <Item fixedLabel/*error={this.props.auth.login && this.props.auth.error && this.props.auth.error.user ? true : false}*/ style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
              {/* <Icon name='md-mail' style={{color: '#000'}} type={'Ionicons'}/> */}
              <Label>{i18n.t('firstName')}</Label>
              <Input textAlign={'right'} value={firstName} maxLength={20} autoCorrect={false} onChangeText={(firstName) => this.setState({ firstName })} style={{ color: "#000" }}/>
            </Item>
            <Item fixedLabel/*error={this.props.auth.login && this.props.auth.error && this.props.auth.error.user ? true : false}*/ style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
              {/* <Icon name='md-mail' style={{color: '#000'}} type={'Ionicons'}/> */}
              <Label>{i18n.t('lastName')}</Label>
              <Input textAlign={'right'} value={lastName} maxLength={20} autoCorrect={false} onChangeText={(lastName) => this.setState({ lastName })}  style={{ color: "#000" }}/>
            </Item>
            <Item textarea fixedLabel last /*error={this.props.auth.login && this.props.auth.error && this.props.auth.error.user ? true : false}*/ style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
              {/* <Icon name='md-mail' style={{color: '#000'}} type={'Ionicons'}/> */}
              <Label>{i18n.t('description')}</Label>
              <Input textAlign={'right'} value={description} maxLength={50} autoCapitalize={'none'} autoCorrect={false} onChangeText={(description) => this.setState({ description })} style={{ color: "#000" }}/>
            </Item>
          </Form>
          <Button block onPress={this.confirm} style={{backgroundColor: colors.darkViolet1, marginTop: 30, marginHorizontal: 15}}>
              {this.props.updateUser.loading ? (
                <Spinner color={'white'}/>
              ) : (
                <Text>{i18n.t('save')}</Text>
              )}
              
            </Button>
        </Content>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserInfo);


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
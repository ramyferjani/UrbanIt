import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import { Avatar, Divider, Button } from 'react-native-elements';
import { Container, Content, Item, Input, Header, Title, Form, InputGroup, Icon, Picker, Button, Text, Right, Spinner, Left, Body, Label } from 'native-base';

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';

var {height, width} = Dimensions.get('window');

export default class EditUserInfo extends React.Component {
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
    headerLeft: null,
  })

  render() {
    return (
      <Container>
        <Content padder>
          {/* <Form> */}
            <Item>
              <Left>
                <Text>{i18n.t('sport')}</Text>
              </Left>
              <Right>
                <Picker
                  iosHeader={i18n.t('sport')}
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder={i18n.t('sportSelection')}
                  // placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.sport}
                  onValueChange={this.setSport.bind(this)}
                  headerBackButtonText={i18n.t('back')}
                >
                {availableSports.map(sport => {
                  return (
                    <Picker.Item key={sport} label={i18n.t(sport)} value={sport} />
                  )
                })}
                </Picker>
              </Right>
            </Item>
            <Item fixedLabel /*error={this.props.auth.login && this.props.auth.error && this.props.auth.error.user ? true : false}*/ style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
              {/* <Icon name='md-mail' style={{color: '#000'}} type={'Ionicons'}/> */}
              <Label>{i18n.t('height')}</Label>
              <Input textAlign={'right'} maxLength={3} autoCapitalize={'none'} autoCorrect={false} keyboardType={'number-pad'} onChangeText={(height) => this.setState({ height })} style={{ color: "#000" }}/>
            </Item>
            <Item fixedLabel/*error={this.props.auth.login && this.props.auth.error && this.props.auth.error.user ? true : false}*/ style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
              {/* <Icon name='md-mail' style={{color: '#000'}} type={'Ionicons'}/> */}
              <Label>{i18n.t('weight')}</Label>
              <Input textAlign={'right'} maxLength={3} autoCapitalize={'none'} autoCorrect={false} keyboardType={'number-pad'} onChangeText={(weight) => this.setState({ weight })} style={{ color: "#000" }}/>
            </Item>
            <Item fixedLabel/*error={this.props.auth.login && this.props.auth.error && this.props.auth.error.user ? true : false}*/ style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
              {/* <Icon name='md-mail' style={{color: '#000'}} type={'Ionicons'}/> */}
              <Label>{i18n.t('number')}</Label>
              <Input textAlign={'right'} maxLength={2} autoCapitalize={'none'} autoCorrect={false} keyboardType={'number-pad'} onChangeText={(number) => this.setState({ number })}  style={{ color: "#000" }}/>
            </Item>
            <Item last>
                <Text>{i18n.t('position')}</Text>
              <Right>
                <Picker
                  iosHeader={i18n.t('position')}
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder={i18n.t('positionSelection')}
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.position}
                  onValueChange={(position) => { this.setState({ position }) }}
                  headerBackButtonText={i18n.t('back')}
                >
                  {positions[this.state.sport].map(position => {
                    return (
                      <Picker.Item key={position} label={i18n.t(position)} value={position} />
                    )
                  })}
                  
                </Picker>
              </Right>
            </Item>
            <Button block onPress={this.confirm} style={{backgroundColor: colors.darkViolet1, marginTop: 30}}>
              {this.props.apiProfiles.loading ? (
                <Spinner color={'white'}/>
              ) : (
                <Text>{i18n.t('save')}</Text>
              )}
              
            </Button>
          {/* </Form> */}
        </Content>
      </Container>
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
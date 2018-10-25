import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, TouchableHighlight, TouchableOpacity } from 'react-native';
// import { Input, Button } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Container, Content, Item, Input, Header, Title, Form, InputGroup, Icon, Picker, Button, Text, Right, Spinner, Left, Body, Label } from 'native-base';

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';
import * as positions from '../../lib/positions';
import { sports } from '../../lib/sports';
import { createProfile } from '../../actions/api_profiles';
// import { addProfile } from '../../actions/profiles';

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  sports: state.sports,
  apiProfiles: state.apiProfiles
})

const mapDispatchToProps = {
  dispatchCreateProfile: (profile) => createProfile(profile),
}

class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sport: this.props.sports.availableSports[0],
      position: null,
      height: null,
      weight: null,
      number: null,
      status: {
        sport: null,
        position: null,
        height: null,
        weight: null,
        number: null,
      }
      // availableSports: this.getAvailableSports(),
    };
  }

  static navigationOptions = ({ navigation }) => ({
    // header: null,
    title: i18n.t('createProfile'),
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

  // getAvailableSports = () => {
  //   let availableSports = sports;
  //   let unavailableSports = this.getSportsFromProfiles();

  //   unavailableSports.forEach(unvSport => {
  //     availableSports = availableSports.filter(avaSport => avaSport !== unvSport);
  //   });
  //   return availableSports;
  // }

  // getSportsFromProfiles = () => {
  //   const { profiles } = this.props.auth.user;
  //   let sports = [];
  //   profiles.map(profile => {
  //     sports.push(profile.sport.sport);
  //   });
  //   return sports;
  //   // this.props.auth.user.
  // }

  setSport = (sport) => {
    this.setState({
      sport,
      position: null,
    });
  }

  confirm = () => {
    const { sport, position, height, weight, number } = this.state;
    if (!sport || !position || !height || !weight || !number) {
      console.log(`sport ${sport} position ${position} height ${height} weight ${weight} number ${number}` )
      console.log('empty');
      return;
    }
    this.props.dispatchCreateProfile({ idUser: this.props.auth.user.id, sport, position, size: height, weight, numero: number }).then(() => {
      this.props.navigation.goBack();
    });
  }

  render() {
    const { availableSports } = this.props.sports;
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray3,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    // position: 'absolute',
    width: 100,
    height: 100
  },
  title: {
    color: '#fff',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    fontSize: 30,
    opacity: 0.9
  },
  formContainer: {
    padding: 20
  },
  inputContainer: {
    backgroundColor: colors.lightGray2,
    marginBottom: 20,
    width: '100%',
    borderRadius: 5,
    
    // paddingHorizontal: 10,
  },
  input: {
    height: 40,
    color: colors.darkGray1,
    borderColor: 'red'
  },
  buttonContainer: {
    backgroundColor: "#fff",
    marginBottom: 20,
    // height: 40,
    borderRadius: 5
  },
  button: {
    backgroundColor: "#fff",
    height: 40,
    width: '100%',
    // borderColor: "transparent",
    // borderWidth: 0,
    // borderRadius: 5
    // color: '#F47548'
  },
  signUpContainer: {
    marginBottom: 20,
  },
  signUp: {
    color: '#fff',
  }
});

// render() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.formContainer}>
//         <Input
//           placeholder={UserInformations.en.sport}
//           inputContainerStyle={{borderColor: colors.darkViolet1, borderBottomWidth: 0}}
//           containerStyle={styles.inputContainer}
//           inputStyle={styles.input}
//           placeholderTextColor={colors.darkGray2}
//           underlineColorAndroid={colors.lightGray3}
//           leftIcon={
//             <FontAwesome
//               name='user-o'
//               size={24}
//               color={colors.darkGray1}
//             />
//           }
//         />
//         <Input
//           placeholder={UserInformations.en.height}
//           inputContainerStyle={{borderColor: colors.darkViolet1, borderBottomWidth: 0}}
//           containerStyle={styles.inputContainer}
//           inputStyle={styles.input}
//           placeholderTextColor={colors.darkGray2}
//           underlineColorAndroid={colors.lightGray3}
//           leftIcon={
//             <FontAwesome
//               name='user-o'
//               size={24}
//               color={colors.darkGray1}
//             />
//           }
//         />
//         <Input
//           placeholder={UserInformations.en.weight}
//           inputContainerStyle={{borderColor: colors.darkViolet1, borderBottomWidth: 0}}
//           containerStyle={styles.inputContainer}
//           inputStyle={styles.input}
//           placeholderTextColor={colors.darkGray2}
//           underlineColorAndroid={colors.lightGray3}
//           leftIcon={
//             <FontAwesome
//               name='user-o'
//               size={24}
//               color={colors.darkGray1}
//             />
//           }
//         />
//         <Input
//           placeholder={UserInformations.en.number}
//           inputContainerStyle={{borderColor: colors.darkViolet1, borderBottomWidth: 0}}
//           containerStyle={styles.inputContainer}
//           inputStyle={styles.input}
//           placeholderTextColor={colors.darkGray2}
//           underlineColorAndroid={colors.lightGray3}
//           leftIcon={
//             <FontAwesome
//               name='user-o'
//               size={24}
//               color={colors.darkGray1}
//             />
//           }
//         />
//         <Input
//           placeholder={UserInformations.en.position}
//           inputContainerStyle={{borderColor: colors.darkViolet1, borderBottomWidth: 0}}
//           containerStyle={styles.inputContainer}
//           inputStyle={styles.input}
//           placeholderTextColor={colors.darkGray2}
//           underlineColorAndroid={colors.lightGray3}
//           leftIcon={
//             <FontAwesome
//               name='user-o'
//               size={24}
//               color={colors.darkGray1}
//             />
//           }
//         />
//         {/* <Button
//           title={UserInformations.en.signin}
//           titleStyle={{ color: colors.lightBlue }}
//           buttonStyle={styles.button}
//           containerStyle={styles.buttonContainer}
//           // onPress={() => navigate('Main')}
//         /> */}
//         {/* <TouchableOpacity style={styles.signUpContainer} onPress={() => navigate('Signup')}>
//           <Text style={styles.signUp}>{UserInformations.en.noAccount}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.signUpContainer}>
//           <Text style={styles.signUp}>{UserInformations.en.forgotPassword}</Text>
//         </TouchableOpacity> */}
//         </View>
//     </View>
//   );
// }
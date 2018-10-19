import React from 'react';
import { StyleSheet, View, TouchableHighlight, TouchableOpacity } from 'react-native';
// import { Input, Button } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Container, Content, Item, Input, Header, Title, Form, InputGroup, Icon, Picker, Button, Text, Right, Spinner, Left } from 'native-base';

import colors from '../../assets/colors';
import i18n from '../../lib/i18n';
export default class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSport: null,
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

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item>
              <Left>
                <Text>Sport</Text>
              </Left>
              <Right>
                <Picker
                  iosHeader='Sport'
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Select your Sport"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selectedSport}
                  onValueChange={(selectedSport) => { this.setState({ selectedSport }) }}
                >
                  <Picker.Item label="Football" value="football" />
                  <Picker.Item label="Basketball" value="basketball" />
                </Picker>
              </Right>
            </Item>
            <Item /*error={this.props.auth.login && this.props.auth.error && this.props.auth.error.user ? true : false}*/ style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
              <Icon name='md-mail' style={{color: '#FFF'}} type={'Ionicons'}/>
              <Input autoCapitalize={'none'} autoCorrect={false} keyboardType={'email-address'} onChangeText={(email) => this.setState({ email })} placeholder={i18n.t('email')} style={{ color: "#FFF" }} placeholderTextColor={'#FFF'}/>
            </Item>
            <Item /*error={this.props.auth.login && this.props.auth.error && this.props.auth.error.user ? true : false}*/ style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
              <Icon name='md-mail' style={{color: '#FFF'}} type={'Ionicons'}/>
              <Input autoCapitalize={'none'} autoCorrect={false} keyboardType={'email-address'} onChangeText={(email) => this.setState({ email })} placeholder={i18n.t('email')} style={{ color: "#FFF" }} placeholderTextColor={'#FFF'}/>
            </Item>
            <Item /*error={this.props.auth.login && this.props.auth.error && this.props.auth.error.user ? true : false}*/ style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
              <Icon name='md-mail' style={{color: '#FFF'}} type={'Ionicons'}/>
              <Input autoCapitalize={'none'} autoCorrect={false} keyboardType={'email-address'} onChangeText={(email) => this.setState({ email })} placeholder={i18n.t('email')} style={{ color: "#FFF" }} placeholderTextColor={'#FFF'}/>
            </Item>
            <Item /*error={this.props.auth.login && this.props.auth.error && this.props.auth.error.user ? true : false}*/ style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
              <Icon name='md-mail' style={{color: '#FFF'}} type={'Ionicons'}/>
              <Input autoCapitalize={'none'} autoCorrect={false} keyboardType={'email-address'} onChangeText={(email) => this.setState({ email })} placeholder={i18n.t('email')} style={{ color: "#FFF" }} placeholderTextColor={'#FFF'}/>
            </Item>
            <Item /*error={this.props.auth.login && this.props.auth.error && this.props.auth.error.user ? true : false}*/ style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
              <Icon name='md-mail' style={{color: '#FFF'}} type={'Ionicons'}/>
              <Input autoCapitalize={'none'} autoCorrect={false} keyboardType={'email-address'} onChangeText={(email) => this.setState({ email })} placeholder={i18n.t('email')} style={{ color: "#FFF" }} placeholderTextColor={'#FFF'}/>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

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
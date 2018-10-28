import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, SafeAreaView, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { Container, Content, Item, Input, Form, InputGroup, Icon, Button, Text, Right, Spinner } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { Input, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import { register } from '../../actions/auth';
import colors from './../../assets/colors';
import i18n from '../../lib/i18n';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      firstName: null,
      lastName: null,
      username: null,
      confirmPassword: null,
    };
  }

  static navigationOptions = {
    header: null,
    // title: 'Connexion',
    headerTitle: null,
    gesturesEnabled: false,
    headerTransparent: false,
    headerStyle: {
      backgroundColor: colors.darkViolet1,
    },
    headerTitleStyle: {color: '#fff'},
    headerLeft: null,
    // headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }
  }

  register() {
    const { email, password, username, firstName, lastName, } = this.state;
    if (!this.props.auth.loading) {
      this.props.dispatchSignup(username, email, firstName, lastName, password);
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <LinearGradient style={{flex: 1}} start={{x: 0.3, y: 0.3}} end={{x: 1, y: 1}} colors={[colors.darkViolet1, colors.lightBlue]} locations={[0.3,0.65]}>
        <SafeAreaView style={{flex:1, backgroundColor: 'rgba(0,0,0,0)'}}>
          <Container style={{ backgroundColor: 'rgba(0,0,0,0)'}}>
            <Content padder>
              <Form>
                <Item style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
                  <Icon name='md-person' style={{color: '#FFF'}} type={'Ionicons'}/>
                  <Input autoCapitalize={'none'} autoCorrect={false} type={'username'} onChangeText={(username) => this.setState({ username })} placeholder={i18n.t('username')} style={{ color: "#FFF" }} placeholderTextColor={'#FFF'}/>
                </Item>
                <Item style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
                  <Icon name='md-mail' style={{color: '#FFF'}} type={'Ionicons'}/>
                  <Input autoCapitalize={'none'} autoCorrect={false} type={'email-address'} onChangeText={(email) => this.setState({ email })} placeholder={i18n.t('email')} style={{ color: "#FFF" }} placeholderTextColor={'#FFF'}/>
                </Item>
                <Item style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
                  <Icon name='md-person' style={{color: '#FFF'}} type={'Ionicons'}/>
                  <Input autoCorrect={false} onChangeText={(firstName) => this.setState({ firstName })} placeholder={i18n.t('firstName')} style={{ color: "#FFF" }} placeholderTextColor={'#FFF'}/>
                </Item>
                <Item style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
                  <Icon name='md-person' style={{color: '#FFF'}} type={'Ionicons'}/>
                  <Input autoCorrect={false} onChangeText={(lastName) => this.setState({ lastName })} placeholder={i18n.t('lastName')} style={{ color: "#FFF" }} placeholderTextColor={'#FFF'}/>
                </Item>
                <Item style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
                  <Icon name='ios-unlock' style={{color: '#FFF'}} type={'Ionicons'}/>
                  <Input autoCapitalize={'none'} autoCorrect={false} secureTextEntry type='password' onChangeText={(password) => this.setState({ password })} placeholder={i18n.t('password')} style={{ color: "#FFF" }} placeholderTextColor={'#FFF'}/>
                </Item>
                <Item style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
                  <Icon name='ios-unlock' style={{color: '#FFF'}} type={'Ionicons'}/>
                  <Input autoCapitalize={'none'} autoCorrect={false} secureTextEntry type='password' onChangeText={(confirmPassword) => this.setState({ confirmPassword })} placeholder={i18n.t('confirmPassword')} style={{ color: "#FFF" }} placeholderTextColor={'#FFF'}/>
                </Item>
                <Button rounded block style={{marginTop: 30, backgroundColor: 'white'}} onPress={this.register.bind(this)}>
                {this.props.auth.loading ? (
                  <Spinner color={colors.darkViolet1}/>
                ) : (
                  <Text style={{ color: colors.darkViolet1 }}>{i18n.t('signup')}</Text>
                )}
                </Button>
              </Form>
              <Text>{this.props.auth.token || 'vide'}</Text>
            </Content>
          </Container>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const mapDispatchToProps = {
  dispatchSignup: (email, password, username, firstName, lastName) => register(email, password, username, firstName, lastName),
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
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
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    width: '100%',
    borderRadius: 5
    // paddingHorizontal: 10,
  },
  input: {
    height: 40,
    color: '#fff',
  },
  buttonContainer: {
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 5
    // height: 40,
  },
  button: {
    backgroundColor: "#fff",
    height: 40,
    width: '100%',
    // borderColor: "transparent",
    // borderWidth: 0,
    // color: '#F47548'
  },
  signUpContainer: {
    marginBottom: 20,
  },
  signUp: {
    color: '#fff',
  }
});

// export default class Signup extends React.Component {

//   render() {
//     const { navigate, goBack } = this.props.navigation;

//     return (
//       <LinearGradient style={{flex: 1}} start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={[colors.darkViolet1, colors.lightBlue]} locations={[0.3,0.65]}>
//       <SafeAreaView style={{flex: 1}}>
//       {/* <Button style={{top: 15, left: 15}} onPress={() => goBack()}></Button> */}
//       {/* <TouchableOpacity style={{top: 30, left: 15, height: 100, width: 100}} onPress={() => goBack()}>>
//       <FontAwesome
//                 name='arrow-left'
//                 size={24}
//                 color='white'
//               />
//       </TouchableOpacity> */}
//         <KeyboardAvoidingView behavior="padding" style={styles.container}>
//           <View style={styles.logoContainer}>
//             <Text style={styles.title}>Urban It</Text>
//             <Image resizeMode="contain" style={styles.logo} source={require('../../assets/images/Football.png')}/>
//           </View>
//           <View style={styles.formContainer}>
//           <Input
//             placeholder={UserInformations.en.username}
//             containerStyle={styles.inputContainer}
//             inputStyle={styles.input}
//             placeholderTextColor='#fff'
//             underlineColorAndroid='#fff'
//             leftIcon={
//               <FontAwesome
//                 name='user'
//                 size={24}
//                 color='white'
//               />
//             }
//           />
//           <Input
//             placeholder={UserInformations.en.email}
//             containerStyle={styles.inputContainer}
//             inputStyle={styles.input}
//             placeholderTextColor='#fff'
//             underlineColorAndroid='#fff'
//             leftIcon={
//               <FontAwesome
//                 name='envelope-o'
//                 size={18}
//                 color='white'
//               />
//             }
//           />
//           <Input
//             placeholder={UserInformations.en.firstName}
//             containerStyle={styles.inputContainer}
//             inputStyle={styles.input}
//             placeholderTextColor='#fff'
//             underlineColorAndroid='#fff'
//             leftIcon={
//               <FontAwesome
//                 name='user'
//                 size={24}
//                 color='white'
//               />
//             }
//           />
//           <Input
//             placeholder={UserInformations.en.lastName}
//             containerStyle={styles.inputContainer}
//             inputStyle={styles.input}
//             placeholderTextColor='#fff'
//             underlineColorAndroid='#fff'
//             leftIcon={
//               <FontAwesome
//                 name='user'
//                 size={24}
//                 color='white'
//               />
//             }
//           />
//           <Input
//             placeholder={UserInformations.en.password}
//             containerStyle={styles.inputContainer}
//             inputStyle={styles.input}
//             placeholderTextColor='#fff'
//             underlineColorAndroid='#fff'
//             leftIcon={
//               <FontAwesome
//                 name='lock'
//                 size={24}
//                 color='white'
//               />
//             }
//           />
//           <Input
//             placeholder={UserInformations.en.confirmPassword}
//             containerStyle={styles.inputContainer}
//             inputStyle={styles.input}
//             placeholderTextColor='#fff'
//             underlineColorAndroid='#fff'
//             leftIcon={
//               <FontAwesome
//                 name='lock'
//                 size={24}
//                 color='white'
//               />
//             }
//           />
//           <Button
//             title={UserInformations.en.signup}
//             titleStyle={{ color: colors.lightBlue }}
//             buttonStyle={styles.button}
//             containerStyle={styles.buttonContainer}
//             onPress={() => navigate('Main')}
//           />
//           </View>
//         </KeyboardAvoidingView>
//       </SafeAreaView>
//       </LinearGradient>
//     );
//   }
// }
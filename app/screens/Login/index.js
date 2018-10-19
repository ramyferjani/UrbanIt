import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Container, Content, Item, Input, Form, InputGroup, Icon, Button, Text, Right, Spinner } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { Input, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { material } from 'react-native-typography';

import { login } from '../../actions/user_auth';
import colors from './../../assets/colors';
import UserInformations from '../../assets/locales/UserInformations';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
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

  login() {
    const { email, password } = this.state;
    this.props.dispatchLogin(email, password).then(() => {
      if (this.props.auth.isLoggedIn) {
        this.props.navigation.navigate('App');
      }
    });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <LinearGradient style={{flex: 1}} start={{x: 0.3, y: 0.3}} end={{x: 1, y: 1}} colors={[colors.darkViolet1, colors.lightBlue]} locations={[0.3,0.65]}>
        <SafeAreaView style={{flex:1, backgroundColor: 'rgba(0,0,0,0)'}}>
          <Container style={{ backgroundColor: 'rgba(0,0,0,0)'}}>
            <Content padder>
              <Form>
                <Item /*error={this.props.auth.login && this.props.auth.error && this.props.auth.error.user ? true : false}*/ style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
                  <Icon name='md-mail' style={{color: '#FFF'}} type={'Ionicons'}/>
                  <Input autoCapitalize={'none'} autoCorrect={false} keyboardType={'email-address'} onChangeText={(email) => this.setState({ email })} placeholder={UserInformations.en.email} style={{ color: "#FFF" }} placeholderTextColor={'#FFF'}/>
                </Item>
                <Item style={{ /*backgroundColor: 'rgba(255,255,255,0.3)',*/ borderWidth: 0, marginVertical: 5}}>
                  <Icon name='ios-unlock' style={{color: '#FFF'}} type={'Ionicons'}/>
                  <Input autoCapitalize={'none'} autoCorrect={false} secureTextEntry type='password' onChangeText={(password) => this.setState({ password })} placeholder={UserInformations.en.password} style={{ color: "#FFF" }} placeholderTextColor={'#FFF'}/>
                </Item>
                <Button transparent light style={{marginVertical: 5}}>
                  <Text>{UserInformations.en.forgotPassword}</Text>
                </Button>
                <Button rounded block style={{marginVertical: 5, backgroundColor: 'white'}} onPress={this.login.bind(this)}>
                {this.props.auth.loading ? (
                  <Spinner color={colors.darkViolet1}/>
                ) : (
                  <Text style={{ color: colors.darkViolet1 }}>{UserInformations.en.signin}</Text>)
                }
                </Button>
                <Button transparent light style={{marginVertical: 5}} onPress={() => navigate('Signup')}>
                  <Text>{UserInformations.en.noAccount}</Text>
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
  dispatchLogin: (email, password) => login(email, password),
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logoContainer: {
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

// return (
//   <LinearGradient style={{flex: 1}} start={{x: 0.3, y: 0.3}} end={{x: 1, y: 1}} colors={[colors.darkViolet1, colors.lightBlue]} locations={[0.3,0.65]}>
//   <SafeAreaView style={{flex: 1}}>
//     <KeyboardAvoidingView behavior="padding" style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Text style={material.display2White}>Urban It</Text>
//         <Image resizeMode="contain" style={styles.logo} source={require('../../assets/images/Football.png')}/>
//       </View>
//       <View style={styles.formContainer}>
//       <Input
//         placeholder={UserInformations.en.username}
//         containerStyle={styles.inputContainer}
//         inputStyle={styles.input}
//         placeholderTextColor='#fff'
//         underlineColorAndroid='#fff'
//         leftIcon={
//           <FontAwesome
//             name='user'
//             size={24}
//             color='white'
//           />
//         }
//       />
//       <Input
//         placeholder={UserInformations.en.password}
//         containerStyle={styles.inputContainer}
//         inputStyle={styles.input}
//         placeholderTextColor='#fff'
//         underlineColorAndroid='#fff'
//         leftIcon={
//           <FontAwesome
//             name='lock'
//             size={24}
//             color='white'
//           />
//         }
//       />
//       <Button
//         title={UserInformations.en.signin}
//         titleStyle={{ color: colors.lightBlue }}
//         buttonStyle={styles.button}
//         containerStyle={styles.buttonContainer}
//         onPress={() => navigate('Main')}
//       />
//       <TouchableOpacity style={styles.signUpContainer} onPress={() => navigate('Signup')}>
//         <Text style={styles.signUp}>{UserInformations.en.noAccount}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.signUpContainer}>
//         <Text style={styles.signUp}>{UserInformations.en.forgotPassword}</Text>
//       </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   </SafeAreaView>
//   </LinearGradient>
// );
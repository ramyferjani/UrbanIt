import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Picker, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import colors from '../../assets/colors';
import Navigation from '../../assets/locales/Navigation';
import UserInformations from '../../assets/locales/UserInformations';

export default class CreateProfile extends React.Component {
  static navigationOptions = ({ navigation }) => ({
      // header: null,
      title: Navigation.en.createProfile,
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
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Input
            placeholder={UserInformations.en.sport}
            inputContainerStyle={{borderColor: colors.darkViolet1, borderBottomWidth: 0}}
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            placeholderTextColor={colors.darkGray2}
            underlineColorAndroid={colors.lightGray3}
            leftIcon={
              <FontAwesome
                name='user-o'
                size={24}
                color={colors.darkGray1}
              />
            }
          />
          <Input
            placeholder={UserInformations.en.height}
            inputContainerStyle={{borderColor: colors.darkViolet1, borderBottomWidth: 0}}
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            placeholderTextColor={colors.darkGray2}
            underlineColorAndroid={colors.lightGray3}
            leftIcon={
              <FontAwesome
                name='user-o'
                size={24}
                color={colors.darkGray1}
              />
            }
          />
          <Input
            placeholder={UserInformations.en.weight}
            inputContainerStyle={{borderColor: colors.darkViolet1, borderBottomWidth: 0}}
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            placeholderTextColor={colors.darkGray2}
            underlineColorAndroid={colors.lightGray3}
            leftIcon={
              <FontAwesome
                name='user-o'
                size={24}
                color={colors.darkGray1}
              />
            }
          />
          <Input
            placeholder={UserInformations.en.number}
            inputContainerStyle={{borderColor: colors.darkViolet1, borderBottomWidth: 0}}
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            placeholderTextColor={colors.darkGray2}
            underlineColorAndroid={colors.lightGray3}
            leftIcon={
              <FontAwesome
                name='user-o'
                size={24}
                color={colors.darkGray1}
              />
            }
          />
          <Input
            placeholder={UserInformations.en.position}
            inputContainerStyle={{borderColor: colors.darkViolet1, borderBottomWidth: 0}}
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            placeholderTextColor={colors.darkGray2}
            underlineColorAndroid={colors.lightGray3}
            leftIcon={
              <FontAwesome
                name='user-o'
                size={24}
                color={colors.darkGray1}
              />
            }
          />
          {/* <Button
            title={UserInformations.en.signin}
            titleStyle={{ color: colors.lightBlue }}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            // onPress={() => navigate('Main')}
          /> */}
          {/* <TouchableOpacity style={styles.signUpContainer} onPress={() => navigate('Signup')}>
            <Text style={styles.signUp}>{UserInformations.en.noAccount}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpContainer}>
            <Text style={styles.signUp}>{UserInformations.en.forgotPassword}</Text>
          </TouchableOpacity> */}
          </View>
      </View>
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
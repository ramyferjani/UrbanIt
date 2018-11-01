import React from 'react'
import { TouchableHighlight } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import colors from '../assets/colors'
import LoginScreen from '../containers/Login';
import SignupScreen from '../containers/Signup';
import MainScreen from '../containers/Main';
import MessagesScreen from '../containers/Messages';
import LeaderboardScreen from '../containers/Leaderboard';
import ProfileScreen from '../containers/Profile';
import MatchHistoryScreen from '../containers/MatchHistory';
import SettingsScreen from '../containers/Settings';
import CounterScreen from '../containers/Counter';
import CreateProfileScreen from '../containers/CreateProfile';
import AuthLoadingScreen from '../containers/AuthLoading';
import EditUserInfoScreen from '../containers/EditUserInfo';
import ChatScreen from '../containers/Chat';
import Main from '../containers/Main';
import i18n from '../lib/i18n';

// const MessagesNavigator = createStackNavigator({
//   Messages: { screen: MessagesScreen,
    
// })

const HomeNavigator = createStackNavigator({
  Home: MainScreen,
  Messages: {
    screen: MessagesScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false,
    })
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false,
    })
  },
  },
  {
  headerMode: 'screen',
})

HomeNavigator.navigationOptions = ({ navigation }) => {

  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName

  if ( routeName == 'Messages' ) {
      tabBarVisible = false
  }

  return {
      tabBarVisible,
  }
}

const ProfileNavigator = createStackNavigator({
  Profile: ProfileScreen,
  CreateProfile: CreateProfileScreen,
  EditUserInfo: EditUserInfoScreen,
  // Messages: {
  //   screen: MessagesScreen,
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarVisible: false,
  //   })
  // },
  },
  {
  headerMode: 'screen',
})

ProfileNavigator.navigationOptions = ({ navigation }) => {

  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName

  if ( routeName == 'CreateProfile' ) {
      tabBarVisible = false
  }

  return {
      tabBarVisible,
  }
}

const MatchHistoryNavigator = createStackNavigator({
  MatchHistory: MatchHistoryScreen,
  // Messages: {
  //   screen: MessagesScreen,
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarVisible: false,
  //   })
  // },
  },
  {
  headerMode: 'screen',
})

const LeaderboardNavigator = createStackNavigator({
  Leaderboard: LeaderboardScreen,
  // Messages: {
  //   screen: MessagesScreen,
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarVisible: false,
  //   })
  // },
  },
  {
  headerMode: 'screen',
})

const SettingsNavigator = createStackNavigator({
  Settings: SettingsScreen,
  // Messages: {
  //   screen: MessagesScreen,
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarVisible: false,
  //   })
  // },
  },
  {
  headerMode: 'screen',
})

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeNavigator, navigationOptions: { tabBarOptions: { activeTintColor: colors.darkViolet1, inactiveTintColor: 'gray', }, title: i18n.t('home') } },
    Profile: { screen: ProfileNavigator, navigationOptions: { tabBarOptions: { activeTintColor: colors.darkViolet1, inactiveTintColor: 'gray', }, title: i18n.t('profile') } },
    MatchHistory: { screen: MatchHistoryNavigator, navigationOptions: { tabBarOptions: { activeTintColor: colors.darkViolet1, inactiveTintColor: 'gray', }, title: i18n.t('results') } },
    Leaderboard: { screen: LeaderboardNavigator, navigationOptions: { tabBarOptions: { activeTintColor: colors.darkViolet1, inactiveTintColor: 'gray', }, title: i18n.t('leaderboard') } },
    // Settings: { screen: SettingsNavigator, navigationOptions: { tabBarOptions: { label: i18n.t('settings'), activeTintColor: colors.darkViolet1, inactiveTintColor: 'gray', } } },
  },
  {
    // navigationOptions: ({ navigation }) => {      
    //   const { routeName, routes } = navigation.state;      
    //   return {        
    //     tabBarIcon: ({ focused, tintColor }) => {          
    //       // You can return any component that you like here! 
    //     // We usually create an icon component rendering some svg        
    //       return <Ionicons name={'ios-information-circle'} size={25} color={tintColor} />;       
    //     }
    //   }
    // },
    gesturesEnabled: false,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home${focused ? '' : '-outline'}`;
        } else if (routeName === 'MatchHistory') {
          iconName = `play-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `settings${focused ? '' : '-outline'}`;
          // return <Ionicons name={iconName} size={25} color={tintColor} />;
        } else if (routeName === 'Leaderboard') {
          iconName = `account-multiple-plus${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `account${focused ? '' : '-outline'}`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    },
    backBehavior: 'none'
  },
);

const AuthNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen,
    navigationOptions: ({ navigation }) => ({
      // header: null,
      // title: 'Inscription',
      gesturesEnabled: true,
      headerTransparent: true,
      headerTitleStyle: {color: '#fff'},
      headerBackTitle: '',
      headerLeft: (
        <TouchableHighlight onPress={() => navigation.goBack()} underlayColor={'transparent'} style={{paddingLeft: 10}}>
          <FontAwesome
                  name='arrow-left'
                  size={24}
                  color='white'
                />
        </TouchableHighlight>
      )
      // headerLeft: null,
      // headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }
    })},
  // Main: { screen: TabNavigator, 
  //   navigationOptions: ({ navigation }) => ({
  //     header: null }) }
}, {
  headerMode: 'screen',
  // gesturesEnabled: false,
  initialRouteName: 'Login'
});

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: TabNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

// const LoggedOutAppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');
// const LoggedInAppWithNavigationState = reduxifyNavigator(TabNavigator, 'root');
// const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');
// const AppWithNavigationState = reduxifyNavigator(SwitchNavigator, 'root');

// const mapStateToProps = (state) => ({
//   state: state.nav
// });

// const mapDispatchToProps = (dispatch) => ({
//   dispatch
// });

// const mapStateToProps = state => ({
//   state: state.nav,
// });

// const LoggedOutAppNavigator = connect(mapStateToProps)(LoggedOutAppWithNavigationState);
// const LoggedInAppNavigator = connect(mapStateToProps)(LoggedInAppWithNavigationState);
// const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);


export { SwitchNavigator as AppNavigator, middleware as navigationMiddleware };
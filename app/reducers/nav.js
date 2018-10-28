// import { NavigationActions } from 'react-navigation';

// import { RootNavigator } from '../config/AppNavigator';
// import { LOGIN, LOGOUT } from '../lib/constants';

// const firstAction = RootNavigator.router.getActionForPathAndParams('Main');
// const tempNavState = RootNavigator.router.getStateForAction(firstAction);
// const secondAction = RootNavigator.router.getActionForPathAndParams('Login');
// const initialNavState = RootNavigator.router.getStateForAction(
//   secondAction,
//   tempNavState
// );

// function nav(state = initialNavState, action) {
//   let nextState;
//   switch (action.type) {
//     case LOGIN:
//       nextState = RootNavigator.router.getStateForAction(
//         NavigationActions.back(),
//         state
//       );
//       break;
//     case LOGOUT:
//       nextState = RootNavigator.router.getStateForAction(
//         NavigationActions.navigate({ routeName: 'Login' }),
//         state
//       );
//       break;
//     default:
//       nextState = RootNavigator.router.getStateForAction(action, state);
//       break;
//   }

//   // Simply return the original `state` if `nextState` is null or undefined.
//   return nextState || state;
// }

// export default nav;
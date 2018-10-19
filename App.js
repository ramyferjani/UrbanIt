import React from 'react';
import { AppRegistry } from 'react-native';
// import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { store, persistor } from './app/config/store';
import { PersistGate } from 'redux-persist/integration/react'

// import App from './app/screens/App'
// import { RootNavigator } from './app/config/AppNavigator'

import { AppNavigator } from './app/config/AppNavigator'


// const store = initStore();

class UrbanIt extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('UrbanIt', () => UrbanIt);

export default UrbanIt;
// import App from './app/index';

// export default App;
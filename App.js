import React from 'react';
import { AppRegistry } from 'react-native';
// import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { store, persistor } from './app/config/store';
import { PersistGate } from 'redux-persist/integration/react';
import RNLanguages from 'react-native-languages';

// import App from './app/screens/App'
// import { RootNavigator } from './app/config/AppNavigator'

import { AppNavigator } from './app/config/AppNavigator'
import i18n from './app/lib/i18n';

// const store = initStore();

class UrbanIt extends React.Component {
  componentWillMount() {
    RNLanguages.addEventListener('change', this._onLanguagesChange);
  }

  componentWillUnmount() {
    RNLanguages.removeEventListener('change', this._onLanguagesChange);
  }

  _onLanguagesChange = ({ language }) => {
    i18n.locale = language;
  };

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
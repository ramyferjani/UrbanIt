import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { initStore } from './config/store';

import App from './screens/App'

const store = initStore();

class UrbanIt extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default UrbanIt;
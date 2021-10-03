import * as React from 'react';
import { LogBox } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigations from './navigations/navigations'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  LogBox.ignoreAllLogs(true)

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigations />
      </SafeAreaView>
    </Provider>
  );
}

export default App
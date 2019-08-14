/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { FC, Fragment } from 'react';
import { StatusBar } from 'react-native';
import LoggedOutScreen from './src/screens/LoogedOut';

const App: FC = () => {
  const usingHermes =
    typeof HermesInternal === 'object' && HermesInternal !== null;

  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <LoggedOutScreen />
    </Fragment>
  );
};

export default App;

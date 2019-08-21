import React, { FC, Fragment } from 'react';
import { StatusBar } from 'react-native';
import LogIn from './src/screens/LogIn';

const App: FC = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <LogIn />
    </Fragment>
  );
};

export default App;

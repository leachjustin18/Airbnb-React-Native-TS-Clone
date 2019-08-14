import React, { FC } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
// tslint:disable-next-line
import Icon from 'react-native-vector-icons/FontAwesome';
import RoundedButtons from '../components/buttons/RoundedButtons';
import colors from '../styles/colors';

const LoggedOut: FC = () => {
  return (
    <View>
      <SafeAreaView />
    </View>
  );
};

const styles = StyleSheet.create({
  facebookIcon: {
    color: colors.green01,
    left: 20,
    position: 'relative',
  },
  linkButton: {
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
  },
  logo: {
    alignSelf: 'flex-start',
    height: 50,
    marginBottom: 20,
    marginTop: 20,
    width: 50,
  },
  moreOptionsButton: {
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  moreOptionsButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  safeAreaView: {
    flex: 1,
  },
  termText: {
    color: colors.white,
    fontSize: 10,
  },
  termsAndConditions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  welcomeText: {
    alignSelf: 'flex-start',
    color: colors.white,
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 40,
  },
  welcomeWrapper: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    marginBottom: 15,
    padding: 20,
  },
  wrapper: {
    backgroundColor: colors.green01,
    display: 'flex',
    flex: 1,
  },
});

export default LoggedOut;

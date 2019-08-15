import React, { FC } from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// tslint:disable-next-line
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';

const LogIn: FC = () => {
  return (
    <KeyboardAvoidingView style={styles.wrapper}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.logInText}>Log In</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  logInText: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '300',
    marginBottom: 40,
  },
  safeAreaView: {
    flex: 1,
  },
  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  scrollViewWrapper: {
    marginTop: 50,
  },
  wrapper: {
    backgroundColor: colors.green01,
    flex: 1,
  },
});

export default LogIn;

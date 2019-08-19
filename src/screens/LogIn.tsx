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
import InputField from '../components/form/InputField';
import colors from '../styles/colors';

const LogIn: FC = () => {
  return (
    <KeyboardAvoidingView style={styles.wrapper}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.logInText}>Log In</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              keyboardType="email-address"
            />

            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              secureTextEntry={true}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  logInText: {
    color: colors.white,
    fontSize: 36,
    fontWeight: '300',
    marginBottom: 40,
  },
  safeAreaView: {
    flex: 1,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
  },
  scrollViewWrapper: {
    marginTop: 50,
  },
  wrapper: {
    backgroundColor: colors.green01,
    display: 'flex',
    flex: 1,
  },
});

export default LogIn;

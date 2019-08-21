import React, { FC } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import NextArrowButton from '../components/buttons/NextArrowButton';

// tslint:disable-next-line
import Icon from 'react-native-vector-icons/FontAwesome';
import InputField from '../components/form/InputField';
import colors from '../styles/colors';

const LogIn: FC = () => {
  const handleNextButton = () => {
    Alert.alert('Next Button Clicked');
  };

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
              customWrapperStyle={{ marginBottom: 30 }}
            />

            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              secureTextEntry={true}
              customWrapperStyle={{ marginBottom: 30 }}
            />
          </ScrollView>

          <View style={styles.nextButton}>
            <NextArrowButton handleOnPress={handleNextButton} />
          </View>
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
  nextButton: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    right: 20,
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
    flex: 1,
    marginTop: 50,
  },
  wrapper: {
    backgroundColor: colors.green01,
    display: 'flex',
    flex: 1,
  },
});

export default LogIn;

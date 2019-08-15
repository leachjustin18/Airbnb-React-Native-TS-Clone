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
          <ScrollView>
            <Text>Log In</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
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

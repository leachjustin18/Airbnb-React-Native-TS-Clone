import React, { FC } from 'react';
import {
  Alert,
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
  const onFacebookPress = () => {
    Alert.alert(
      'On Facebook Press',
      '',
      [
        {
          style: 'cancel',
          text: 'Cancel',
        },
        { text: 'OK' },
      ],
      { cancelable: false },
    );
  };

  const onCreateAccountPress = () => {
    Alert.alert(
      'On Create Account Press',
      '',
      [
        {
          style: 'cancel',
          text: 'Cancel',
        },
        { text: 'OK' },
      ],
      { cancelable: false },
    );
  };

  const onMoreOptionsPress = () => {
    Alert.alert(
      'On More Options Press',
      '',
      [
        {
          style: 'cancel',
          text: 'Cancel',
        },
        { text: 'OK' },
      ],
      { cancelable: false },
    );
  };

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <View style={styles.welcomeWrapper}>
            <Image
              source={require('../images/airbnb_vertical_lockup_web.png')}
              style={styles.logo}
            />

            <Text style={styles.welcomeText}>Welcome to AirBnb.</Text>

            <RoundedButtons
              text="Continue with Facebook"
              handleOnPress={onFacebookPress}
              color={colors.green01}
              backgroundColor={colors.white}
              style={{ marginBottom: 15 }}
              icon={
                <Icon name="facebook" size={20} style={styles.facebookIcon} />
              }
            />

            <RoundedButtons
              text="Create Account"
              handleOnPress={onCreateAccountPress}
            />

            <TouchableHighlight
              style={styles.moreOptionsButton}
              onPress={onMoreOptionsPress}
            >
              <Text style={styles.moreOptionsButtonText}>More options</Text>
            </TouchableHighlight>

            <View style={styles.termsAndConditions}>
              <Text style={styles.termText}>
                By tapping Continue, Create Account, or More
              </Text>

              <Text style={styles.termText}> options,</Text>
              <Text style={styles.termText}>I agree to Airbnb's </Text>

              <TouchableHighlight style={styles.linkButton}>
                <Text style={styles.termText}>Terms of Service</Text>
              </TouchableHighlight>

              <Text style={styles.termText}>, </Text>

              <TouchableHighlight style={styles.linkButton}>
                <Text style={styles.termText}>Payments Terms of Service</Text>
              </TouchableHighlight>

              <Text style={styles.termText}>, </Text>

              <TouchableHighlight style={styles.linkButton}>
                <Text style={styles.termText}>Privacy Policy</Text>
              </TouchableHighlight>

              <Text style={styles.termText}>, and </Text>

              <TouchableHighlight style={styles.linkButton}>
                <Text style={styles.termText}>Nondiscrimination Policy</Text>
              </TouchableHighlight>
              <Text style={styles.termText}>.</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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

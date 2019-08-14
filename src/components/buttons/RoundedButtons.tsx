/**
 * @format
 */

import React, { FC } from 'react';
import colors from '../../styles/colors';

import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

interface IRoundedButtonsProps {
  text: string;
  color?: string;
  backgroundColor?: string;
  icon?: object;
  handleOnPress?: () => void;
}

const RoundedButtons: FC<IRoundedButtonsProps> = ({
  text,
  color = colors.white,
  backgroundColor = 'transparent',
  icon,
  handleOnPress,
}) => (
  <TouchableHighlight
    style={[{ backgroundColor }, styles.wrapper]}
    onPress={handleOnPress}
  >
    <View style={styles.iconTextWrapper}>
      {icon}
      <Text style={[{ color }, styles.buttonText]}>{text}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 40,
    padding: 15,
    borderWidth: 1,
    borderColor: colors.white,
  },
  buttonText: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
  iconTextWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});

export default RoundedButtons;

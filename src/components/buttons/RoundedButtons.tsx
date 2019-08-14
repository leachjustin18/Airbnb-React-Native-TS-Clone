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
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
  },

  iconTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  wrapper: {
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 1,
    padding: 15,
  },
});

export default RoundedButtons;

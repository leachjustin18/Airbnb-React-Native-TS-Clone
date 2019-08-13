/**
 * @format
 */

import React, { FC } from 'react';
import colors from '../../styles/colors';

import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

interface RoundedButtonsProps {
  text: string;
  color?: string;
  backgroundColor?: string;
  icon?: object;
  handleOnPress?: () => void;
}

const RoundedButtons: FC<RoundedButtonsProps> = ({
  text,
  color = colors.white,
  backgroundColor = 'transparent',
  icon,
  handleOnPress,
}) => (
  <TouchableHighlight style={{ backgroundColor }} onPress={handleOnPress}>
    <View>
      {icon}
      <Text style={{ color }}>{text}</Text>
    </View>
  </TouchableHighlight>
);

export default RoundedButtons;

import React, { FC } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import colors from '../../styles/colors';

interface IRoundedButtonsProps {
  text: string;
  color?: string;
  backgroundColor?: string;
  icon?: object;
  handleOnPress?: () => void;
  style?: object;
}

const RoundedButtons: FC<IRoundedButtonsProps> = ({
  text,
  color = colors.white,
  backgroundColor = 'transparent',
  icon,
  handleOnPress,
  style,
}) => (
  <TouchableHighlight
    style={[{ backgroundColor }, styles.wrapper, style]}
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

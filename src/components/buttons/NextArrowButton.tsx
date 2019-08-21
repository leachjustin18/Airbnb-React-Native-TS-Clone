import React, { FC } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
// tslint:disable-next-line
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

type Props = {
  disabled?: boolean;
  handleOnPress?: () => void;
};

const NextArrowButton: FC<Props> = ({ disabled, handleOnPress }) => {
  const opacityStyle: object = disabled
    ? { backgroundColor: 'rgba(255, 255, 255, 0.2' }
    : { backgroundColor: 'rgba(255, 255, 255, 0.6)' };
  return (
    <TouchableHighlight
      onPress={handleOnPress}
      style={[opacityStyle, styles.button]}
    >
      <Icon
        color={colors.green01}
        name="angle-right"
        size={32}
        style={styles.icon}
      />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
  icon: {
    marginRight: -2,
    marginTop: -2,
  },
});

export default NextArrowButton;

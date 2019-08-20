import React, { FC } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
// tslint:disable-next-line
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

type Props = {
  handleOnPress?: () => void;
};

const NextArrowButton: FC<Props> = ({ handleOnPress }) => {
  return (
    <TouchableHighlight onPress={handleOnPress}>
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
  icon: {
    marginRight: -2,
    marginTop: -2,
  },
});

export default NextArrowButton;

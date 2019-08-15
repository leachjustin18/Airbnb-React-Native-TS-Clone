import React, { FC } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../styles/colors';

type Props = {
  labelText: string;
  labelTextSize?: number;
  labelColor?: string;
};

const InputField: FC<Props> = ({
  labelColor = colors.white,
  labelText,
  labelTextSize = 14,
}) => {
  return (
    <View>
      <Text
        style={[
          { fontSize: labelTextSize },
          { color: labelColor },
          styles.label,
        ]}
      >
        {labelText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: '700',
    marginBottom: 10,
  },
});

export default InputField;

import React, { FC, HTMLAttributes } from 'react';
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
  textColor?: string;
  borderBottomColor?: string;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | undefined;
  secureTextEntry?: boolean;
  customWrapperStyle?: object;
};

const InputField: FC<Props> = ({
  labelColor = colors.white,
  labelText,
  labelTextSize = 14,
  textColor = colors.white,
  borderBottomColor = colors.white,
  keyboardType,
  secureTextEntry,
  customWrapperStyle,
}) => {
  return (
    <View style={{ ...customWrapperStyle }}>
      <Text
        style={[
          { fontSize: labelTextSize },
          { color: labelColor },
          styles.label,
        ]}
      >
        {labelText}
      </Text>

      <TextInput
        autoCorrect={false}
        style={[{ color: textColor }, { borderBottomColor }, styles.inputField]}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
  },
  label: {
    fontWeight: '700',
    marginBottom: 10,
  },
});

export default InputField;

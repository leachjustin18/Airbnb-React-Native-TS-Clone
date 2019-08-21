import React, { FC, useState } from 'react';
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
    | 'web-search';
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
  const [isSecureTextHidden, setIsSecureTextHidden] = useState(true);

  const handleTogglePassword = () => {
    setIsSecureTextHidden(!isSecureTextHidden);
  };

  return (
    <View style={{ ...customWrapperStyle }}>
      <View style={styles.labelAndShowContainer}>
        <Text
          style={[
            { fontSize: labelTextSize },
            { color: labelColor },
            styles.label,
          ]}
        >
          {labelText}
        </Text>

        {secureTextEntry === true ? (
          <TouchableOpacity onPress={handleTogglePassword}>
            <Text style={styles.showButtonText}>
              {isSecureTextHidden ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <TextInput
        autoCorrect={false}
        style={[{ color: textColor }, { borderBottomColor }, styles.inputField]}
        keyboardType={keyboardType}
        secureTextEntry={isSecureTextHidden}
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
  labelAndShowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  showButtonText: {
    color: colors.white,
    fontWeight: '700',
  },
});

export default InputField;

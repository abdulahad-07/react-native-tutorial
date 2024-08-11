import {View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const CSeparator = () => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: colors.separator,
        marginVertical: 10,
      }}
    />
  );
};

export default CSeparator;

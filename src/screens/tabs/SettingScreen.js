import {View, Text, Switch, TouchableWithoutFeedback} from 'react-native';
import React, {useContext} from 'react';
import {AppContext} from '../../theme/AppContext';
import {useTheme} from '@react-navigation/native';
import {CSeparator} from '../../components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SCREENS from '..';

const SettingScreen = props => {
  const {navigation} = props;

  const {isDarkTheme, setIsDarkTheme} = useContext(AppContext);

  const {colors} = useTheme();

  return (
    <View style={{marginHorizontal: 20, marginVertical: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: colors.text, fontSize: 18}}>Dark Mode</Text>
        <Switch
          value={isDarkTheme}
          onChange={() => {
            setIsDarkTheme(prev => !prev);
          }}
        />
      </View>
      <CSeparator />
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate(SCREENS.LANGUAGE);
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: colors.text, fontSize: 18}}>
            Preferred Language
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: colors.text, fontSize: 18}}>English</Text>
            <Icon name="navigate-next" size={30} color={colors.text} />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <CSeparator />
    </View>
  );
};

export default SettingScreen;

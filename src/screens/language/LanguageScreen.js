import {View, Text, FlatList, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../constants';
import {useTranslation} from 'react-i18next';
import I from './languageConst';
import {getCurrentLocale, setLocale} from '.';

const LanguageScreen = () => {
  const {t} = useTranslation();

  const locales = [
    {tag: 'en', name: 'English'},
    {tag: 'es', name: 'Spanish'},
  ];

  useEffect(() => {
    setSelected(locales.find(l => l.tag === getCurrentLocale()));
  }, []);

  const [selected, setSelected] = useState(locales[0]);

  return (
    <View style={{margin: 20}}>
      <FlatList
        data={locales}
        renderItem={({item}) => {
          let active = item.name === selected.name;
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                setLocale(item.tag);
                setSelected(item);
              }}>
              <View
                style={{
                  height: 70,
                  width: '100%',
                  borderWidth: 3,
                  borderRadius: 10,
                  borderColor: active ? COLORS.ORANGE : COLORS.WHITE,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  backgroundColor: active ? COLORS.ORANGE_BLUR_30 : null,
                }}>
                <Text style={{fontSize: 18}}>{item.name}</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: active ? COLORS.ORANGE : COLORS.GRAY_LIGHT,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                    width: 30,
                  }}>
                  {active && (
                    <View
                      style={{
                        backgroundColor: COLORS.ORANGE,
                        borderRadius: 10,
                        height: 20,
                        width: 20,
                        borderWidth: 1,
                        borderColor: COLORS.ORANGE,
                      }}
                    />
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
      />
      <View style={{marginVertical: 50}}>
        <Text style={{textAlign: 'center', fontSize: 30, marginHorizontal: 10}}>
          {t(I.WELCOME)}
        </Text>
      </View>
    </View>
  );
};

export default LanguageScreen;

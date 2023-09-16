import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import {COLORS, FONTS} from '../../constants';
import {TextInput} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import {View} from 'react-native';

const SignupScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView style={{marginHorizontal: 30}}>
      <Text
        style={{
          marginTop: 100,
          textAlign: 'center',
          fontFamily: FONTS.MONTSERRAT_BOLD,
          fontSize: 24,
        }}>
        Hello!
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: FONTS.MONTSERRAT,
          fontSize: 20,
          marginTop: 20,
          marginHorizontal: 30,
        }}>
        Welcome to the simplified version of React Native tutorial series!
      </Text>
      <View style={{flexDirection: 'row', marginTop: 50}}>
        <TextInput
          style={{
            flex: 1,
            backgroundColor: COLORS.WHITE,
            height: 50,
            maxHeight: 50,
            minHeight: 50,
            fontSize: 16,
            borderRadius: 10,
            paddingHorizontal: 20,
            fontFamily: FONTS.MONTSERRAT,
            marginEnd: 5,
          }}
          placeholder="First Name"
          placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
          cursorColor={COLORS.ORANGE}
          selectionColor={COLORS.ORANGE}
        />
        <TextInput
          style={{
            flex: 1,
            backgroundColor: COLORS.WHITE,
            height: 50,
            maxHeight: 50,
            minHeight: 50,
            fontSize: 16,
            borderRadius: 10,
            paddingHorizontal: 20,
            fontFamily: FONTS.MONTSERRAT,
            marginStart: 5,
          }}
          placeholder="Last Name"
          placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
          cursorColor={COLORS.ORANGE}
          selectionColor={COLORS.ORANGE}
        />
      </View>
      <TextInput
        style={{
          backgroundColor: COLORS.WHITE,
          height: 50,
          maxHeight: 50,
          minHeight: 50,
          fontSize: 16,
          borderRadius: 10,
          paddingHorizontal: 20,
          marginTop: 20,
          fontFamily: FONTS.MONTSERRAT,
        }}
        placeholder="Email"
        placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
        cursorColor={COLORS.ORANGE}
        selectionColor={COLORS.ORANGE}
      />
      <TextInput
        style={{
          backgroundColor: COLORS.WHITE,
          height: 50,
          maxHeight: 50,
          minHeight: 50,
          fontSize: 16,
          borderRadius: 10,
          paddingHorizontal: 20,
          marginTop: 20,
          fontFamily: FONTS.MONTSERRAT,
        }}
        placeholder="Password"
        placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
        cursorColor={COLORS.ORANGE}
        selectionColor={COLORS.ORANGE}
      />
      <TextInput
        style={{
          backgroundColor: COLORS.WHITE,
          height: 50,
          maxHeight: 50,
          minHeight: 50,
          fontSize: 16,
          borderRadius: 10,
          paddingHorizontal: 20,
          marginTop: 20,
          fontFamily: FONTS.MONTSERRAT,
        }}
        placeholder="Confirm Password"
        placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
        cursorColor={COLORS.ORANGE}
        selectionColor={COLORS.ORANGE}
      />
      <TextInput
        style={{
          backgroundColor: COLORS.WHITE,
          height: 50,
          maxHeight: 50,
          minHeight: 50,
          fontSize: 16,
          borderRadius: 10,
          paddingHorizontal: 20,
          marginTop: 20,
          fontFamily: FONTS.MONTSERRAT,
        }}
        placeholder="Mobile"
        placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
        cursorColor={COLORS.ORANGE}
        selectionColor={COLORS.ORANGE}
      />
      <TouchableWithoutFeedback>
        <View
          style={{
            height: 50,
            backgroundColor: COLORS.ORANGE,
            marginTop: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
              color: COLORS.WHITE,
              fontSize: 16,
            }}>
            Sign Up
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
        <Text style={{fontFamily: FONTS.MONTSERRAT_MEDIUM}}>
          Already a member?
        </Text>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Text
            style={{
              marginStart: 5,
              fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
              color: 'orange',
            }}>
            Sign In
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

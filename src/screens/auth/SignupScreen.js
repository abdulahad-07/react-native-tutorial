import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import {COLORS, FONTS} from '../../constants';
import {TextInput} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import {View} from 'react-native';
import Foect from 'foect';
import {Alert} from 'react-native';

const SignupScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView style={{marginHorizontal: 30}}>
      <Text
        style={{
          marginTop: 60,
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
      <Foect.Form
        onValidSubmit={model => {
          Alert.alert('Payload', JSON.stringify(model));
        }}>
        {form => (
          <View>
            <View style={{flexDirection: 'row', marginTop: 50}}>
              <Foect.Control
                name="first_name"
                required
                minLength={2}
                maxLength={32}>
                {control => (
                  <View style={{flex: 1, marginEnd: 5}}>
                    <TextInput
                      style={{
                        backgroundColor: COLORS.WHITE,
                        height: 50,
                        maxHeight: 50,
                        minHeight: 50,
                        fontSize: 16,
                        borderRadius: 10,
                        paddingHorizontal: 20,
                        fontFamily: FONTS.MONTSERRAT,
                      }}
                      placeholder="First Name"
                      placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                      cursorColor={COLORS.ORANGE}
                      selectionColor={COLORS.ORANGE}
                      onBlur={control.markAsTouched}
                      onChangeText={text => control.onChange(text)}
                      value={control.value}
                    />
                    {control.isInvalid && control.errors.required && (
                      <Text
                        style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        First name is required
                      </Text>
                    )}
                    {control.isInvalid &&
                      !control.errors.required &&
                      control.errors.minLength && (
                        <Text
                          style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                          First name should be at least 2 characters long
                        </Text>
                      )}
                    {control.isInvalid && control.errors.maxLength && (
                      <Text
                        style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        First name should be maximum of 32 characters long
                      </Text>
                    )}
                  </View>
                )}
              </Foect.Control>
              <Foect.Control
                name="last_name"
                required
                minLength={2}
                maxLength={32}>
                {control => (
                  <View style={{flex: 1, marginStart: 5}}>
                    <TextInput
                      style={{
                        backgroundColor: COLORS.WHITE,
                        height: 50,
                        maxHeight: 50,
                        minHeight: 50,
                        fontSize: 16,
                        borderRadius: 10,
                        paddingHorizontal: 20,
                        fontFamily: FONTS.MONTSERRAT,
                      }}
                      placeholder="Last Name"
                      placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                      cursorColor={COLORS.ORANGE}
                      selectionColor={COLORS.ORANGE}
                      onBlur={control.markAsTouched}
                      onChangeText={text => control.onChange(text)}
                      value={control.value}
                    />
                    {control.isInvalid && control.errors.required && (
                      <Text
                        style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Last name is required
                      </Text>
                    )}
                    {control.isInvalid &&
                      !control.errors.required &&
                      control.errors.minLength && (
                        <Text
                          style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                          Last name should be at least 2 characters long
                        </Text>
                      )}
                    {control.isInvalid && control.errors.maxLength && (
                      <Text
                        style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Last name should be maximum of 32 characters long
                      </Text>
                    )}
                  </View>
                )}
              </Foect.Control>
            </View>
            <Foect.Control name="email" required email>
              {control => (
                <View style={{marginTop: 20}}>
                  <TextInput
                    style={{
                      backgroundColor: COLORS.WHITE,
                      height: 50,
                      maxHeight: 50,
                      minHeight: 50,
                      fontSize: 16,
                      borderRadius: 10,
                      paddingHorizontal: 20,
                      fontFamily: FONTS.MONTSERRAT,
                    }}
                    placeholder="Email"
                    placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                    cursorColor={COLORS.ORANGE}
                    selectionColor={COLORS.ORANGE}
                    onBlur={control.markAsTouched}
                    onChangeText={text => control.onChange(text)}
                    value={control.value}
                  />
                  {control.isInvalid && control.errors.required && (
                    <Text style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                      Email is required
                    </Text>
                  )}
                  {control.isInvalid &&
                    !control.errors.required &&
                    control.errors.email && (
                      <Text
                        style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Email is not valid
                      </Text>
                    )}
                </View>
              )}
            </Foect.Control>
            <Foect.Control
              name="password"
              required
              pattern={
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
              }>
              {control => (
                <View style={{marginTop: 20}}>
                  <TextInput
                    style={{
                      backgroundColor: COLORS.WHITE,
                      height: 50,
                      maxHeight: 50,
                      minHeight: 50,
                      fontSize: 16,
                      borderRadius: 10,
                      paddingHorizontal: 20,
                      fontFamily: FONTS.MONTSERRAT,
                    }}
                    placeholder="Password"
                    placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                    cursorColor={COLORS.ORANGE}
                    selectionColor={COLORS.ORANGE}
                    onBlur={control.markAsTouched}
                    onChangeText={text => control.onChange(text)}
                    value={control.value}
                  />
                  {control.isInvalid && control.errors.required && (
                    <Text style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                      Password is required
                    </Text>
                  )}
                  {control.isInvalid &&
                    !control.errors.required &&
                    control.errors.pattern && (
                      <Text
                        style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Password should contain minimum eight characters, at
                        least one uppercase letter, one lowercase letter, one
                        number and one special character
                      </Text>
                    )}
                </View>
              )}
            </Foect.Control>
            <Foect.Control
              name="confirm_password"
              required
              equalToControl="password">
              {control => (
                <View style={{marginTop: 20}}>
                  <TextInput
                    style={{
                      backgroundColor: COLORS.WHITE,
                      height: 50,
                      maxHeight: 50,
                      minHeight: 50,
                      fontSize: 16,
                      borderRadius: 10,
                      paddingHorizontal: 20,
                      fontFamily: FONTS.MONTSERRAT,
                    }}
                    placeholder="Confirm Password"
                    placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                    cursorColor={COLORS.ORANGE}
                    selectionColor={COLORS.ORANGE}
                    onBlur={control.markAsTouched}
                    onChangeText={text => control.onChange(text)}
                    value={control.value}
                  />
                  {control.isInvalid && control.errors.required && (
                    <Text style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                      Confirm Password is required
                    </Text>
                  )}
                  {control.isInvalid &&
                    !control.errors.required &&
                    control.errors.equalToControl && (
                      <Text
                        style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Passwords do not match
                      </Text>
                    )}
                </View>
              )}
            </Foect.Control>
            <Foect.Control name="mobile" pattern={/^[0-9]{10}/}>
              {control => (
                <View style={{marginTop: 20}}>
                  <TextInput
                    style={{
                      backgroundColor: COLORS.WHITE,
                      height: 50,
                      maxHeight: 50,
                      minHeight: 50,
                      fontSize: 16,
                      borderRadius: 10,
                      paddingHorizontal: 20,
                      fontFamily: FONTS.MONTSERRAT,
                    }}
                    placeholder="Mobile"
                    placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                    cursorColor={COLORS.ORANGE}
                    selectionColor={COLORS.ORANGE}
                    onBlur={control.markAsTouched}
                    onChangeText={text => control.onChange(text)}
                    value={control.value}
                  />
                  {control.isInvalid && control.errors.pattern && (
                    <Text style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                      Mobile number is not valid
                    </Text>
                  )}
                </View>
              )}
            </Foect.Control>
            <TouchableWithoutFeedback onPress={() => form.submit()}>
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
          </View>
        )}
      </Foect.Form>
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

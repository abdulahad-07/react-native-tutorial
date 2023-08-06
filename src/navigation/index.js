import {createStackNavigator} from '@react-navigation/stack';
import SCREENS from '../screens';
import IntroScreen from '../screens/intro/IntroScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.INTRO}>
      <Stack.Screen
        name={SCREENS.INTRO}
        component={IntroScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

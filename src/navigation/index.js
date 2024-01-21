import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SCREENS from '../screens';
import IntroScreen from '../screens/intro/IntroScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import HomeScreen from '../screens/tabs/HomeScreen';
import {Image} from 'react-native';
import IMAGES from '../assets/images';
import WishlistScreen from '../screens/tabs/WishlistScreen';
import OrdersScreen from '../screens/tabs/OrdersScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';
import {COLORS} from '../constants';
import {useTheme} from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.INTRO}>
      <Stack.Screen
        name={SCREENS.INTRO}
        component={IntroScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.SIGNUP}
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.HOME}
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HOME}
      screenOptions={{tabBarStyle: {backgroundColor: colors.tabbarBackground}}}>
      <Tab.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.HOME}
              style={{
                height: 30,
                width: 30,
                tintColor: focused
                  ? colors.tabbarActiveColor
                  : colors.tabbarInactiveColor,
              }}
            />
          ),
          tabBarActiveTintColor: colors.tabbarActiveColor,
          tabBarInactiveTintColor: colors.tabbarInactiveColor,
        }}
      />
      <Tab.Screen
        name={SCREENS.WISHLIST}
        component={WishlistScreen}
        options={{
          title: 'Wishlist',
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.WISHLIST}
              style={{
                height: 30,
                width: 30,
                tintColor: focused
                  ? colors.tabbarActiveColor
                  : colors.tabbarInactiveColor,
              }}
            />
          ),
          tabBarActiveTintColor: colors.tabbarActiveColor,
          tabBarInactiveTintColor: colors.tabbarInactiveColor,
        }}
      />
      <Tab.Screen
        name={SCREENS.ORDERS}
        component={OrdersScreen}
        options={{
          title: 'Orders',
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.ORDERS}
              style={{
                height: 30,
                width: 30,
                tintColor: focused
                  ? colors.tabbarActiveColor
                  : colors.tabbarInactiveColor,
              }}
            />
          ),
          tabBarActiveTintColor: colors.tabbarActiveColor,
          tabBarInactiveTintColor: colors.tabbarInactiveColor,
        }}
      />
      <Tab.Screen
        name={SCREENS.PROFILE}
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.PROFILE}
              style={{
                height: 30,
                width: 30,
                tintColor: focused
                  ? colors.tabbarActiveColor
                  : colors.tabbarInactiveColor,
              }}
            />
          ),
          tabBarActiveTintColor: colors.tabbarActiveColor,
          tabBarInactiveTintColor: colors.tabbarInactiveColor,
        }}
      />
    </Tab.Navigator>
  );
};

export default StackNavigation;

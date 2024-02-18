import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import SCREENS from '../screens';
import IntroScreen from '../screens/intro/IntroScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import HomeScreen from '../screens/tabs/HomeScreen';
import {Image, SafeAreaView, Text, View} from 'react-native';
import IMAGES from '../assets/images';
import WishlistScreen from '../screens/tabs/WishlistScreen';
import OrdersScreen from '../screens/tabs/OrdersScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';
import {useTheme} from '@react-navigation/native';
import AboutScreen from '../screens/tabs/AboutScreen';
import {COLORS} from '../constants';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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

const ProfileScreenWithDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName={SCREENS.PROFILE}
      drawerContent={props => {
        const {routeNames, index} = props.state;
        const focused = routeNames[index];
        console.log('focused', focused);

        return (
          <DrawerContentScrollView {...props}>
            <View style={{alignItems: 'center', marginBottom: 20}}>
              <Image source={IMAGES.LOGO} style={{height: 100, width: 100}} />
              <Text
                style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
                Code With Abdul
              </Text>
            </View>
            <DrawerItem
              label={'Profile'}
              onPress={() => {
                props.navigation.navigate(SCREENS.PROFILE);
              }}
              focused={focused === SCREENS.PROFILE}
              activeBackgroundColor={COLORS.ORANGE}
              inactiveBackgroundColor={COLORS.GRAY_LIGHT}
              inactiveTintColor={COLORS.BLACK}
              activeTintColor={COLORS.WHITE}
            />
            <DrawerItem
              label={'About'}
              onPress={() => {
                props.navigation.navigate(SCREENS.ABOUT);
              }}
              focused={focused === SCREENS.ABOUT}
              activeBackgroundColor={COLORS.ORANGE}
              inactiveBackgroundColor={COLORS.GRAY_LIGHT}
              inactiveTintColor={COLORS.BLACK}
              activeTintColor={COLORS.WHITE}
            />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
      <Drawer.Screen name={SCREENS.ABOUT} component={AboutScreen} />
    </Drawer.Navigator>
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
        component={ProfileScreenWithDrawer}
        options={{
          title: 'Profile',
          headerShown: false,
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

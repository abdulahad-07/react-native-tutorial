import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';
import {Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import StackNavigation from './src/navigation';
import DarkTheme from './src/theme/DarkTheme';
import LightTheme from './src/theme/LightTheme';
import {AppContext} from './src/theme/AppContext';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const appContext = useMemo(() => {
    return {isDarkTheme, setIsDarkTheme};
  });

  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : LightTheme}>
      <AppContext.Provider value={appContext}>
        <StackNavigation />
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default App;

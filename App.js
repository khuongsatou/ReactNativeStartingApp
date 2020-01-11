import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

import Home from './screens/home.js';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';
const getFonts = () => Font.loadAsync({
  'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Home />
      // <Navigator/>
    );
  } else {
    return (<AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)} />
    )
  }
}


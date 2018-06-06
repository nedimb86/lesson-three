import React from 'react';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import { createStackNavigator } from 'react-navigation';
import { Home, Home2, SView, SList, SCView, FList } from './src'
import {SCREENS} from "./src/utils/consts";

const RootNavigation = createStackNavigator({
  [SCREENS.HOME]: { screen: Home},
  [SCREENS.HOME2]: { screen: Home2},
  [SCREENS.SCVIEW]: { screen: SCView},
  [SCREENS.SLIST]: { screen: SList},
  [SCREENS.SVIEW]: { screen: SView},
  [SCREENS.FLIST]: { screen: FList},
},{ 
  initialRouteName: SCREENS.HOME
});

const App = () => (
  <ThemeProvider uiTheme={uiTheme}>
    <RootNavigation />
  </ThemeProvider>
);

export default App;

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};
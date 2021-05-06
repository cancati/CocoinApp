import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import PortfolioScreen from '../Screens/PortfolioScreen';
import DetailScreen from '../Screens/DetailScreen';
import WebViewScreen from '../Screens/WebViewScreen';
import NewsScreen from '../Screens/NewsScreen';

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>CAn</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName={SettingsScreen}
      headerMode={'screen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'WebScreen'} component={WebViewScreen} />
      <Stack.Screen name={'Setting'} component={SettingsScreen} />
      <Stack.Screen name={'Detail'} component={DetailScreen} />
      <Stack.Screen name={'News'} component={NewsScreen} />
    </Stack.Navigator>
  );
}

export default function Navigators() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

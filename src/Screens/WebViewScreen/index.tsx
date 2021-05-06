import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import Header from '../../Components/Header';

interface props {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
}

const WebViewScreen: React.FunctionComponent<props> = ({navigation, route}) => {
  const weburl = route.params;
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <Header onPress={() => navigation.goBack()} />
      <WebView
        style={{backgroundColor: 'white', marginTop: 40}}
        source={{uri: weburl}}
      />
    </View>
  );
};

export default WebViewScreen;

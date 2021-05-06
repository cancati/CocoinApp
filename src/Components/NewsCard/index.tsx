import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';

interface props {
  data?: any;
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
  onPress?: any;
}

const NewsCard: React.FunctionComponent<props> = ({
  data,
  navigation,
  route,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingVertical: 20,
        borderRadius: 20,
        marginBottom: 20,
        width: '90%',
        alignSelf: 'center',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 3.55,
        padding: 5,
        elevation: 18,
        backgroundColor: '#131316',
      }}>
      <View>
        <Image
          source={{uri: data.item.urlToImage}}
          resizeMode={'cover'}
          style={{
            width: '95%',
            height: 200,
            borderRadius: 20,
            alignSelf: 'center',
          }}
        />
      </View>
      <View style={{marginHorizontal: 15}}>
        <Text
          style={{
            fontSize: 20,
            color: '#FFFFFF',
            fontWeight: '500',
            marginTop: 20,
          }}>
          {data.item.title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: '#FFFFFF80',
            fontWeight: '400',
            width: '100%',
            marginTop: 10,
          }}>
          {data.item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default NewsCard;

import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';

interface props {
  data?: any;
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
  onPress?: any;
}

const NewsSmallCard: React.FunctionComponent<props> = ({
  data,
  navigation,
  route,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 20,
        width: Dimensions.get('window').width * 0.42,
        height: 200,
        marginRight: 10,
        marginLeft: 10,
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
        {data.item.urlToImage == null ? null : (
          <Image
            source={{uri: data.item.urlToImage}}
            resizeMode={'cover'}
            style={{
              width: '95%',
              marginTop: 10,
              height: 80,
              borderRadius: 10,
              alignSelf: 'center',
            }}
          />
        )}
      </View>
      <View style={{marginHorizontal: 15}}>
        <Text
          style={{
            fontSize: 13,
            color: '#FFFFFF',
            maxHeight: 80,
            fontWeight: '500',
            marginTop: 20,
          }}>
          {data.item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default NewsSmallCard;

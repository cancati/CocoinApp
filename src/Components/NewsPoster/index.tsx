import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';

interface props {
  data?: any;
  onPress?: any;
}

const NewsPoster: React.FunctionComponent<props> = ({data, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 20,
        marginTop: 20,
        width: '95%',
        alignSelf: 'center',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 3.55,
        elevation: 18,
        backgroundColor: '#131316',
      }}>
      <View>
        {data.item.urlToImage == null ? null : (
          <Image
            source={{uri: data.item.urlToImage}}
            resizeMode={'cover'}
            style={{
              width: '100%',
              height: 200,
              borderRadius: 20,
              alignSelf: 'center',
            }}
          />
        )}
      </View>

      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          height: '30%',
          borderBottomRightRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomLeftRadius: 20,
          backgroundColor: '#00000070',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#FFFFFF',
            fontWeight: '500',
          }}>
          {data.item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default NewsPoster;

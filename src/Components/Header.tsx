import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import BackButtonSVG from '../Common/svgs/BackButtonSVG';

interface props {
  onPress?: any;
}

const Header: React.FunctionComponent<props> = ({onPress}) => {
  return (
    <View
      style={{
        width: '95%',
        position: 'absolute',
        alignSelf: 'flex-end',
        height: 55,
        zIndex: 2,
        top: Dimensions.get('window').height * 0.9,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <View style={{width: '33%'}}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            width: 44,
            height: 44,
            borderRadius: 44,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#161616',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 9.23,
            shadowRadius: 9.62,
            elevation: 4,
          }}>
          <BackButtonSVG color={'#FFFFFF90'} wh={20} />
        </TouchableOpacity>
      </View>

      <View style={{width: '33%'}} />
      <View style={{width: '33%'}} />
    </View>
  );
};

export default Header;

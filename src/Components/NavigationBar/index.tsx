import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import HomeSVG from '../../Common/svgs/HomeSVG';
import Icon from 'react-native-ionicons';

interface props {
  navigation?: NavigationProp<any>;
  route?: RouteProp<any, any>;
  onPress1?: any;
  onPress2?: any;
  onPress3?: any;
}

const NavigationBar: React.FunctionComponent<props> = ({
  navigation,
  route,
  onPress1,
  onPress2,
  onPress3,
}) => {
  const [selected, setSelected] = useState();

  return (
    <BlurView
      blurType={'ultraThinMaterialDark'}
      style={{
        backgroundColor: '#00000080',
        width: '45%',
        height: 65,
        borderRadius: 35,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingHorizontal: 35,
      }}>
      <TouchableOpacity onPress={onPress1}>
        <Icon ios={'logo-bitcoin'} color={'orange'} size={27} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress2}>
        <HomeSVG color={'#FFFFFF90'} wh={23} />
      </TouchableOpacity>
    </BlurView>
  );
};

export default NavigationBar;

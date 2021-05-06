import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ArrowSVG from '../../Common/svgs/arrow';
import arrow from '../../Common/svgs/arrow';

interface props {
  title?: any;
  onPress?: any;
  arrow?: boolean;
  style?: any;
}
const SortView: React.FunctionComponent<props> = ({
  title,
  onPress,
  arrow,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.box}>
        <ArrowSVG
          color={arrow ? '#145d30' : '#c70b24'}
          wh={20}
          style={
            (style,
            [
              {
                transform: arrow ? [{rotate: '-90deg'}] : [{rotate: '90deg'}],
              },
            ])
          }
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 55,
    height: 30,
    backgroundColor: '#131316',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
export default SortView;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <BlurView blurType={'chromeMaterialDark'} style={styles.searchBox}>
        <View>
          <Text>Log</Text>
        </View>
        <View>
          <Text>Search</Text>
        </View>
        <View>
          <Text>Ok</Text>
        </View>
      </BlurView>
    </View>
  );
};
export default SearchBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,

    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    width: '90%',
    flexDirection: 'row',

    height: 70,
    borderRadius: 35,
  },
});

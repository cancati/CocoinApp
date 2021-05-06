import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import axios from 'axios';
import ArrowSVG from '../../Common/svgs/arrow';

interface props {
  data?: any;
}

function convertToInternationalCurrencySystem(labelValue) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(1) + ' B'
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + 'M'
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + 'K'
    : Math.abs(Number(labelValue));
}

const TripleHeader: React.FunctionComponent<props> = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Market Cap</Text>
        <Text style={styles.priceText}>
          $
          {convertToInternationalCurrencySystem(
            data?.quote?.USD.total_market_cap,
          )}
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>24h Volume</Text>
        <Text style={styles.priceText}>
          {convertToInternationalCurrencySystem(
            data?.quote?.USD.total_volume_24h,
          )}
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>BTC Dominance</Text>
        <Text style={styles.priceText}>%{data?.btc_dominance.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
    height: '35%',
    alignSelf: 'center',
  },
  box: {
    width: '30%',
    height: Dimensions.get('window').height * 0.1,
    backgroundColor: '#131316',
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 1.55,
    padding: 5,
    paddingVertical: 5,
    elevation: 9,
    alignItems: 'flex-start',
  },
  title: {
    marginTop: 10,
    color: '#FFFFFF90',
    fontWeight: '600',
    fontSize: 13,
  },
  priceText: {
    marginTop: 10,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 5,
  },
});

export default TripleHeader;

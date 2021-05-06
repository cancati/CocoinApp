import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface props {
  data?: any;
  navigate?: any;
}

const CoinCard: React.FunctionComponent<props> = ({data, navigate}) => {
  const [window, setWindow] = useState(false);
  const onehour = data.item.quote.USD.percent_change_1h;
  const marketcap = data.item.quote.USD.market_cap;

  return (
    <TouchableOpacity
      onPress={navigate}
      style={{
        backgroundColor: 'transparent',
        paddingVertical: 10,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            top: 0,
            alignSelf: 'flex-start',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,

              borderWidth: 0.5,
              borderColor: '#00000090',
            }}
            source={{
              uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${data.item.id}.png`, //https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/${data.item.id}.png
            }}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
            width: '76%',
            flexDirection: 'row',
            alignContent: 'space-between',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{color: '#FFFFFF', fontWeight: '400', fontSize: 15}}>
              {data.item.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <Text
                style={{color: '#FFFFFF60', fontWeight: '500', fontSize: 13}}>
                {data.item.symbol + ' '}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{
                width: 80,
                height: 40,
              }}
              source={{
                uri: `https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/${data.item.id}.png`, //https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/${data.item.id}.png
              }}
            />
          </View>

          <View style={{alignItems: 'flex-end'}}>
            <Text style={{color: '#FFFFFF', fontWeight: '500', fontSize: 15}}>
              ${'' + data.item.quote.USD.price.toFixed(2)}
            </Text>
            <Text
              style={{
                color: onehour > 0 ? 'green' : 'red',
                fontWeight: '500',
                fontSize: 14,
                marginTop: 5,
              }}>
              {onehour > 0 ? '+' : null}
              {onehour.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CoinCard;

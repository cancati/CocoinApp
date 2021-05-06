import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../Components/Header';
import axios from 'axios';
import NewsCard from '../../Components/NewsCard';
import CoinCard from '../../Components/CoinCard/CoinCard';

interface props {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
}

const DetailScreen: React.FunctionComponent<props> = ({navigation, route}) => {
  const item = route.params?.item;
  const [news, setNews] = useState([]);
  const onehour = item.item.quote.USD.percent_change_1h;
  const [selected, setSelected] = useState('1d');
  const newsQuestion = item.item.name.toLowerCase();

  const dates = ['1d', '7d', '30d'];
  console.log(dates);

  const getNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${newsQuestion}&from=2021-04-24&to=2021-04-24&sortBy=popularity&apiKey=d9545cc7da3e4255bfd83909e5c2f120`,
      )
      .then(res => {
        console.log(res.data);
        setNews(res.data.articles);
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <LinearGradient
      colors={['#2e2e3610', '#131316']}
      start={{x: 0.0, y: 0.2}}
      end={{x: 0.0, y: 0.4}}
      style={{backgroundColor: '#131316', width: '100%', height: '100%'}}>
      <Header onPress={() => navigation.navigate('Home')} />

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 15,
          height: 80,
          width: '100%',
          marginTop: 50,
          alignItems: 'flex-start',
        }}>
        <View>
          <Image
            style={{
              width: 50,
              height: 50,
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
              uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.item.id}.png`, //https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/${data.item.id}.png
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '79%',
          }}>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: '#FFFFFF',
                marginLeft: 10,
              }}>
              {item.item.name}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: '#FFFFFF40',
                marginLeft: 10,
              }}>
              {item.item.symbol}
            </Text>
          </View>
          <View style={{height: '100%', alignItems: 'flex-end'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: '#FFFFFF',
                marginLeft: 10,
              }}>
              {' '}
              ${'' + item.item.quote.USD.price.toFixed(2)}
            </Text>
            <Text
              style={{
                color: onehour > 0 ? 'green' : 'red',
                fontWeight: '500',
                fontSize: 20,
                textAlign: 'right',
                marginTop: 5,
              }}>
              {onehour > 0 ? '+ ' : null}
              {onehour.toFixed(2) + '%'}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '95%',
          borderRadius: 20,
          alignSelf: 'center',
          alignItems: 'center',
          height: '23%',
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 1,
          shadowRadius: 6.55,
          padding: 5,
          elevation: 18,
          backgroundColor: '#131316',
          paddingVertical: 10,
          justifyContent: 'center',
        }}>
        <View>
          <View
            style={{
              width: Dimensions.get('window').width * 0.9,
              height: 0.8,
              backgroundColor: '#FFFFFF30',
            }}
          />
          <View
            style={{
              width: Dimensions.get('window').width * 0.9,
              height: 0.8,
              marginTop: 20,
              backgroundColor: '#FFFFFF30',
            }}
          />
          <View
            style={{
              width: Dimensions.get('window').width * 0.9,
              height: 0.8,
              marginTop: 20,
              backgroundColor: '#FFFFFF30',
            }}
          />
          <View
            style={{
              width: Dimensions.get('window').width * 0.9,
              height: 0.8,
              marginTop: 20,
              backgroundColor: '#FFFFFF30',
            }}
          />
          <View
            style={{
              width: Dimensions.get('window').width * 0.9,
              height: 0.8,
              marginTop: 20,
              backgroundColor: '#FFFFFF30',
            }}
          />
          <View
            style={{
              width: Dimensions.get('window').width * 0.9,
              height: 0.8,
              marginTop: 20,
              backgroundColor: '#FFFFFF30',
            }}
          />
          <View
            style={{
              width: Dimensions.get('window').width * 0.9,
              height: 0.8,
              marginTop: 20,
              backgroundColor: '#FFFFFF30',
            }}
          />
          <View
            style={{
              width: Dimensions.get('window').width * 0.9,
              height: 0.8,
              marginTop: 20,
              backgroundColor: '#FFFFFF30',
            }}
          />
          <Image
            style={{
              position: 'absolute',
              marginTop: 30,
              width: Dimensions.get('window').width * 0.9,
              height: Dimensions.get('window').height * 0.115,
            }}
            source={{
              uri: `https://s3.coinmarketcap.com/generated/sparklines/web/${selected}/usd/${item.item.id}.png`, //https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/${data.item.id}.png
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '95%',
          marginHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        {dates.map(item => {
          return (
            <TouchableOpacity
              style={{
                width: '30%',
                height: 30,
                borderRadius: 5,
                justifyContent: 'center',
                backgroundColor: 'blue',
                alignItems: 'center',
                marginTop: 30,
                shadowColor: selected == item ? '#FFFFFF30' : '#000000',
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 1,
                shadowRadius: selected == item ? 2 : 6.55,
                padding: 5,
                elevation: 18,
                backgroundColor: '#131316',
              }}
              onPress={() => setSelected(item)}>
              <Text style={{color: selected == item ? '#FFFFFF' : '#FFFFFF50'}}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{marginTop: 20}}>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 24,
            marginHorizontal: 10,
            fontWeight: '500',
          }}>
          {item.item.name} News
        </Text>
        <FlatList
          style={{width: '100%', marginTop: 10}}
          data={news}
          keyExtractor={item => item.index}
          renderItem={item => {
            const weburl = item.item.url;
            return (
              <NewsCard
                data={item}
                key={item.index}
                onPress={() => navigation.navigate('WebScreen', weburl)}
              />
            );
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default DetailScreen;

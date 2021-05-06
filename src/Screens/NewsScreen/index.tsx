import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, ScrollView, Text, View} from 'react-native';
import NewsCard from '../../Components/NewsCard';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../Components/Header';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import NewsPoster from '../../Components/NewsPoster';
import NewsSmallCard from '../../Components/NewsSmallCard';
import NavigationBar from '../../Components/NavigationBar';

interface props {
  navigation?: NavigationProp<any>;
  route?: RouteProp<any, any>;
}

const NewsScreen: React.FunctionComponent<props> = ({navigation, route}) => {
  const [news, setNews] = useState([]);

  const [btc, setBtc] = useState([]);
  const [eth, setEth] = useState([]);
  const [bnb, setBnb] = useState([]);

  const getNews = () => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=cripto&from=2021-04-24&to=2021-04-24&sortBy=popularity&apiKey=d9545cc7da3e4255bfd83909e5c2f120',
      )
      .then(res => {
        setNews(res.data.articles);
      })
      .catch(e => console.log(e));
  };

  const getNewsBTC = () => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=bitcoin&from=2021-04-24&to=2021-04-24&sortBy=popularity&apiKey=d9545cc7da3e4255bfd83909e5c2f120',
      )
      .then(res => {
        setBtc(res.data.articles);
      })
      .catch(e => console.log(e));
  };
  const getNewsETH = () => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=ethereum&from=2021-04-24&to=2021-04-24&sortBy=popularity&apiKey=d9545cc7da3e4255bfd83909e5c2f120',
      )
      .then(res => {
        setEth(res.data.articles);
      })
      .catch(e => console.log(e));
  };
  const getNewsBNB = () => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=binance&from=2021-04-24&to=2021-04-24&sortBy=popularity&apiKey=d9545cc7da3e4255bfd83909e5c2f120',
      )
      .then(res => {
        setBnb(res.data.articles);
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    getNews();
    getNewsBTC();
    getNewsETH();
    getNewsBNB();
  }, []);

  console.disableYellowBox = true;
  return (
    <LinearGradient
      colors={['#2e2e3610', '#131316']}
      start={{x: 0.0, y: 0.2}}
      end={{x: 0.0, y: 0.4}}
      style={{backgroundColor: '#131316', width: '100%', height: '100%'}}>
      <View style={{marginTop: 40}}>
        <Carousel
          sty
          data={news}
          renderItem={item => {
            const weburl = item.item.url;
            return (
              <NewsPoster
                data={item}
                key={item.index}
                onPress={() => navigation.navigate('WebScreen', weburl)}
              />
            );
          }}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width * 1}
        />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 30}}>
        <View
          style={{
            height: 250,
            marginTop: 25,
            marginHorizontal: 5,
          }}>
          <View style={{justifyContent: 'center', marginHorizontal: 10}}>
            <Text style={{color: '#FFFFFF', fontSize: 28, fontWeight: '500'}}>
              Bitcoin
            </Text>
          </View>

          <FlatList
            style={{width: '100%', height: 300}}
            data={btc}
            initialNumToRender={2}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={item => item.key}
            renderItem={item => {
              const weburl = item.item.url;
              return (
                <NewsSmallCard
                  data={item}
                  key={item.index}
                  onPress={() => navigation.navigate('WebScreen', weburl)}
                />
              );
            }}
          />
        </View>

        <View
          style={{
            height: 250,
            marginTop: 25,
            marginHorizontal: 5,
          }}>
          <View style={{justifyContent: 'center', marginHorizontal: 10}}>
            <Text style={{color: '#FFFFFF', fontSize: 28, fontWeight: '500'}}>
              Ethereum
            </Text>
          </View>
          <FlatList
            style={{width: '100%', height: 300}}
            data={eth}
            horizontal
            initialNumToRender={2}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.key}
            renderItem={item => {
              const weburl = item.item.url;
              return (
                <NewsSmallCard
                  data={item}
                  key={item.index}
                  onPress={() => navigation.navigate('WebScreen', weburl)}
                />
              );
            }}
          />
        </View>

        <View
          style={{
            height: 250,
            marginTop: 25,
            marginHorizontal: 5,
          }}>
          <View style={{justifyContent: 'center', marginHorizontal: 10}}>
            <Text style={{color: '#FFFFFF', fontSize: 28, fontWeight: '500'}}>
              Binance Coin
            </Text>
          </View>
          <FlatList
            style={{width: '100%', height: 300}}
            data={bnb}
            horizontal
            initialNumToRender={2}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.index}
            renderItem={item => {
              const weburl = item.item.url;
              return (
                <NewsSmallCard
                  data={item}
                  key={item.index}
                  onPress={() => navigation.navigate('WebScreen', weburl)}
                />
              );
            }}
          />
        </View>
      </ScrollView>
      <NavigationBar
        onPress1={() => navigation.navigate('Home')}
        onPress2={() => navigation.navigate('News')}
      />
    </LinearGradient>
  );
};

export default NewsScreen;

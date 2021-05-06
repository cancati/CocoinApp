import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from '../../Components/Header';
import axios from 'axios';
import {images} from '../../Utils/CoinIcons';
import CoinCard from '../../Components/CoinCard/CoinCard';
import TripleHeader from '../../Components/TripleHeader/TripleHeader';
import LinearGradient from 'react-native-linear-gradient';
import SearchBox from '../../Components/SearchBox';
import SortView from '../../Components/SortView';
import NavigationBar from '../../Components/NavigationBar';
import {NavigationProp, RouteProp} from '@react-navigation/native';

interface props {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
}

const HomeScreen: React.FunctionComponent<props> = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [global, setGlobal] = useState();
  const [selected, setSelected] = useState();

  let low = data
    .slice()
    .sort(
      (a, b) => a.quote.USD.percent_change_1h - b.quote.USD.percent_change_1h,
    );

  let high = data
    .slice()
    .sort(
      (a, b) => b.quote.USD.percent_change_1h - a.quote.USD.percent_change_1h,
    );

  const getData = () => {
    axios
      .get(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        {
          headers: {
            'X-CMC_PRO_API_KEY': 'e45ac6d9-ca4b-4583-86aa-5536033f9d25',
          },
          params: {
            start: '1',
            limit: '100',
            convert: 'USD',
          },
        },
      )
      .then(res => {
        setData(res.data.data);
      })
      .catch(e => console.log(e));
  };

  const getDatas = () => {
    axios
      .get(
        'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest',
        {
          headers: {
            'X-CMC_PRO_API_KEY': 'e45ac6d9-ca4b-4583-86aa-5536033f9d25',
          },
        },
      )
      .then(res => {
        setGlobal(res.data.data);
      })
      .catch(e => console.log(e));
  }; //https://newsapi.org/v2/everything?q=tesla&from=2021-03-24&sortBy=publishedAt&apiKey=d9545cc7da3e4255bfd83909e5c2f120

  useEffect(() => {
    getData();
    getDatas();
  }, []);

  return (
    <LinearGradient
      colors={['#2e2e3610', '#131316']}
      start={{x: 0.0, y: 0.2}}
      end={{x: 0.0, y: 0.4}}
      style={{backgroundColor: '#131316', width: '100%', height: '100%'}}>
      <View
        style={{
          height: '15%',
          marginTop: 80,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <TripleHeader data={global} />
      </View>
      <View style={{height: '100%', bottom: 0}}>
        <View
          horizontal
          style={{
            width: '92%',
            height: '5%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: '#FFFFFF', fontWeight: '600', fontSize: 20}}>
              Cryptocurrencies
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SortView
              onPress={() => setData(high)}
              title={'Artan'}
              arrow={true}
            />
            <SortView
              onPress={() => setData(low)}
              title={'Azalan'}
              arrow={false}
            />
          </View>
        </View>
        <FlatList
          style={{width: '100%', marginTop: 10}}
          data={data}
          renderItem={item => {
            return (
              <CoinCard
                data={item}
                key={item.index}
                navigate={() => navigation.navigate('Detail', {item})}
              />
            );
          }}
        />
      </View>
      <NavigationBar
        onPress1={() => navigation.navigate('Home')}
        onPress2={() => navigation.navigate('News')}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

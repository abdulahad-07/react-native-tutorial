/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  Image,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Text} from 'react-native';
import {Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import SplashScreen from 'react-native-splash-screen';
import IMAGES from './src/assets/images';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  const _carousel = useRef();

  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const data = [
    {
      id: 1,
      title: 'Browse Product',
      image: IMAGES.BROWSE,
      description:
        'Browse by category or brand from a variety of more than 1000 products',
    },
    {
      id: 2,
      title: 'Pay Seamlessly',
      image: IMAGES.PAY,
      description:
        'Pay using your preferred method including online or card payment',
    },
    {
      id: 2,
      title: 'Track Order',
      image: IMAGES.TRACK,
      description: 'Track your order from the warehouse to your doorstep',
    },
  ];

  const _renderItem = ({item, index}) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{
            height: Dimensions.get('window').width,
            width: Dimensions.get('window').width,
          }}
        />
        <View style={{padding: 15}}>
          <Text style={{fontSize: 18, fontWeight: '700'}}>{item.title}</Text>
          <Text style={{marginTop: 20, fontSize: 16}}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <View style={{alignItems: 'flex-end', padding: 15}}>
        <Button title="Skip" />
      </View>
      <Carousel
        ref={_carousel}
        data={data}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={index => setActiveDotIndex(index)}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Pagination
          carouselRef={_carousel}
          activeDotIndex={activeDotIndex}
          dotsLength={3}
          dotStyle={{
            width: 15,
            backgroundColor: 'orange',
          }}
          inactiveDotStyle={{
            width: 10,
            height: 10,
            backgroundColor: 'gray',
          }}
        />
        <View style={{padding: 15, flexDirection: 'row'}}>
          <TouchableWithoutFeedback
            onPress={() => {
              _carousel.current.snapToItem(activeDotIndex - 1);
            }}>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: 'lightgray',
                marginEnd: 10,
              }}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              _carousel.current.snapToItem(activeDotIndex + 1);
            }}>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: 'orange',
              }}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

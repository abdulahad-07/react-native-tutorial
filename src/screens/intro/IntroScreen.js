import {
  View,
  Text,
  SafeAreaView,
  Button,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import IMAGES from '../../assets/images';
import {COLORS, FONTS} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import SCREENS from '..';

const IntroScreen = props => {
  const {navigation} = props;

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
          <Text style={{fontSize: 18, fontFamily: FONTS.MONTSERRAT_BOLD}}>
            {item.title}
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 16,
              fontFamily: FONTS.MONTSERRAT,
            }}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <View style={{alignItems: 'flex-end', padding: 15}}>
        <Button
          title="Skip"
          onPress={() => {
            navigation.navigate(SCREENS.LOGIN);
          }}
        />
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
            backgroundColor: COLORS.ORANGE,
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
                backgroundColor: COLORS.GRAY_LIGHT,
                marginEnd: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="arrow-back" size={30} color="#FFF" />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              _carousel.current.snapToItem(activeDotIndex + 1);
              if (activeDotIndex === data.length - 1) {
                navigation.navigate(SCREENS.LOGIN);
              }
            }}>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: COLORS.ORANGE,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="arrow-forward" size={30} color="#FFF" />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;

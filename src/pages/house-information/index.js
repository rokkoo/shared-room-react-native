/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {SafeAreaView, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useDispatch} from 'react-redux';

// Styules
import {
  PostWrapper,
  Image,
  ItemWrapper,
  Block,
} from '../../components/houseList/styles';
import {Text, Wrapper, Price, Divider, UserBlock} from './styes';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const HouseInformation = ({route}) => {
  const {params} = route;
  console.log(params);

  const renderItem = ({item}) => {
    return (
      <ItemWrapper
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
        }}>
        <Image source={{uri: item}} />
      </ItemWrapper>
    );
  };

  return (
    <Wrapper>
      <PostWrapper>
        <Carousel
          data={params.pictures}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          sliderHeight={screenHeight}
          itemWidth={screenWidth / 2}
          layout={'default'}
          activeSlideAlignment={'start'}
        />
      </PostWrapper>
      <Block
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text big>{params.location_name}</Text>
        <Price>{params.price}€</Price>
      </Block>
      <Divider />
      <Text>{params.desc}</Text>
      <UserBlock>
        <Image
          source={{uri: params.pictures[0]}}
          style={{borderRadius: 50, width: 60, height: 60, marginRight: 5}}
        />
        <Text medium>{params.user},</Text>
        <Text medium>24</Text>
      </UserBlock>
    </Wrapper>
  );
};

export default HouseInformation;

/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView, Dimensions, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/AntDesign';

const {width: screenWidth} = Dimensions.get('window');

// Styles
import {
  ItemWrapper,
  Image,
  PostWrapper,
  Text,
  PostFooter,
  Block,
} from './styles';

const HouseList = ({navigation}) => {
  const houses = useSelector(state => state.data);
  const dispatch = useDispatch();

  const nav = () => navigation.navigate('Information');
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={nav}>
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
      </TouchableOpacity>
    );
  };

  const handleLike = index => {
    dispatch({type: 'ADD_FAVORITE', index});
  };

  const handlePagination = (pos, index) => {
    const data = {index, pagination: pos};
    dispatch({type: 'CHANGE_PAGINATION', data});
  };

  const RenderPagination = ({entries}) => {
    return (
      <Pagination
        dotsLength={entries.pictures.length}
        activeDotIndex={entries.current_pagination}
        containerStyle={{
          height: 65,
          backgroundColor: 'red',
        }}
        dotStyle={{
          borderRadius: 5,
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  return (
    <SafeAreaView>
      {Object.entries(houses).map(([index, data]) => {
        return (
          <PostWrapper key={index}>
            <Carousel
              data={data.pictures}
              renderItem={renderItem}
              sliderWidth={screenWidth}
              itemWidth={screenWidth / 3}
              layout={'default'}
              activeSlideAlignment={'start'}
              containerCustomStyle={{paddingLeft: 10}}
              onSnapToItem={pos => handlePagination(pos, index)}
            />
            <Block style={{height: 10}}>
              <Pagination
                dotsLength={data.pictures.length}
                activeDotIndex={data.current_pagination}
                containerStyle={{
                  height: 65,
                  paddingVertical: 0,
                  marginVertical: -15, // can be perform
                }}
                dotStyle={{
                  borderRadius: 5,
                  marginHorizontal: 8,
                  marginVertical: 0,
                  backgroundColor: '#636e72',
                }}
                inactiveDotStyle={
                  {
                    // Define styles for inactive dots here
                  }
                }
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />
            </Block>
            <PostFooter>
              <Block>
                <Text>{data.user}</Text>
                <Text big>{data.location_name}</Text>
              </Block>
              <Icon
                name={data.liked ? 'heart' : 'hearto'}
                size={20}
                color={data.liked ? '#6c5ce7' : '#636e72'}
                onPress={() => handleLike(index)}
              />
            </PostFooter>
          </PostWrapper>
        );
      })}
    </SafeAreaView>
  );
};

export default HouseList;

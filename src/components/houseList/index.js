import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView, Dimensions} from 'react-native';
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

const HouseList = () => {
  const houses = useSelector(state => state.data);
  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    return (
      <ItemWrapper>
        <Image source={{uri: item}} />
      </ItemWrapper>
    );
  };

  const hanldleLike = d => {
    const house = {...d, liked: !d.liked};
    // TODO: Performance, whe update all state so we re-render all items and
    // we dont want it...
    const data = houses.map(da => (da.id === d.id ? house : da));

    dispatch({type: 'ADD_FAVORITE', data});
  };

  const hanldlePagination = (d, index) => {
    const house = {...d, current_pagination: index};
    // TODO: Performance
    const data = houses.map(da => (da.id === d.id ? house : da));

    dispatch({type: 'CHANGE_PAGINATION', data});
  };

  const RenderPagination = ({entries}) => {
    return (
      <Pagination
        dotsLength={entries.pictures.length}
        activeDotIndex={entries.current_pagination}
        containerStyle={{
          height: 65,
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
      {houses.map((data, index) => {
        console.log(data);

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
              onSnapToItem={pos => hanldlePagination(data, pos)}
            />
            <Block>
              <RenderPagination entries={data} />
            </Block>
            <PostFooter>
              <Block>
                <Text>{data.user}</Text>
                <Text big>{data.location_name}</Text>
              </Block>
              <Icon
                name={data.liked ? 'heart' : 'hearto'}
                size={20}
                onPress={() => hanldleLike(data)}
              />
            </PostFooter>
          </PostWrapper>
        );
      })}
    </SafeAreaView>
  );
};

export default HouseList;
